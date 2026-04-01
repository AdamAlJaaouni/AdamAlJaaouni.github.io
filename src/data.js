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
  "Java",
  "Python",
  "C",
  "C++",
  "SQL",
  "Racket",
  "React",
  "Node.js",
  "AWS ECS",
  "AWS IAM",
  "AWS Secrets Manager",
  "Git",
  "GitHub",
  "Docker",
  "PostgreSQL",
  "Cursor"
];

export const projects = [
  {
    title: "FRC 2025 Robot - Atlantis",
    description:
      "Build for the 2025 FRC Reefscape game, the robot had a 2 stage elevator and wrist for manipulating game pieces. It also has a servo activated back funnel for intaking pieces while being able to open so the robot is able to climb.",
    stack: ["Java", "WPIlib"],
    imageUrl: "images/projects/frc-atlantis.jpg",
    imageAlt: "FRC Atlantis in game",
    liveUrl: "https://www.youtube.com/watch?v=tsVk5y5ZRRk",
    repoUrl: "https://github.com/Oakbotics/2025-FRC-Code"
  },
  {
    title: "YOLO",
    description:
      "Trained a custom YOLOv11s ping pong ball detector with GPU acceleration in Google Colab, then built a Python inference pipeline for real-time detection. Evaluated performance with mAP and precision, reaching ~75% validation accuracy.",
    stack: ["Python", "YOLOv11s", "Google Colab", "Computer Vision"],
    imageUrl: "images/projects/yolo.jpg",
    imageAlt: "YOLO ping pong ball detection project preview",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni"
  },
  {
    title: "News Aggregator",
    description:
      "Built a full-stack React + Node.js/Express app with real-time NewsAPI integration, category and keyword filtering, and secure environment-variable handling. Containerized the app with Docker and deployed it on AWS ECS.",
    stack: ["React", "Node.js", "Express", "NewsAPI", "Docker", "AWS ECS"],
    imageUrl: "images/projects/news-aggregator.jpg",
    imageAlt: "News Aggregator web app project preview",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/AdamAlJaaouni/News-Aggregator"
  }
];
