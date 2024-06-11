import {
    dev,
    seo,
    sys,
    ui,
    logo,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    angular,
    aws,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    sait,
    paper,
    abs,
    htg,
    runner,
    threejs,
    storybook,
  } from "../assets";
import { SlSocialInstagram }  from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialLinkedin  } from "react-icons/sl";
import { SlSocialGithub   } from "react-icons/sl";
import { SlSocialSteam } from "react-icons/sl";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: dev,
    },
    {
      title: "Data Analyst",
      icon: seo,
    },
    {
      title: "UI/UX Designer",
      icon: ui,
    },
    {
      title: "System Analyst",
      icon: sys,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer Internship",
      company_name: "SAIT",
      icon: sait,
      iconBg: "#E6DEDD",
      date: "April 2017 - April 2018",
      points: [
        "Developing and maintaining web applications using Angular.js as front-end, Java as back-end, and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Technology: Java, HTML, CSS, JavaScript, jQuery, Angular.js, Servlet, Bootstrap, and MySQL.",
      ],
    },
    {
      title: "Supervisor",
      company_name: "Alberta Beauty Supply",
      icon: abs,
      iconBg: "#383E56",
      date: "April 2018 - Sep 2022",
      points: [
        "Trained staff in job duties, safety procedures and company policies to guarantee smooth business operation and issue customer support.",
        "Promoted goods and services through social media platforms of Facebook and Instagram to increase establishment brand awareness. ",
        "Analyzed Ads on social media platforms to maximize audience and post engagements on targeted customers.",
      ],
    },
    {
      title: "Tutor",
      company_name: "Paper Inc",
      icon: paper,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
      points: [
        "Assist students with course-specific knowledge and study strategies in the areas of STEM to ensure improved understanding of course concepts.",
        "Organize reference materials, visual aids and other study materials to administer to students in order to meet session outcomes.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#383E56",
      date: "",
      points: [
        "Designed and developed full-stack, responsive, and dynamic web services: “Health To Go”, “Wasaga Nails”, “Highbrows & Beauty”. ",
        "Dedicated to collaborating with clients to deliver creative, functional websites that enhance their brand and achieve their business objectives.",
        "Analyzed system requirements, and tested software applications for quality assurance.",
        "Technology: Java, HTML, CSS, JavaScript, React.js, Node.js, Express.js, Tailwinds, and MongoDB.",
      ],
    },
    
  ];
  const projects = [
    {
      name: "Story Book",
      description:
        "Web-based platform designed for book enthusiasts to buy, sell, and rent books. " +
        "Users can easily browse through a vast collection of books, interact with sellers, and securely complete transactions.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: storybook,
      source_code_link: "https://github.com/linhlaogia7895/StoryBook",
    },
    {
      name: "Health To Go",
      description:
        "A health nutrient website, providing scientifically-backed insights into the world of health supplements and nutrients, helping you make informed decisions about your health.",
      tags: [
        {
          name: "fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "angular JS",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "java",
          color: "orange-text-gradient",
        },
      ],
      image: htg,
      source_code_link: "https://github.com/linhlaogia7895/Healthtogo",
    },
    {
      name: "Infinite Runner",
      description:
        "An end-to-end of an engaging infinity runner game designed and developed from the ground up using Unity, showcasing creativity in game design and proficiency in game development.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "game design",
          color: "pink-text-gradient",
        },
      ],
      image: runner,
      source_code_link: "https://github.com/linhlaogia7895/Endless-Runner",
    },
  ];
 const socialMedia = [
    {
      id: "0",
      title: "Github",
      iconUrl: SlSocialGithub,
      url: "https://github.com/linhlaogia7895",
    },
    {
      id: "1",
      title: "Facebook",
      iconUrl: SlSocialFacebook,
      url: "https://www.facebook.com/linhtuan.tr",
    },
    {
      id: "2",
      title: "Linkedin",
      iconUrl: SlSocialLinkedin,
      url: "https://linkedin.com/in/linhtruong78",
    },
    {
      id: "3",
      title: "Steam",
      iconUrl: SlSocialSteam,
      url: "https://steamcommunity.com/id/LinhTr",
    },
  ];

  export { services, technologies, experiences, projects, socialMedia };