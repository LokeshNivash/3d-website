import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mechatronics Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "3D Modeler",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },   
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "Manufacturing Intern",
      company_name: "VeluMani Industries",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2022 ",
      points: [
        "Gained practical experience and knowledge in the industry.",
        "Applied theoretical knowledge to real-world scenarios and developed new skills",
        "Learned about control systems, automation, and robotics used in the industry",
        "Valuable experience that has given practical skills and knowledge needed to succeed in the industry",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "CodeJr ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2022",
      points: [
        "Gained valuable experience in various aspects of graphic design including layout design, typography, and image editing.",
        "Diligently documented work and reflected on experiences throughout the internship.",
        "Worked on a variety of projects and applied skills and creativity to real-world design challenges.",
        "Collaborated with other designers and received feedback from experienced professionals in the industry.",
      ],
    },
  ];
  
 const testimonials = [
    {
      testimonial:
        "Lokesh did an excellent job developing my event website. He was responsive, attentive, and patient throughout the entire process, and he exceeded my expectations with his expertise and dedication.",
      name: "ZERO-G Team",
      image: "https://img.icons8.com/3d-fluency/94/null/administrator-male.png",
    },
    {
      testimonial:
        "As a fellow student, I had the pleasure of working with Lokesh to develop a 3D modeling website. His skills and passion for web developmentand 3d modeling were impressive. He was always available to discuss my ideas.",
      name: "Sankar",
      image: "https://img.icons8.com/3d-fluency/94/null/administrator-male.png",
    },
  ];
  
  const projects = [
    {
      name: "EVENT-WEBSITE",
      description:
      "I developed an event cultural website for my college team, Zero-G.I created a website that showcased our mission and upcoming events. Through this project, I gained valuable web development skills and learned the importance of planning in achieving success.",
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
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/LokeshNivash/zerog.git",
    },
    // {
    //   name: "AUDIO-BOOK",
    //   description:
    //     "Installation To read PDF file using Python pip install pypdf2 To Read text (Text to speech) pip install pyaudio pip install pyttsx3 Note: This code can read all the printable text from a PDF file/ Book",
    //   tags: [
    //     {
    //       name: "python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "pypdf2",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "pyttsx3",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/LokeshNivash/AUDIO-BOOK",
    // },
    {
      name: "VOICE ASSISTANT",
      description:
        "This is a model of a voice assistant with minimal features. This Python-based voice assistant is designed to provide users with a convenient, hands-free way to interact with their devices.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pyttsx3",
          color: "green-text-gradient",
        },
        {
          name: "pywhatkit",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/LokeshNivash/voice-assistant",
    },
    {
      name: "DIGITAL MARKETING AGENCY",
      description:
        "A website for local Digital Marketing Agency which provides SEO, website design, and development, Social media Marketing, Content Writing, and Amazon marketing",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://seosmolead.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };