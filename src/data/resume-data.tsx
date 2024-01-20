import {
  RBCLogo,
  ManulifeLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sadisha Galappatti",
  initials: "SG",
  location: "Toronto, Ontario, Canada",
  locationLink: "https://www.google.com/maps/place/Toronto",
  about:
    "Senior Software Engineer focused on building, educating, and learning",
  summary:
    "As a Software Engineer, I have successfully taken multiple products from start to finish. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with React, Node.js and Terraform. I have over six years of experience working with a modern stack for various financial institutions in Canada.",
  avatarUrl: "https://avatars.githubusercontent.com/u/4732303?v=4",
  personalWebsiteUrl: "https://www.sadishagalappatti.ca",
  contact: {
    email: "sadishag@gmail.com",
    tel: "+12893392717",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sadishag",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sadishag/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/SadishaG",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "McMaster University",
      degree: "B.Eng - Software Engineering and Co-op",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Manulife",
      link: "https://manulife.ca",
      badges: ["Remote"],
      title: "Senior Full Stack Cloud Engineer",
      logo: ManulifeLogo,
      start: "2019",
      end: "Present",
      description:
        "Implemented new features, led and coached cohorts in Manulife University, mentored engineers on various topics related to Engineering and Azure Cloud, adopted use of GitOps with Flux. Technologies: React, Node.js, GraphQL, Flux, Kubernetes, Helm, Azure, Terraform, Jenkins, Debian",
    },
    {
      company: "RBC",
      link: "rbc.com",
      badges: [],
      title: "Software Developer",
      logo: RBCLogo,
      start: "2017",
      end: "2019",
      description:
        "Deployed, ran, and maintained API Gateway platform, build custom pipelines to deploy APIs to Gateway, created shared authorization flows implementing OAuth/OpenID Connect, MTLS, build and maintained shared logging flows on Gateway. Technologies: Ansible, Python, Java, Jenkins, Bash, Apigee, RHEL",
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "GraphQL",
    "Cloud",
    "Terraform",
    "Flux",
    "Azure",
    "GCP",
    "Gitops",
    "Helm"
  ],
  projects: [
    {
      title: "sadishagalappatti.ca",
      techStack: [
        "Side Project",
        "Node.js",
        "Vite",
        "React",
        "Github Pages",
        "Github Actions",
        "CI/CD",
      ],
      description: "My personal website used to host my resume and contact info setup.",
      logo: "",
      link: {
        label: "sadishagalappatti.ca",
        href: "https://www.sadishagalappatti.ca/",
      },
    },
    {
      title: "sadishag.github.io - repo",
      techStack: [
        "Side Project",
        "Node.js",
        "Vite",
        "React",
        "Github Pages",
        "Github Actions",
        "CI/CD",
      ],
      description: "My personal website used to host my resume and contact info setup.",
      logo: "",
      link: {
        label: "sadishag.github.io",
        href: "https://github.com/sadishag/sadishag.github.io",
      },
    },
  ],
} as const;
