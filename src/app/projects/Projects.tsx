export type Project = {
  id: number;
  name: string;
  genres: string[];
  images: string[];
  description: string;
};

export const allProjects: Project[] = [
  {
    id: 1,
    name: "Java Condition Monitoring",
    genres: ["Web App", "Next.js", "Typescript"],
    images: ["/projects/javacore-nextjs.png"],
    description:
      "A machine health monitoring dashboard built with Next.js and TypeScript. Automates report generation for mechanical engineers.",
  },
  {
    id: 2,
    name: "Greenline",
    genres: ["Web App", "Next.js", "Typescript"],
    images: [
      "/projects/greenline/greenline-nextjs.png",
      "/projects/greenline/greenline1.png",
      "/projects/greenline/greenline2.png",
      "/projects/greenline/greenline3.png",
      "/projects/greenline/greenline4.png",
      "/projects/greenline/greenline5.png",
      "/projects/greenline/greenline6.png",
    ],
    description:
      "Greenline is an open forum for developers to discuss code, highlight problem areas, and learn collaboratively.",
  },
  {
    id: 3,
    name: "Payroll Calculator",
    genres: ["Desktop App", "Java"],
    images: [
      "/projects/payroll/payroll-java.png",
      "/projects/payroll/payroll1.png",
      "/projects/payroll/payroll2.png",
    ],
    description:
      "A desktop payroll calculator built with Java for calculating salaries, deductions, and net pay efficiently.",
  },
  {
    id: 4,
    name: "Elashian Haven",
    genres: ["Web App", "HTML & CSS"],
    images: [
      "/projects/elashian/elashian.png",
      "/projects/elashian/elashian6.png",
      "/projects/elashian/elashian5.png",
      "/projects/elashian/elashian4.png",
      "/projects/elashian/elashian3.png",
      "/projects/elashian/elashian2.png",
      "/projects/elashian/elashian1.png",
    ],
    description:
      "A responsive, modern website for a mountain resort & hotel — showcasing an immersive user experience built with HTML, CSS, and JavaScrip",
  },
  {
    id: 5,
    name: "Calculator",
    genres: ["Web App", "PHP", "HTML & CSS"],
    images: [
      "/projects/calculator/calculator.png",
      "/projects/calculator/calculator4.png",
      "/projects/calculator/calculator3.png",
      "/projects/calculator/calculator2.png",
      "/projects/calculator/calculator1.png",
    ],
    description: `A beautifully crafted calculator web app built with PHP, HTML/CSS, and a touch of modern design — featuring:
✅ Level 1: Basic arithmetic form calculator
✅ Level 2: Button-based calculator with neumorphism & glassmorphism
🔜 Level 3: Scientific calculator (Coming soon...)`,
  },
  {
    id: 6,
    name: "Anime Wars",
    genres: ["Web App", "PHP", "HTML & CSS"],
    images: [
      "/projects/animewars/animewars.png",
      "/projects/animewars/animewars4.png",
      "/projects/animewars/animewars3.png",
      "/projects/animewars/animewars2.png",
      "/projects/animewars/animewars1.png",
    ],
    description:
      "Social App for the Anime fans community where they can connect, debate storylines, and even trash-talk each other in a fun way — like arguing whether Sasuke is weak or not. The app brings together anime fans to chat, and build a community around their favorite shows.",
  },
];
