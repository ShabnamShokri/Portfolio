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
      title: "درباره ی من",
    },
    {
      id: "work",
      title: "مهارت های من",
    },
    {
      id: "project",
      title: " نمونه کار من",
    },
    {
      id: "contact",
      title: "تماس با من",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "NextJs",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      icon: html,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      icon: css,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      icon: javascript,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      icon: reactjs,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "ما فکر میکردیم که ساخت یک وبسایت که به زیبایی محصولات ما باشه کار غیر ممکنی هست ولی تک ویژن وب به ما نشان داد که اشتباه فکر می کردیم",
      name: "sarajwelery",
      designation: "CFO",
      company: "Acme jwelery",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
      testimonial:
        "من تونستم خیلی راحت از طریق ویدیو های آموزشی تک ویژن وب سایت خودمو طراحی کنم",
      name: "Ali_Goodarzi",
      designation: "Student",
      company: "Azad University",
      image: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    {
      testimonial:
        "من هیچی از برنامه نویسی بلد نبودم اما از طریق ویدیو های آموزشی تک ویژن وب تونستم فرانت اند رو از صفر یاد بگیرم ، ممنونم تک ویژن وب",
      name: "MaryamWebDeveloper",
      designation: "freelancer front-end developer",
      company: "my own work",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "یک پلتفرم مبتنی بر وب که به کاربران امکان جستجو، رزرو و مدیریت اجاره خودرو از ارائه‌دهندگان مختلف را فراهم می‌کند، یک راه حل راحت و کارآمد برای نیازهای حمل و نقل فراهم می‌کند",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "یک برنامه تحت وب که به کاربران امکان جستجوی فرصت‌های شغلی، مشاهده بازه‌های تخمینی حقوق برای پست‌ها و پیدا کردن موقعیت‌های شغلی موجود بر اساس موقعیت جغرافیایی فعلی‌شان را فراهم می‌کند",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "یک پلتفرم جامع رزرو سفر که به کاربران امکان رزرو پروازها، هتل‌ها و اجاره خودروها را می‌دهد و پیشنهادهای منتخب برای مقاصد محبوب را ارائه می‌کند",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };