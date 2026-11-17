export const chapterById = {
  "ep1": {
    id: "ep1",
    number: 1,
    title: "Introduction to Exam Prep",
    subtitle: "Foundations of exam preparation",
    description: "This chapter covers the fundamental concepts and strategies for effective exam preparation.",
    examWeight: "10%",
    sections: [
      {
        id: "ep1-s1",
        title: "Study Planning",
        blocks: [
          { type: "text", content: "Effective study begins with a solid plan. Set realistic goals and create a timeline." },
          { type: "text", content: "Identify key topics and allocate time based on exam weightings." }
    ]
      },
      {
        id: "ep1-s2",
        title: "Resource Gathering",
        blocks: [
          { type: "text", content: "Collect past papers, notes, and reference materials." },
          { type: "text", content: "Organize materials by topic for easy access during revision." }
    ]
      }
    ],
    keyTerms: [],
    tests: [
      { chapterId: "ep1", questions: [] }
    ]
  },
  "ep2": {
    id: "ep2",
    number: 2,
    title: "Exam Techniques",
    subtitle: "Strategies for success",
    description: "Learn proven techniques for answering different question types effectively.",
    examWeight: "15%",
    sections: [
      {
        id: "ep2-s1",
        title: "Time Management",
        blocks: [
          { type: "text", content: "Practice answering questions within time limits." },
          { type: "text", content: "Use the 80/20 rule: focus on high-yield topics first." }
    ]
      }
    ],
    keyTerms: [],
    tests: []
  }
};

export const chapterTests = [];