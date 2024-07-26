import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Passionate about technological developments, I am always committed to learning new things. I actively follow the latest advancements in the world of software development through online learning and courses.`;


export const ABOUT_TEXT = `I am passionate about technological developments and always committed to learning new things. I actively follow the latest developments in the world of software development through online learning and courses. Apart from being a developer, I also love collaborating with teams. I believe that good interprofessional collaboration is the key to success in development projects. I have experience in working in cross-disciplinary teams to achieve common goals.`;


export const EXPERIENCES = [
  {
    year: "Aug 2023 - Dec 2023",
    role: "Assistant Lecturer for Geographic Information Systems",
    company: "Lampung University",
    description: `Guided 33 third-year students in learning geographic information system alongside 3 other teaching assistants. Subjects covered: developed WebGIS with CodeIgniter 4, database migration, created 3D Map in QGIS, and more.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jan 2023 - Jul 2023",
    role: "Head of Assistant Lecturer for Web Programming",
    company: "Lampung University",
    description: `Led and mentored a team of 7 teaching assistants, facilitating the learning of 100+ second-year students for a web programming course. Subjects covered: basic material on HTML & CSS, PHP, and database management with MySQL.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Jul 2022 - Dec 2022",
    role: "Assistant Lecturer for Multimedia",
    company: "Lampung University",
    description: `Guided 38 second-year students in learning design, editing photo and video alongside 5 other teaching assistants.
    Subjects covered: learning to use the Adobe Photoshop application for editing photos, Corel Draw for design, Adobe Premiere Pro for editing videos, and more.
`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "Dec 2021 - Feb 2022",
    role: "Backend Developer",
    company: "BMKG Klas 1 Bandara Raden Inten II Bandar Lampung",
    description: `Developed SI ALMET(Sistem Informasi Alat Meteorologi) as a back-end developer and collaborated with front-end developer. SI ALMET is an information system used to record and monitor the condition of equipment in the company. and Assisted technicians in checking and maintaining computer systems in the company.`,
    technologies: ["HTML & CSS", "CodeIgniter", "PHP", "Sql"],
  },
];

export const PROJECTS = [
  {
    title: "SI ALMET",
    image: project1,
    description:
      "This project was created to meet the needs of meteorological instrument recording at the Raden Inten II Bandar Lampung Meteorological Station.",
    technologies: ["HTML", "CSS", "PHP", "Code Igniter 4", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "Kota Metro, Lampung",
  phoneNo: "+62821 7612 0493",
  email: "satriasapta48@gmail.com",
  sendEmail: "mailto:satriasapta48@gmail.com"
};
