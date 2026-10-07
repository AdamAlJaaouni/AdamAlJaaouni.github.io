// Everything on the card comes from here. Keep it in sync with
// public/Adam-Al-Jaaouni-Resume.pdf when the résumé changes.
//
// Text conventions:
//   **bold**  renders as <strong> (use sparingly: metrics a skim should catch)
//   \u00a0    non-breaking space, keeps tokens like "~12 FPS" on one line
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
  phone: "226\u00a0998\u00a07140",
  firm: "UWaterloo CS",
  firmSubtitle: "Computer Vision Engineer",
  firstName: "Adam",
  lastName: "Al\u00a0Jaaouni",
  title: "Computer Science Student",
  city: "Waterloo, Ont.",
  contacts: [
    { label: "email", text: "aaljaaouni@gmail.com", href: links.email },
    { label: "github", text: "adamaljaaouni", href: links.github },
    { label: "linkedin", text: "adamaljaaouni", href: links.linkedin }
  ]
};

// Back of the card: experience only. Projects, skills and education live in
// the PDF.
export const experience = [
  {
    role: "Computer Vision Engineer Intern",
    org: "Gametime Technologies",
    start: { label: "May 2026", dateTime: "2026-05" },
    end: { label: "Present" },
    bullets: [
      {
        text: "Built a React Native + native Swift iOS app for live sports broadcasting across **17\u00a0sports**, with real-time overlays, multi-destination streaming and on-device auto-scoring."
      },
      {
        text: "Built an end-to-end basketball computer vision pipeline, taking a fine-tuned **YOLOv8** detector from PyTorch training through Core\u00a0ML/Vision deployment for live on-device inference at **~12\u00a0FPS**."
      },
      {
        text: "Trained a 5-class YOLOv8 detector via transfer learning, achieving **93%\u00a0mAP50** (0.86 precision / 0.90 recall), then optimized inference with a cropped second pass to recover distant ball detections."
      },
      {
        text: "Designed a multi-frame state machine to distinguish rim bounce-outs from net-occluded makes, replacing a brittle single-frame make-detection heuristic."
      },
      {
        text: "Improved 1v1 player separability from **0.41\u00a0to\u00a00.85** using a lightweight YCbCr shirt-color descriptor, avoiding the need for a deep re-identification model."
      },
      {
        text: "Maintained feature parity across Swift, TypeScript and Python implementations, validated with a Python/OpenCV integration harness and **250+ Jest unit tests**.",
        tier: 2
      }
    ]
  },
  {
    role: "Team & Software Captain, Robot Driver/Coach",
    org: "FRC Robotics Team 3739",
    orgHref: "https://github.com/Oakbotics/2025-FRC-Code",
    orgTitle: "2025 robot code on GitHub",
    start: { label: "Sept. 2022", dateTime: "2022-09" },
    end: { label: "Apr. 2025", dateTime: "2025-04" },
    bullets: [
      {
        text: "Engineered multi-DOF robotic arms, elevators and flywheel shooters via PID motor, pneumatic and PWM/servo control."
      },
      {
        text: "Built AprilTag CV and neural network target detection for autonomous navigation, achieving **±2\u00a0cm** accuracy via PID control fused with vision/encoder odometry."
      },
      {
        text: "Led team to provincial division finalist (**3×**) and the **2025 World Championships**; grew the programming team from 2 to 12 members."
      },
      {
        text: "Dean’s List Semi-Finalist; taught Java, OOP and Git fundamentals."
      }
    ]
  }
];
