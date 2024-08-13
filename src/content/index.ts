const content = {
  navbar: {
    navLinks: [
      {
        id: "about",
        title: "ABOUT",
      },
      {
        id: "work",
        title: "WORK",
      },
      {
        id: "projects",
        title: "PROJECTS",
      },
      {
        id: "contact",
        title: "CONTACT",
      },
    ],
  },
  hero: {
    name: "MATTIA FIORIO",
    title: ["DEVELOPER", "SINCE 2013"],
  },
  about: {
    overTitle: "WHAT I DO",
    title: "ABOUT.",
    paragraph:
      "As a savvy developer with a soft spot for web tech and gaming, I'm like a sponge when it comes to new tech stacks. I love nothing more than whipping up efficient, scalable solutions that not only work like a charm but also keep audiences hooked.",
    services: [
      {
        title: "Web Developer",
        icon: "web.avif",
      },
      {
        title: "Backend Developer",
        icon: "backend.avif",
      },
      {
        title: "Game Developer",
        icon: "game.avif",
      },
    ],
  },
  experience: {
    overTitle: "WHERE I WORKED",
    title: "EXPERIENCE.",
    experiences: [
      {
        title: "Full-stack Developer",
        company_name: "AKQA",
        icon: "akqa.avif",
        iconBg: "#ffffff",
        date: "January 2023 - Current",
        points: [
          "Creating and sprucing up web applications using cool tools like Next.js and more.",
          "Teaming up with a diverse group of creatives - designers, product managers, and fellow developers to build top-notch products.",
          "Showcasing leadership as a Technical Delivery Manager, ensuring seamless teamwork and delivering quality results on time.",
        ],
      },
      {
        title: "Web Developer",
        company_name: "CLIO",
        icon: "clio.avif",
        iconBg: "#ffffff",
        date: "March 2020 - December 2022",
        points: [
          "Revamped Clio's SaaS e-learning platform using React components and SOLID principles, making learning a breeze.",
          "Implemented E2E tests with Selenium and Playwright to ensure everything runs smoothly.",
          "Boosted the team's productivity by promoting agile methodologies - because who doesn't love being agile?",
          "Played a key role in agile rituals, handling estimations and sprint planning like a pro.",
        ],
      },
      {
        title: "Game Developer (but not only)",
        company_name: "MOVIESTAR PLANET",
        icon: "msp.avif",
        iconBg: "#ffffff",
        date: "April 2013 - February 2020",
        points: [
          "Developed in-game features for a massively multiplayer game with over 100 million users across platforms, paying attention to UI improvements and backend functionalities.",
          "Boosted productivity by cutting down on marketing and support tasks, thanks to handy data management tools built with ASP.NET",
          "Assisted game teams by developing a Unity3D framework with handy plug-and-play elements, simplifying the game creation process.",
        ],
      },
    ],
  },
  tech: {
    technologies: [
      {
        name: "HTML 5",
        icon: "html.avif",
      },
      {
        name: "CSS 3",
        icon: "css.avif",
      },
      {
        name: "JavaScript",
        icon: "javascript.avif",
      },
      {
        name: "TypeScript",
        icon: "typescript.avif",
      },
      {
        name: "React JS",
        icon: "reactjs.avif",
      },

      {
        name: "nextjs",
        icon: "nextjs.avif",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind.avif",
      },
      {
        name: "playwright",
        icon: "playwright.avif",
      },
      {
        name: "jest",
        icon: "jest.avif",
      },
      {
        name: "Node JS",
        icon: "nodejs.avif",
      },
      {
        name: "git",
        icon: "git.avif",
      },
      {
        name: "figma",
        icon: "figma.avif",
      },
      {
        name: "unity",
        icon: "unity.avif",
      },

      {
        name: "dotnet",
        icon: "dotnet.avif",
      },
    ],
  },
  works: {
    overTitle: "MY WORK",
    title: "PROJECTS.",
    paragraph:
      "Here's a sneak peek at some projects that put my skills to the test. You'll find a quick rundown of each, along with links to check them out in action. Enjoy the tour!",
    projects: [
      {
        name: "Change Lingerie",
        description:
          "Feast your eyes on this sizzling e-commerce website for lingerie. I worked my magic on both the frontend and backend, with a special focus on making payments as smooth as silk.",
        tags: [
          {
            name: "nextjs",
            color: "text-sky-500",
          },
          {
            name: "chakra-ui",
            color: "text-stone-400",
          },
          {
            name: "nestjs",
            color: "text-red-500",
          },
        ],
        image: "change-desktop.webp",
        video: "change-video.mp4",
        link: "https://www.change.com/dk",
      },
      {
        name: "Dilling",
        description:
          "Check out this cozy e-commerce site that is warming hearts in multiple countries. I've had my hands in both the frontend and backend cookie jars, this time with a sprinkle of .NET",
        tags: [
          {
            name: "nextjs",
            color: "text-sky-500",
          },
          {
            name: ".net",
            color: "text-emerald-400",
          },
        ],
        image: "dilling-desktop.webp",
        video: "dilling-video.mp4",
        link: "https://dk.dilling.com/",
      },
      {
        name: "Mercell",
        description:
          "Take a gander at this sleek fully headless info website. The deadline was tighter than a drum, but hey, who doesn't love a good challenge?",
        tags: [
          {
            name: "nextjs",
            color: "text-sky-500",
          },
          {
            name: "tailwind",
            color: "text-blue-600",
          },
          {
            name: "umbraco",
            color: "text-purple-600",
          },
        ],
        image: "mercell-desktop.webp",
        video: "mercell-video.mp4",
        link: "https://info.mercell.com/en",
      },
    ],
  },
  contact: {
    overTitle: "HOW TO FIND ME",
    title: "CONTACTS.",
    paragraph:
      "Got a project in mind, or just want to say hi? Don't be shy! Drop me a line, and let's start a conversation. Whether it's about work, tech, or the latest gaming trends, I'm all ears!",
    email: "slm",
    linkedin: "https://www.linkedin.com/in/mattia-fiorio/",
    git: "https://github.com/mttfiorio",
    pdf: null,
  },
};

export default content;
