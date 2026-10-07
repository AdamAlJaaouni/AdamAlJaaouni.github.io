// Everything on the card comes from here. Keep it in sync with
// public/Adam-Al-Jaaouni-Resume.pdf when the résumé changes.
//
// Text conventions:
//   **bold**  renders as <strong> (use sparingly: metrics a skim should catch)
//        non-breaking space, keeps tokens like "~12 FPS" on one line
//   tier: 2   bullet is dropped on narrow (phone-sized) cards

export const links = {
  phone: "tel:+12269987140",
  email: "mailto:aaljaaouni@gmail.com",
  github: "https://github.com/AdamAlJaaouni",
  linkedin: "https://www.linkedin.com/in/adamaljaaouni/",
  // Relative to the site root; resolved with import.meta.env.BASE_URL.
  resumePdf: "Adam-Al-Jaaouni-Resume.pdf"
};

// Front of the card, laid out like Patrick Bateman's Pierce & Pierce card.
// Strings stay in natural case: Cormorant SC draws lowercase as small caps.
export const card = {
  phone: "226 998 7140",
  firm: "UWaterloo CS",
  firmSubtitle: "Computer Vision Engineer",
  firstName: "Adam",
  lastName: "Al Jaaouni",
  title: "Computer Science Student",
  city: "Waterloo, Ont.",
  contacts: [
    { label: "email", text: "aaljaaouni@gmail.com", href: links.email },
    { label: "github", text: "adamaljaaouni", href: links.github },
    { label: "linkedin", text: "adamaljaaouni", href: links.linkedin }
  ]
};

export const experience = [
  {
    role: "Computer Vision Engineer Intern",
    org: "Gametime Technologies",
    start: { label: "May 2026", dateTime: "2026-05" },
    end: { label: "Present" },
    bullets: [
      {
        text: "Built a basketball CV pipeline end to end: **YOLOv8** fine-tuned in PyTorch, run live on-device via Core ML/Vision at **~12 FPS**."
      },
      {
        text: "Trained a 5-class YOLOv8 detector via transfer learning to **93% mAP50** (0.86 precision / 0.90 recall)."
      },
      {
        text: "Built a React Native + Swift iOS app for live broadcasting across **17 sports** with on-device auto-scoring."
      },
      {
        text: "Raised 1v1 player separability from **0.41 to 0.85** with a lightweight YCbCr shirt-color descriptor instead of a re-ID model.",
        tier: 2
      }
    ]
  },
  {
    role: "Team & Software Captain",
    org: "FRC Robotics Team 3739",
    orgHref: "https://github.com/Oakbotics/2025-FRC-Code",
    orgTitle: "2025 robot code on GitHub",
    start: { label: "Sept. 2022", dateTime: "2022-09" },
    end: { label: "Apr. 2025", dateTime: "2025-04" },
    bullets: [
      {
        text: "Built AprilTag CV and neural-net target detection for autonomous navigation: **±2 cm** accuracy via PID control fused with vision/encoder odometry."
      },
      {
        text: "Led team to provincial division finalist (**3×**) and the **2025 World Championships**; grew programming team from 2 to 12."
      },
      {
        text: "Dean’s List Semi-Finalist; taught Java, OOP and Git.",
        tier: 2
      }
    ]
  }
];

export const projects = [
  {
    title: "Ping Pong Ball Detection",
    date: { label: "Jan. 2026", dateTime: "2026-01" },
    summary:
      "Custom **YOLOv11s** detector trained on Colab GPUs from curated, labeled data; evaluated with mAP@0.5, mAP@0.5:0.95, precision and recall; real-time Python inference."
  },
  {
    title: "Full-Stack News Aggregator",
    href: "https://github.com/AdamAlJaaouni/News-Aggregator",
    date: { label: "Jan. 2026", dateTime: "2026-01" },
    summary:
      "React + Node.js/Express app with real-time NewsAPI data and category/keyword search; containerized with Docker, deployed on AWS ECS."
  }
];

export const skills = [
  { label: "ML/CV", items: "YOLOv8/v11, Core ML, OpenCV, Vision, Ultralytics" },
  { label: "Languages", items: "Java, Python, C, C++, Swift, TypeScript, SQL, Racket" },
  { label: "Frameworks", items: "PyTorch, React, React Native, Node.js/Express, SwiftUI/UIKit" },
  { label: "Tools", items: "Git/GitHub, Docker, PostgreSQL, Claude Code" }
];

export const education = {
  school: "University of Waterloo",
  degree: "Bachelor of Computer Science (Co-op)",
  detail: "AI & SWE specialization",
  start: { label: "Sept. 2025", dateTime: "2025-09" },
  end: { label: "Apr. 2030", dateTime: "2030-04" }
};
