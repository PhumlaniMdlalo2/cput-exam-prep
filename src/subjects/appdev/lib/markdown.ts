const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const safeUrl = (url: string): string => {
  const value = String(url).trim()
  if (/^(https?:|mailto:)/i.test(value)) return value
  if (!/^[a-z][a-z0-9+.-]*:/i.test(value)) return value
  return '#'
}

const imageTag = (name: string, alt?: string): string => {
  const label = (alt || name || '').trim()
  const src = /^(https?:|\.|\/)/i.test(name)
    ? name
    : `/assets/${encodeURIComponent(name)}`
  return `<figure class="note-figure"><img src="${src}" alt="${escapeHtml(label)}" loading="lazy"></figure>`
}

const inline = (input: string): string => {
  const codes: string[] = []
  let text = String(input).replace(/`([^`]+)`/g, (_match, code: string) => {
    codes.push(`<code>${escapeHtml(code)}</code>`)
    return `\u0000${codes.length - 1}\u0000`
  })

  text = escapeHtml(text)

  text = text.replace(/!\[\[([^\]]+)\]\]/g, (_match, raw: string) => {
    const parts = raw.split('|')
    return imageTag(parts[0], parts[1])
  })

  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt: string, url: string) =>
    imageTag(url.trim().split(/\s+/)[0], alt),
  )

  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, label: string, url: string) =>
      `<a href="${safeUrl(url.trim())}" target="_blank" rel="noopener">${label}</a>`,
  )

  text = text.replace(/\[\[([^\]]+)\]\]/g, '<span class="wikilink">$1</span>')
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>')

  return text.replace(/\u0000(\d+)\u0000/g, (_match, index: string) => codes[Number(index)])
}

const isCodey = (line: string): boolean => {
  const text = line.trim()
  if (!text) return false
  if (/^(#{1,6}\s|[-*+]\s|\d+\.\s|>|\||<)/.test(text)) return false
  if (/^```/.test(text)) return false
  if (/^(\/\/|\/\*)/.test(text)) return true
  if (/[{};]$/.test(text)) return true
  if (/^(public|private|protected|class|interface|enum|abstract|static|final|void|return|new|import|package|@Override)\b/.test(text)) return true
  return false
}

const classify = (line: string): string | null => {
  const text = line.trim()
  if (!text) return null
  const wrapped = text.match(/^(`{1,3})([\s\S]*)\1$/)
  if (wrapped && wrapped[2].trim()) {
    return line.replace(/^(\s*)`+/, '$1').replace(/`+\s*$/, '')
  }
  return isCodey(line) ? line : null
}

const normaliseCode = (markdown: string): string => {
  const lines = markdown.split('\n')
  const out: string[] = []
  let i = 0

  while (i < lines.length) {
    if (/^\s*```/.test(lines[i])) {
      do {
        out.push(lines[i])
        i++
      } while (i < lines.length && !/^\s*```/.test(lines[i]))
      if (i < lines.length) {
        out.push(lines[i])
        i++
      }
      continue
    }

    if (classify(lines[i]) === null) {
      out.push(lines[i])
      i++
      continue
    }

    const block: string[] = []
    while (i < lines.length) {
      if (!lines[i].trim()) {
        let j = i
        while (j < lines.length && !lines[j].trim()) j++
        if (j < lines.length && classify(lines[j]) !== null) {
          while (i < j) {
            block.push('')
            i++
          }
          continue
        }
        break
      }
      if (classify(lines[i]) === null) break
      block.push(classify(lines[i]) as string)
      i++
    }

    out.push('```')
    for (const row of block) out.push(row)
    out.push('```')
  }

  return out.join('\n')
}

const isBlockStart = (line: string): boolean =>
  /^\s*```/.test(line) ||
  /^#{1,6}\s+/.test(line) ||
  /^\s*(---+|\*\*\*+)\s*$/.test(line) ||
  /^\s*>/.test(line) ||
  /^\s*([-*+]|\d+\.)\s+/.test(line) ||
  /^\s*!\[\[[^\]]+\]\]\s*$/.test(line) ||
  /^\s*!\[[^\]]*\]\([^)]+\)\s*$/.test(line)

const renderList = (
  lines: string[],
  start: number,
  ordered: boolean,
): { html: string; next: number } => {
  const pattern = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*+]\s+(.*)$/
  const items: string[] = []
  let i = start

  while (i < lines.length) {
    const match = lines[i].match(pattern)
    if (!match) break
    let text = match[1]
    i++
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i]) && !pattern.test(lines[i])) {
      text += ` ${lines[i].trim()}`
      i++
    }
    items.push(`<li>${inline(text)}</li>`)
  }

  const tag = ordered ? 'ol' : 'ul'
  return { html: `<${tag}>${items.join('')}</${tag}>`, next: i }
}

export const renderMarkdown = (markdown: string): string => {
  const lines = normaliseCode(markdown).split('\n')
  const out: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i++
      continue
    }

    if (/^\s*```/.test(line)) {
      const code: string[] = []
      i++
      while (i < lines.length && !/^\s*```/.test(lines[i])) {
        code.push(lines[i])
        i++
      }
      i++
      out.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`)
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`)
      i++
      continue
    }

    if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) {
      out.push('<hr>')
      i++
      continue
    }

    if (/^\s*>/.test(line)) {
      const quote: string[] = []
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        quote.push(lines[i].replace(/^\s*>\s?/, ''))
        i++
      }
      out.push(`<blockquote>${renderMarkdown(quote.join('\n'))}</blockquote>`)
      continue
    }

    const imageOnly = line.trim().match(/^!\[\[([^\]]+)\]\]$/)
    if (imageOnly) {
      const parts = imageOnly[1].split('|')
      out.push(imageTag(parts[0], parts[1]))
      i++
      continue
    }

    const mdImageOnly = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (mdImageOnly) {
      out.push(imageTag(mdImageOnly[2].trim().split(/\s+/)[0], mdImageOnly[1]))
      i++
      continue
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const bullets = renderList(lines, i, false)
      out.push(bullets.html)
      i = bullets.next
      continue
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const numbers = renderList(lines, i, true)
      out.push(numbers.html)
      i = numbers.next
      continue
    }

    const paragraph: string[] = []
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) {
      paragraph.push(lines[i])
      i++
    }
    const html = paragraph
      .map((row) => {
        const hard = / {2,}$/.test(row)
        return inline(row.replace(/\s+$/, '')) + (hard ? '<br>' : ' ')
      })
      .join('')
      .replace(/\s+$/, '')
    out.push(`<p>${html}</p>`)
  }

  return out.join('\n')
}

export const readMinutes = (markdown: string): number => {
  const words = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export const folderLabel = (folder: string): string => {
  if (folder === 'Springboot Security') return 'Spring Security'
  if (folder === 'November exams') return 'Exam paper'
  return folder
}
