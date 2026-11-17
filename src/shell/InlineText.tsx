import { Fragment } from 'react'

export const InlineText = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    )}
  </>
)
