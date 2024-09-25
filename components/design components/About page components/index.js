import { alstomLogo, paulstraLogo, siemensLogo } from "@/assets/images";
import { esigelec, prepavogt } from "@/assets/images/about images";

// University Data
export const UNIVERSITY_PREVIEW = {
    name: 'ESIGELEC University',
    degree: 'Software Engineering',
    yearsAttended: '2018 - 2022',
    major: 'Mechatronics',
    gpa: '3.8/4.0',
    keyAchievements: [
      'Created a play with High school children',
      'Face detection and video tracking'
    ],
    relevantCourses: [
      'Software Engineering',
      'Embedded Development',
      'Database Management'
    ],
    thumbnailImage: esigelec
  };
  
  export const UNIVERSITY_FULL_VIEW = {
    name: 'Example University',
    degree: 'Bachelor of Science in Computer Science',
    yearsAttended: '2018 - 2022',
    major: 'Computer Science',
    minor: 'Mathematics',
    gpa: '3.8/4.0',
    keyAchievements: [
      {
        title: 'Dean\'s List Honors',
        description: 'Achieved Dean\'s List Honors for all semesters.'
      },
      {
        title: 'Graduated with Distinction',
        description: 'Graduated with a high GPA and received special recognition.'
      },
      {
        title: 'Capstone Project in Machine Learning',
        description: 'Developed a predictive model for healthcare data as a senior project.'
      }
    ],
    relevantCourses: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Software Engineering',
      'Database Management',
      'Machine Learning',
      'Electronics',
      'Control Enguneering',
      'Web Development'
    ],
    extracurricularActivities: [
      'Member of the Computer Science Club',
      'Volunteer Tutor for Coding Bootcamps',
      'Participant in Hackathons'
    ],
    projectsAndResearch: [
      {
        title: 'Healthcare Predictive Model',
        description: 'Built a machine learning model to predict patient outcomes.'
      },
      {
        title: 'Personal Finance App',
        description: 'Developed a web application for personal budgeting and expense tracking.'
      }
    ],
    internshipsAndWorkExperience: [
      {
        title: 'Software Engineering Intern',
        company: 'Tech Company Inc.',
        duration: 'Summer 2021',
        description: 'Worked on developing new features for the company\'s flagship product.'
      }
    ],
    campusActivities: [
      'Organized a tech talk series',
      'Participated in university hackathons'
    ],
    images: [
      'path/to/university-campus.png',
      'path/to/graduation-photo.png'
    ]
  };
  
  // École Préparatoire Data
  export const ECOLE_PREPARATOIRE_PREVIEW = {
    name: 'PREPAVOGT',
    program: 'Science Program',
    yearsAttended: '2016 - 2018',
    focusAreas: [
      'Mathematics',
      'Physics',
      'Chemistry'
    ],
    keyAchievements: [
      'Top of Class in Mathematics',
      'Student of the Year 2017 & 2018'
    ],
    relevantCourses: [
      'Advanced Mathematics',
      'Physics Mechanics',
      'Chemistry Principles'
    ],
    thumbnailImage: prepavogt
  };
  
  export const ECOLE_PREPARATOIRE_FULL_VIEW = {
    name: 'École Préparatoire Example',
    program: 'Preparatory Science Program',
    yearsAttended: '2016 - 2018',
    focusAreas: [
      'Mathematics',
      'Physics',
      'Chemistry'
    ],
    keyAchievements: [
      {
        title: 'Top of Class in Mathematics',
        description: 'Achieved the highest grade in mathematics among all students.'
      },
      {
        title: 'National Science Exam with Honors',
        description: 'Passed the national exam with distinction and high scores.'
      }
    ],
    relevantCourses: [
      'Advanced Mathematics',
      'Physics Mechanics',
      'Chemistry Principles',
      'Biology',
      'Computer Science Fundamentals'
    ],
    extracurricularActivities: [
      'Member of the Science Club',
      'Participated in Science Olympiads',
      'Volunteer Tutor for Mathematics'
    ],
    preparatoryProjects: [
      {
        title: 'Science Research Project',
        description: 'Conducted a research project on renewable energy sources.'
      }
    ],
    images: [
      'path/to/ecole-campus.png',
      'path/to/science-project-photo.png'
    ]
  };


  export const WORK_EXPERIENCES = [
    {
      companyName: "SITRANS MAG8000",
      position: "Software Engineer",
      duration: "2023 - Present",
      responsibilities: [
        "4G firmware with over-the-air update capabilities (FUOTA)",
        "AWS-based architecture for secure firmware signing and key protection",
        "Legacy 3G MAG 8000 firmware maintenance",
      ],
      achievements: [
        "Designed and implemented FUOTA (Firmware Update Over The Air) feature for 4G devices",
        "Developed AWS-based architecture for signing and key protection",
        "Implemented backup mechanism and automated updater programs",
      ],
      projects: [
        { title: "MAG8000 Digit", description: "The digitalisation team for 4G MAG8000" },
        { title: "MAG8000 Maintenance", description: "The flow maintenance for 3G and 4G MAG8000" }
      ],
      technologiesUsed: ["C++", "Java", "Python", "AWS"],
      logo: siemensLogo
    },
    {
      companyName: "Aptis Electric Bus.",
      position: "Analyst Engineer",
      duration: "2022 - 2023",
      responsibilities: [
        "Designed and implemented user interfaces for e-commerce websites.",
        "Worked closely with UX/UI designers to create responsive designs.",
        "Improved website accessibility and performance."
      ],
      achievements: [
        "Revamped the company’s main product, leading to a 25% increase in customer satisfaction.",
        "Developed a reusable component library that reduced development time by 15%."
      ],
      projects: [
        { title: "E-commerce Redesign", description: "Redesigned the e-commerce platform to enhance user experience." },
        { title: "Accessibility Initiative", description: "Improved website accessibility standards and compliance." }
      ],
      technologiesUsed: ["CANAlyser"],
      logo: alstomLogo
    },
    {
      companyName: "Antivibration System",
      position: "Assistant Engineer",
      duration: "2021",
      responsibilities: [
        "Assisted in the development of internal tools and client-facing applications.",
        "Conducted debugging and troubleshooting for various software issues.",
        "Collaborated with senior developers to implement new features."
      ],
      achievements: [
        "Developed a tool that streamlined internal processes, saving the company 10 hours per week.",
        "Contributed to the successful launch of a major client project on time and within budget."
      ],
      projects: [
        { title: "Internal CRM System", description: "A customer relationship management tool for internal use." },
        { title: "Client Portal", description: "A web portal for client interaction and support." }
      ],
      technologiesUsed: ["Qt", "C++", "Matlab", "Simulink"],
      logo: paulstraLogo
    },
  ];

  export const PERSONAL_PROJECTS = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React, showcasing my professional skills, experience, and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Next.js'],
      service: "Web Development",
      link: 'https://my-portfolio.com',
      github: 'https://github.com/username/portfolio-website',
      highlights: [
        'Designed a modern and responsive user interface with Tailwind CSS.',
        'Implemented smooth scrolling and dynamic content loading with React.',
        'Deployed using Vercel and optimized for SEO and performance.',
      ],
      logo: "",
      year: "2024"
    },
    {
      title: 'Hospital Management App',
      description: 'A full-stack task management application that allows users to create, manage, and organize tasks.',
      technologies: ['Java', 'MySQL', 'JavaFX'],
      service: "Desktop Development",
      link: 'https://taskmanager.com',
      github: 'https://github.com/username/task-manager-app',
      highlights: [
        'Built a RESTful API with Node.js and Express for task management.',
        'Integrated MongoDB as a NoSQL database for storing tasks.',
        'Created a responsive front-end with React and managed state with Redux.',
      ],
      logo: "",
      year: "2023"
    },
    {
      title: 'Adroid-17 / Shoes Store',
      description: 'A fully functional e-commerce store with user authentication, product listings, and payment integration.',
      technologies: ['React', 'Tailwind CSS'],
      service: "FrontEnd Web Development",
      link: 'https://ecommerce-store.com',
      github: 'https://github.com/username/ecommerce-store',
      highlights: [
        'Developed user authentication and authorization using Firebase.',
        'Integrated Stripe API for secure payments.',
        'Implemented responsive design and animations with Sass.',
      ],
      logo: "",
      year: "2024 / 2022"
    },
    {
      title: 'Real Estate Platform',
      description: 'A blog platform where users can write, edit, and publish blog posts with an integrated WYSIWYG editor.',
      technologies: ['MongoDB', 'Express & Node', 'Firebase', 'Redux'],
      service: "FullStack MERN Web App",

      link: 'https://blog-platform.com',
      github: 'https://github.com/username/blog-platform',
      highlights: [
        'Utilized Next.js for server-side rendering and static site generation.',
        'Implemented Markdown-based post creation with a WYSIWYG editor.',
        'Deployed with Firebase Hosting and Firestore for database management.',
      ],
      logo: "",
      year: "2024"
    }
  ];
  

  
  