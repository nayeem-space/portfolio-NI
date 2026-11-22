import data from "./portfolio.json";

export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repositoryUrl: string;
  image: PortfolioImage;
};

export const projects: readonly Project[] = data.works;
export const expertise: readonly {
  id: string;
  title: string;
  description: string;
}[] = data.abouts;
export const { experiences } = data;

export const education = [
  {
    institution: "University of Surrey",
    location: "Guildford, United Kingdom",
    years: "Sep 2021 – Jun 2025",
    subject: "BSc Computer Science",
    result: "First Class Honours",
  },
  {
    institution: "Cumilla Victoria Govt. College",
    location: "Cumilla, Bangladesh",
    years: "Jul 2018 – Jun 2020",
    subject: "Higher Secondary Certificate",
    result: "GPA-5.00",
  },
];

export const profile = {
  name: "Islam Nayeemul",
  role: "AI/Cloud Platform Engineer",
  email: "nayeem.abc9@gmail.com",
  phone: "+44 (0) 7405153988",
  phoneLink: "+447405153988",
  linkedin: "https://www.linkedin.com/in/islam-nayeemul-95a271255/",
  github: "https://github.com/nayeem-space",
};

export const skillGroups = [
  {
    title: "Agentic AI & RAG",
    skills: [
      "Python",
      "LangChain / LangGraph",
      "OpenSearch",
      "Neo4j",
      "PyTorch",
      "YOLO",
    ],
  },
  {
    title: "Cloud & infrastructure",
    skills: [
      "AWS",
      "Amazon Bedrock",
      "Terraform",
      "Docker",
      "GitLab CI/CD",
      "Pants Build",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "C# / .NET",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "C++",
      "React",
      "Next.js",
      "Django",
      "FastAPI",
      "SQL",
    ],
  },
];
