(function () {
  "use strict";

  var MARKS = 2;
  var state = { graded: false, questions: [], timer: null, secondsLeft: 0 };

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function make(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function normalise(value) {
    return String(value)
      .toLowerCase()
      .replace(/[`'\u2018\u2019\u201c\u201d]/g, "")
      .replace(/\s+/g, " ")
      .replace(/[.,;:!?]+$/, "")
      .trim();
  }

  function acceptedAnswers(q) {
    return (Array.isArray(q.answer) ? q.answer : [q.answer]).map(normalise);
  }

  function correctAnswerLabel(q) {
    if (q.type === "tf") return q.answer ? "TRUE" : "FALSE";
    if (q.type === "mcq") return String.fromCharCode(65 + q.answer) + ". " + q.options[q.answer];
    return q.answer && q.answer[0] ? q.answer[0] : "";
  }

  function answerText(q) {
    if (q.type === "tf") return q.answer ? "True" : "False";
    if (q.type === "mcq") return String.fromCharCode(65 + q.answer);
    return q.answer[0];
  }

  function questionBlock(q, number) {
    var article = make("article", "q");
    article.dataset.number = String(number);
    article.dataset.type = q.type;

    article.appendChild(make("span", "q-flag"));

    var prompt = make("div", "q-prompt");
    prompt.appendChild(make("span", "q-num", "Q" + pad(number)));
    var text = make("div", "q-text");
    text.innerHTML = q.q;
    prompt.appendChild(text);
    prompt.appendChild(make("span", "q-marks", "(" + MARKS + ")"));
    article.appendChild(prompt);

    if (q.code) {
      var pre = make("pre");
      var code = make("code");
      code.textContent = q.code;
      pre.appendChild(code);
      article.appendChild(pre);
    }

    var name = "q" + number;

    if (q.type === "fill") {
      var row = make("div", "fill-row");
      var label = make("label", null, "Your answer");
      label.setAttribute("for", name);
      var input = document.createElement("input");
      input.type = "text";
      input.id = name;
      input.name = name;
      input.autocomplete = "off";
      input.spellcheck = false;
      input.placeholder = "Type the missing word or term";
      row.appendChild(label);
      row.appendChild(input);
      article.appendChild(row);
    } else {
      var options = q.type === "tf" ? ["True", "False"] : q.options;
      var group = make("div", "options");
      group.setAttribute("role", "radiogroup");
      group.setAttribute("aria-label", "Answer options");

      for (var i = 0; i < options.length; i++) {
        var opt = make("label", "opt");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = q.type === "tf" ? (i === 0 ? "true" : "false") : String(i);
        opt.appendChild(radio);
        opt.appendChild(make("span", "letter", String.fromCharCode(65 + i)));
        opt.appendChild(make("span", "label", options[i]));
        group.appendChild(opt);
      }
      article.appendChild(group);
    }

    var verdict = make("p", "verdict");
    verdict.setAttribute("aria-live", "polite");
    article.appendChild(verdict);

    var explain = make("div", "explain");
    explain.innerHTML =
      "<strong>Answer:</strong> " + correctAnswerLabel(q) + " &nbsp;—&nbsp; " + (q.explain || "");
    article.appendChild(explain);

    return article;
  }

  function buildQuiz(root, sections, mode) {
    var form = make("form");
    form.id = "quiz-form";
    form.noValidate = true;
    var number = 0;
    state.questions = [];

    sections.forEach(function (section, sectionIndex) {
      var sectionEl = make("section", "section");

      if (section.name) {
        var head = make("div", "section-head");
        head.appendChild(make("h2", null, section.name));
        var marks = section.questions.length * MARKS;
        head.appendChild(make("span", "marks", section.questions.length + " questions · " + marks + " marks"));
        sectionEl.appendChild(head);

        if (section.instruction) {
          var inst = make("p", "exam-meta");
          inst.textContent = section.instruction;
          sectionEl.appendChild(inst);
        }
      }

      section.questions.forEach(function (q) {
        number += 1;
        var el = questionBlock(q, number);
        el.dataset.section = section.name || "Questions";
        el.dataset.sectionIndex = String(sectionIndex);
        state.questions.push({ q: q, el: el, sectionIndex: sectionIndex, sectionName: section.name || "Questions" });
        sectionEl.appendChild(el);
      });

      form.appendChild(sectionEl);
    });

    var actions = make("div", "actions");
    var submit = make("button", "btn btn-primary", mode === "exam" ? "Submit exam" : "Check answers");
    submit.type = "button";
    submit.id = "submit-btn";
    var retry = make("button", "btn btn-ghost", "Try again");
    retry.type = "button";
    retry.id = "retry-btn";
    var progress = make("span", "progress", "0 of " + number + " answered");
    progress.id = "progress";

    actions.appendChild(submit);
    actions.appendChild(retry);
    actions.appendChild(progress);
    form.appendChild(actions);

    root.appendChild(form);

    var summary = make("section", "summary");
    summary.id = "summary";
    summary.setAttribute("aria-live", "polite");
    root.appendChild(summary);

    submit.addEventListener("click", function () {
      grade(sections, mode);
    });
    retry.addEventListener("click", function () {
      window.location.reload();
    });
    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    updateProgress();
  }

  function isAnswered(entry) {
    var el = entry.el;
    if (entry.q.type === "fill") {
      var input = el.querySelector("input[type=text]");
      return input && input.value.trim() !== "";
    }
    return Boolean(el.querySelector("input[type=radio]:checked"));
  }

  function updateProgress() {
    var done = state.questions.filter(isAnswered).length;
    var progress = $("#progress");
    if (progress) progress.textContent = done + " of " + state.questions.length + " answered";
  }

  function isCorrect(entry) {
    var q = entry.q;
    var el = entry.el;

    if (q.type === "fill") {
      var input = el.querySelector("input[type=text]");
      var given = normalise(input ? input.value : "");
      if (!given) return false;
      return acceptedAnswers(q).indexOf(given) !== -1;
    }

    var checked = el.querySelector("input[type=radio]:checked");
    if (!checked) return false;
    if (q.type === "tf") {
      return (checked.value === "true") === q.answer;
    }
    return Number(checked.value) === q.answer;
  }

  function grade(sections, mode) {
    if (state.graded) return;
    state.graded = true;

    var correct = 0;
    var bySection = {};

    state.questions.forEach(function (entry) {
      var ok = isCorrect(entry);
      if (ok) correct += 1;

      var key = entry.sectionIndex;
      if (!bySection[key]) {
        bySection[key] = { name: entry.sectionName, correct: 0, total: 0 };
      }
      bySection[key].total += 1;
      if (ok) bySection[key].correct += 1;

      entry.el.classList.add("graded");
      entry.el.classList.toggle("correct", ok);
      entry.el.classList.toggle("incorrect", !ok);

      var verdict = entry.el.querySelector(".verdict");
      verdict.textContent = ok ? "Correct" : "Incorrect";

      var q = entry.q;
      if (q.type !== "fill") {
        Array.prototype.forEach.call(entry.el.querySelectorAll("input[type=radio]"), function (radio) {
          var label = radio.closest(".opt");
          var isRight = q.type === "tf"
            ? (radio.value === "true") === q.answer
            : Number(radio.value) === q.answer;
          if (isRight) label.classList.add("is-answer");
          if (radio.checked && !ok) label.classList.add("is-chosen-wrong");
          radio.disabled = true;
        });
      } else {
        var input = entry.el.querySelector("input[type=text]");
        if (input) input.disabled = true;
      }
    });

    var total = state.questions.length;
    var totalMarks = total * MARKS;
    var earned = correct * MARKS;
    var pct = Math.round((correct / total) * 100);

    var summary = $("#summary");
    summary.innerHTML = "";

    var heading = correct === total
      ? "Perfect score."
      : pct >= 70
        ? "Solid pass."
        : pct >= 50
          ? "Close — review the gaps."
          : "Needs another pass.";

    summary.appendChild(make("h2", null, heading));
    var scoreLine = make("p", "score-line");
    scoreLine.innerHTML = earned + " / " + totalMarks + " <span class=\"pct\">" + pct + "% · " + correct + " of " + total + " correct</span>";
    summary.appendChild(scoreLine);
    summary.appendChild(
      make(
        "p",
        "lead",
        mode === "exam"
          ? "Every question is worth 2 marks. The correct answer and an explanation appear under each question above."
          : "Read the explanation under every question you missed, then try again."
      )
    );

    if (mode === "exam") {
      var table = make("table", "breakdown");
      table.innerHTML =
        "<thead><tr><th>Section</th><th>Correct</th><th>Marks</th></tr></thead>";
      var body = make("tbody");
      Object.keys(bySection)
        .sort(function (a, b) { return Number(a) - Number(b); })
        .forEach(function (key) {
          var row = bySection[key];
          var tr = document.createElement("tr");
          tr.innerHTML =
            "<td>" + row.name + "</td>" +
            "<td>" + row.correct + " / " + row.total + "</td>" +
            "<td>" + row.correct * MARKS + " / " + row.total * MARKS + "</td>";
          body.appendChild(tr);
        });
      table.appendChild(body);
      summary.appendChild(table);
    }

    var actions = make("div");
    actions.style.marginTop = "22px";
    var retry = make("button", "btn btn-primary", mode === "exam" ? "Retake this paper" : "Retry this test");
    retry.type = "button";
    retry.addEventListener("click", function () {
      window.location.reload();
    });
    var back = make("a", "btn btn-ghost", "All topics");
    back.href = "index.html";
    back.style.marginLeft = "10px";
    back.style.display = "inline-block";
    back.style.textDecoration = "none";
    actions.appendChild(retry);
    actions.appendChild(back);
    summary.appendChild(actions);

    summary.classList.add("show");
    summary.scrollIntoView({ behavior: "smooth", block: "start" });

    var submit = $("#submit-btn");
    if (submit) {
      submit.disabled = true;
      submit.textContent = "Submitted";
      submit.style.opacity = "0.5";
      submit.style.cursor = "default";
    }
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
    document.querySelectorAll("input").forEach(function (input) {
      input.blur();
    });
  }

  function startTimer(minutes) {
    var bar = $(".exam-bar");
    if (!bar) return;
    var timer = make("span", "timer");
    timer.id = "timer";
    bar.appendChild(timer);

    state.secondsLeft = minutes * 60;

    function paint() {
      var remaining = Math.max(0, state.secondsLeft);
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      timer.textContent = "Time remaining " + m + ":" + pad(s);
      timer.classList.toggle("warning", remaining <= 600 && remaining > 120);
      timer.classList.toggle("danger", remaining <= 120);
    }

    paint();
    state.timer = setInterval(function () {
      state.secondsLeft -= 1;
      paint();
      if (state.secondsLeft <= 0 && !state.graded) {
        clearInterval(state.timer);
        state.timer = null;
        var message = make("div", "summary show");
        message.innerHTML = "<h2>Time is up.</h2><p class=\"lead\">Your paper has been marked automatically. Scroll down to review.</p>";
        message.id = "timeup";
        $("#submit-btn").click();
        var summary = $("#summary");
        if (summary) summary.insertAdjacentElement("beforebegin", message);
      }
    }, 1000);
  }

  function meta() {
    return window.STUDY_META || {};
  }

  var currentMode = document.body.dataset.mode || "test";

  function renderTest(topicKey) {
    var topics = window.QUIZ_TOPICS || {};
    var topic = topics[topicKey];
    if (!topic) {
      $("#title").textContent = "Topic not found";
      $("#app").appendChild(
        make("p", "lead", "That test does not exist. Head back to the index and pick a topic.")
      );
      return;
    }

    document.title = topic.title + " — Topic Test";
    $("#title").textContent = topic.title;
    $("#kicker").textContent = "Chapter test · " + topic.questions.length + " questions · " +
      topic.questions.length * MARKS + " marks";
    if (topic.intro) $("#lede").textContent = topic.intro;

    var link = $("#note-link");
    if (link) {
      link.innerHTML = "<a href=\"notes.html?topic=" + encodeURIComponent(topicKey) + "\">Read the chapter here</a>";
    }

    buildQuiz($("#app"), [{ questions: topic.questions }], "test");
  }

  function renderExam(variantKey) {
    var exams = window.QUIZ_EXAMS || {};
    var fallback = Object.keys(exams)[0];
    var exam = exams[variantKey] || exams[fallback];

    if (!exam) {
      document.title = "No exams yet";
      $("#title").textContent = "No mock exams yet";
      $("#kicker").textContent = "Add questions to the chapter pools";
      if ($("#lede")) $("#lede").textContent = "Mock papers are generated from chapter questions. Fill the questions file, rebuild, and come back.";
      return;
    }

    document.title = exam.title;
    $("#title").textContent = exam.title;
    if ($("#lede")) {
      $("#lede").textContent =
        "Answer all questions. Each question is worth 2 marks. Your paper is marked when you submit or when the timer reaches zero.";
    }

    var total = exam.sections.reduce(function (sum, section) {
      return sum + section.questions.length;
    }, 0);

    $("#kicker").textContent = "Full simulation · " + total * MARKS + " marks · " + exam.minutes + " minutes";

    var meta = make("span", "exam-meta", total + " questions · " + total * MARKS + " marks");
    var bar = $(".exam-bar");
    if (bar) bar.appendChild(meta);

    buildQuiz($("#app"), exam.sections, "exam");
    startTimer(exam.minutes);

    window.addEventListener("beforeunload", function (event) {
      if (state.graded) return;
      var answered = state.questions.filter(isAnswered).length;
      if (answered === 0) return;
      event.preventDefault();
      event.returnValue = "";
    });

    var form = $("#quiz-form");
    if (form) {
      form.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && event.target.tagName === "INPUT" && event.target.type === "text") {
          event.preventDefault();
        }
      });
    }
  }

  function init() {
    var params = new URLSearchParams(window.location.search);

    if (currentMode === "exam") {
      renderExam((params.get("variant") || "a").toLowerCase());
    } else if (currentMode === "index" || currentMode === "notes") {
      return;
    } else {
      renderTest(params.get("topic") || "");
    }

    if (window.matchMedia && window.matchMedia("print").matches) {
      document.querySelectorAll(".explain").forEach(function (node) {
        node.style.display = "block";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
