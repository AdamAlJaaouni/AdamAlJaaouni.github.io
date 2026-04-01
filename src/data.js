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
      "Build for the 2025 FRC Reefscape game, the robot had a 2 stage elevator and .",
    stack: ["Java", "WPIlib"],
    imageUrl: "https://placehold.co/900x500/0f172a/7dd3fc?text=FRC+Robot+Atlantis",
    imageAlt: "FRC Atlantis robot project preview",
    liveUrl: "https://www.youtube.com/watch?v=tsVk5y5ZRRk",
    repoUrl: "https://github.com/Oakbotics/2025-FRC-Code"
  },
  {
    title: "YOLO",
    description:
      "Trained a custom YOLOv11s ping pong ball detector with GPU acceleration in Google Colab, then built a Python inference pipeline for real-time detection. Evaluated performance with mAP and precision, reaching ~75% validation accuracy.",
    stack: ["Python", "YOLOv11s", "Google Colab", "Computer Vision"],
    imageUrl: "https://placehold.co/900x500/0f172a/7dd3fc?text=YOLO+Object+Detection",
    imageAlt: "YOLO ping pong ball detection project preview",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni"
  },
  {
    title: "News Aggregator",
    description:
      "Built a full-stack React + Node.js/Express app with real-time NewsAPI integration, category and keyword filtering, and secure environment-variable handling. Containerized the app with Docker and deployed it on AWS ECS.",
    stack: ["React", "Node.js", "Express", "NewsAPI", "Docker", "AWS ECS"],
    imageUrl: "https://placehold.co/900x500/0f172a/7dd3fc?text=News+Aggregator",
    imageAlt: "News Aggregator web app project preview",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni/News-Aggregator"
  }
];
