export const profile = {
  name: "Adam Al Jaaouni",
  title: "First Year Math Student at UWaterloo",
  location: "Waterloo, ON",
  bio: "I'm a first-year Math student at UWaterloo passionate about machine learning, computer vision, and robotics.",
  email: "aaljaaouni@gmail.com",
  github: "https://github.com/AdamAlJaaouni",
  linkedin: "www.linkedin.com/in/adamaljaaouni"
};

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "HTML/CSS",
  "Git & GitHub"
];

export const projects = [
  {
    title: "FRC 2025 Robot - Atlantis",
    description:
      "A modern web app focused on speed, accessibility, and clean UI.",
    stack: ["Java", "WPIlib"],
    liveUrl: "https://www.youtube.com/watch?v=tsVk5y5ZRRk",
    repoUrl: "https://github.com/Oakbotics/2025-FRC-Code"
  },
  {
    title: "YOLO",
    description:
      "Trained a custom YOLOv11s ping pong ball detector with GPU acceleration in Google Colab, then built a Python inference pipeline for real-time detection. Evaluated performance with mAP and precision, reaching ~75% validation accuracy.",
    stack: ["Python", "YOLOv11s", "Google Colab", "Computer Vision"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni"
  },
  {
    title: "News Aggregator",
    description:
      "Built a full-stack React + Node.js/Express app with real-time NewsAPI integration, category and keyword filtering, and secure environment-variable handling. Containerized the app with Docker and deployed it on AWS ECS.",
    stack: ["React", "Node.js", "Express", "NewsAPI", "Docker", "AWS ECS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni"
  }
];
