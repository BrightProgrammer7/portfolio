const INFO = {
import Project from './../components/Project';
  main: {
    title: "Portfolio",
    name: "Abdelilah AKHMIM",
    email: "abdelilahakhmim@gmail.com",
    logo: "logo.jpg",
  },
  profile: {
    title: "Hello!",
    intro:
      "I`m 20 years old, I`m an engineer student at ENSA El Jadida high school. I love programming and IT science in general, this is my first Web Portfolio I hope you like it.",
  },
  skills: [
    {
      title: "Programming",
      description:
        "I started coding since I was 17 years old. In 2019 and because of Covid-19, I started learning fondamental of the web and i tried coding new markup languages such as HTML and even CSS which I found very interesting. <br /> My first programming language was Javascript, It was my choice to follow my road map. I started manipulating with DOM and interactive websites to skill up my programming habits, it was really an awesome experience.<br /> After trying Javascript & Python, I have studied Algorithms and C in ENSAJ, after at holidays, I learned ReactJS, Git & Github and now I am learning NodeJS and MongoDB. I`m also going to learn TypeScript and NextJS inchaallah so to become a Fullstack Developer.",
    },
    {
      title: "Development",
      description:
        "I am a fullstack developer with expertise in ExpressJs and ReactJS. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and acquiring new skills. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.",
    },
  ],

  socials: {
    twitter: "https://twitter.com/Abdelil07833296",
    github: "https://github.com/BrightProgrammer7/",
    linkedin: "https://www.linkedin.com/in/akhmim-abdelilah/",
  },

  homepage: {
    title: "Junior Full-Stack Developer",
    description:
      "I am a fullstack developer with expertise in ExpressJs and ReactJS. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and acquiring new skills. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am always seeking new challenges and opportunities to grow as a developer.",
  },

  about: {
    title:
      "My name is Abdelilah AKHMIM, a young Moroccan web developer with the big dream of making the world more efficient.",
    description:
      "Over the years, I have worked on various open-source projects that you can explore and enhance. Now, I want to bring my ideas to life in the real world and discover how the technology industry works. I am open to collaborations and new ideas to make the world more efficient through my web development skills.",
  },

  project: 

  projects: [
    
    {
      title:
        "Web application for leveraging the OpenAI API and automating ChatGPT",
      description: "",
      logo: "gpt.png",
      linkText: "View Project",
      code: "https://github.com/BrightProgrammer7/surf-gpt.git",
      link: "https://surf-in-gpt.vercel.app/",
    },
    {
      title: "Web application for finding internships and employments",
      description: "",
      logo: "job.png",
      linkText: "View Project",
      code: "https://github.com/BrightProgrammer7/surf-gpt.git",
      link: "https://joblink-akhmim.vercel.app/",
    },
  ],
  articles: {
    title: "JobLink",
    date: new Date(2023, 6, 1),
    // date: new Date("June 1, 2023 12:00:00"),
    description: "Web application for finding internships and employments",
    link: "https://akhmim-gpt.vercel.app/",
  },
};

export default INFO;
