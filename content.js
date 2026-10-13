// =====================================================================
//  EDIT THIS FILE to update your website. You shouldn't need to touch
//  any other file.
//
//  - Text in [square brackets] is a placeholder: replace or delete it.
//  - Leave a link as "" to hide it.
//  - "bio", "abstract" and "detail" may contain simple HTML,
//    e.g. <a href="...">link</a> or <em>italic</em>.
//  - Upload paper PDFs to the papers/ folder and set "pdf" to
//    "papers/your-file.pdf". Keep file names fixed and overwrite the file
//    when you revise it, so links in your applications never break.
//  - Get your coauthors' agreement before adding a PDF link to a joint paper.
//    With no PDF, the site shows "Draft available upon request".
// =====================================================================

window.SITE = {
  name: "Your Name",
  tagline: "Undergraduate, Massachusetts Institute of Technology",
  email: "[you] [at] mit [dot] edu", // written out so bots can't easily harvest it
  photo: "",                         // e.g. "images/photo.jpg"; "" for no photo

  links: [
    { label: "CV", url: "cv.pdf" },  // upload cv.pdf next to index.html
    { label: "Google Scholar", url: "" },
    { label: "GitHub", url: "" },
  ],

  bio: [
    "I am an undergraduate at MIT studying [Mathematics and Economics]. My research asks how decision systems should be designed when the evidence they rely on is <em>limited</em>, <em>noisy</em>, and <em>shaped by the decision rule itself</em>, drawing on operations research, economic theory, and algorithms.",
    "I currently work with Professor Glenn Ellison on the design of interviews. I am applying to Ph.D. programs in Operations Research for Fall 2027.",
  ],

  // Papers, grouped under headings. Add, remove or reorder groups freely.
  papers: [
    {
      heading: "Working Papers",
      items: [
        {
          title: "[Interview Design and the Value of Noise]",
          authors: ["Your Name", "Glenn Ellison"], // confirm author order with your coauthor
          status: "Working paper",
          year: "2026",
          pdf: "",      // e.g. "papers/interview-design.pdf"
          arxiv: "",
          ssrn: "",
          code: "",     // e.g. a GitHub repo with your numerical verification
          slides: "",
          abstract:
            "Applicants divide effort between productive skill and interview-specific preparation, and employers pay the posterior expected productivity given a noisy interview score. [We show that more accurate assessment can lower welfare: the welfare-maximizing level of noise is strictly positive in a range of parameters, and the welfare loss relative to the first best factors into four wedges, for alignment, information, elasticity, and scale.]",
        },
      ],
    },
    {
      heading: "Work in Progress",
      items: [
        {
          title: "[Sublinear Testing of Shallow Tree Isomorphism]",
          authors: ["Your Name"],
          status: "In preparation",
          year: "2026",
          pdf: "",
          arxiv: "",
          abstract:
            "How many local queries does an algorithm need to tell whether a large tree is isomorphic to a known reference tree? [For trees of diameter at most four, we show matching upper and lower bounds of order &radic;(log&nbsp;n). The lower bound uses indistinguishability of adaptive query transcripts; the upper bound reduces isomorphism testing to distribution identity testing.]",
        },
      ],
    },
  ],

  experience: [
    {
      role: "Research Assistant to [Professor X]",
      org: "Tournaments for Talent",
      period: "[dates]",
      detail: "Models of competitions as devices for both selecting and developing skill.",
    },
    {
      role: "Undergraduate researcher with Professor Glenn Ellison",
      org: "MIT Department of Economics",
      period: "[dates]",
      detail: "Interview design when applicants can prepare for the test itself.",
    },
  ],

  projects: [
    {
      title: "Thinking time and move quality in chess",
      detail: "Empirical-Bayes analysis of how players allocate a limited clock.",
      link: "",
    },
    {
      title: "When do repeated evaluator scores reflect genuine performance?",
      detail: "[Course project, graduate statistics course on modern AI.]",
      link: "",
    },
  ],

  updated: "October 2026",
};
