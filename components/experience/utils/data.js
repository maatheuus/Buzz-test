import ml from "@/public/images/my-projects/movie-life.png";
import bl from "@/public/images/my-projects/book-life.png";
import ht from "@/public/images/my-projects/hotel-trillo.png";

export const projects = [
  {
    id: 1,
    title: "Movie Life",
    description:
      "During the development of Movie Life, I created a Full-Stack application that allows users to search and favorite movies and series, saving their preferences in a personalized way. This project demonstrated my ability to develop robust and scalable solutions using modern technologies.",
    front: ["React, Redux, React Query, Tailwind CSS"],
    back: ["Node.js, Express, MongoDB, authentication JWT"],
    summary:
      "The project includes features such as movie search, a bookmarking system with JWT authentication, and a fluid interface. One of the main challenges was optimizing the performance of the search and bookmark management, which was solved through the use of caching via React Query. The basis for this project was very similar to Book Life or vice versa.",
    src: ml,
    color: "#23319F",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "Book Life",
    description:
      "During the development of Book Life, I created a full-stack application that allows users to search and favorite books using the Google Books API. This project demonstrated my ability to develop scalable solutions using modern technologies. ",
    front: ["React, React form React Query, Tailwind CSS"],
    back: ["Node.js, Express, MongoDB, authentication JWT"],
    summary:
      "The project includes features such as book search, a bookmarking system with JWT authentication, and an organized interface. One of the main challenges was the integration of react query and JWT authentication, which was solved through online research.",
    src: bl,
    color: "#F28738",
    textColor: "#000000",
  },
  {
    id: 3,
    title: "Hotel Trillo",
    description:
      "Hotel trillo was the first major website I ever made. I created a front-end application that allowed users to search for hotels throughout Brazil. This project demonstrated my ability in the Model-View-Controller (MVC) architecture.",
    front: ["JavaScript, HTML5, CSS3, Sass"],
    summary:
      "The project includes features such as hotel search, pagination and a bookmarking system. One of the main challenges was defining the application architecture, inspired by the MVC (Model-View-Controller) standard, which required a lot of study and research. Without the use of JavaScript libraries or frameworks, organizing the code through classes was essential to ensure a clear and efficient structure.",
    src: ht,
    color: "#D62857",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    title: "About me",
    description:
      "I'm a full-stack developer with experience building dynamic and responsive web applications, focusing on delivering efficient interfaces. I have a passion for learning and exploring new technologies, and I'm always looking to improve application performance and user experience with each project.",
    front: [
      "React, Redux, Context API, NextJs, React Query, Tailwind, Framer Motion",
    ],
    back: ["Node.js, Express, MongoDB"],
    summary:
      "With coffee by my side and code on my screen, I am constantly searching for creative solutions and expanding my technical and personal knowledge. I am passionate about discovering new technologies and methodologies, and I am continually committed to improving my skills, both in software development and soft skills. Always open to challenges, I seek opportunities to grow and innovate, bringing new perspectives and effective solutions to the projects I am involved in.",
    color: "#FFFFFF",
    textColor: "#000000",
  },
];
