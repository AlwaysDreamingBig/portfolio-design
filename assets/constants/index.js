export const nav = [
    {
      id: '1',
      title: 'Home',
      href: '/',
    },
    {
      id: '2',
      title: 'Work',
      href: '/work',
    },
    {
      id: '3',
      title: 'Projects',
      href: '/projects',
    },
    {
      id: '4',
      title: 'About',
      href: '/about',
    },
    {
      id: '5',
      title: 'Contact',
      href: '/contact',
    },
  ];

import { Bungee } from "next/font/google";
  import { itgstoreLogo, paulstraLogo, siemensLogo, alstomLogo, lesBrouilles, flowImg, aptisBus, paulstraImg1, chatbotImg, bugsbunny, HoospitalMan, HPMan, AIOT, Landlord, android17, siemensLogo2, paulstraLogo2, ShoeStore1 } from "../images";

  export const brands = [
    { src: itgstoreLogo, alt: 'ITGStore' },
    { src: paulstraLogo, alt: 'Paulstra' },
    { src: siemensLogo, alt: 'Siemens' },
    { src: alstomLogo, alt: 'Alstom Aptis' },
    { src: lesBrouilles, alt: 'Alstom Aptis' },
  ];

  export const projects = [
    {
      id: 1,
      backgroundImage: flowImg,
      logoImage: siemensLogo,
      title: 'FUOTA - FIRLWARE UPDATE OVER THE AIR',
      tag: 'Embedded Development',
      description: 'Develop new features for the MAG8000 4G and maintain existing code base for the MAG8000 3G. ',
      link: '/siemens',
      titleClassName: 'text-white',
      company: 'SIEMENS',
      position: 'Software Engineer',
      companyLink: 'https://www.siemens.com/fr/fr/entreprise/siemens-france.html',
      logoSM: siemensLogo2,
    },
    {
      id: 6,
      backgroundImage: Landlord,
      logoImage: bugsbunny,
      title: 'LANDLORD WEB APPLICATION',
      tag: 'Web Development',
      description: 'Develop a complete Real-Estate web application with database management.',
      link: '/landlord',
      titleClassName: 'text-cyan-500',
    },
    {
      id: 2,
      backgroundImage: aptisBus,
      logoImage: alstomLogo,
      title: 'FLYING DOCTOR',
      tag: 'Ingeneering & SAV',
      description: 'I help with the maintenance and improvement of electric buses by analyzing data.',
      link: '/aptis',
      titleClassName: 'text-white',
      company: 'ALSTOM Aptis',
      position: 'Analyst Engineer',
      companyLink: 'https://fr.wikipedia.org/wiki/Alstom_Aptis',
    },
    {
      id: 3,
      backgroundImage: chatbotImg,
      logoImage: itgstoreLogo,
      title: 'AI CHATBOT DEVELOPMENT',
      tag: 'AI',
      description: 'I leaded case study of a chatbot development and implementation.',
      link: '/itgstoreCS',
      titleClassName: '',
      company: 'ITGStore',
      position: 'Assistant Engineer',
      companyLink: 'https://www.itgstore-consulting.com/?lang=en',
    },
    {
      id: 4,
      backgroundImage: paulstraImg1,
      logoImage: paulstraLogo,
      title: 'ANTI VIBRATION SYSTEM',
      tag: 'Embedded Development',
      description: 'I worked on the development of embedded functions for the MCU model.',
      link: '/paulstra',
      titleClassName: 'text-white',
      company: 'HUTCHINSON Paulstra',
      position: 'Software Engineer',
      companyLink: 'https://www.paulstra-industry.com/en',
      logoSM: paulstraLogo2,
    },
    {
      id: 5,
      backgroundImage: HPMan,
      logoImage: bugsbunny,
      title: 'HOSPITAL MANAGEMENT APK',
      tag: 'Software Development',
      description: 'Develop a complete hospital management desktop application with database management.',
      link: '/hospitalManagement',
      titleClassName: 'text-cyan-500',
    },
    {
      id: 7,
      backgroundImage: android17,
      logoImage: bugsbunny,
      title: 'ANDROID-17 WEBSITE',
      tag: 'Web Development',
      description: 'Design and create a responsive and fun website.',
      link: '/android17',
      titleClassName: 'text-white',
    },
    {
      id: 9,
      backgroundImage: ShoeStore1,
      logoImage: bugsbunny,
      title: 'Shoes Store Online platform',
      tag: 'Web Development',
      description: 'Design and develop a website for a shoes store.',
      link: '/bunnyshoes',
      titleClassName: '',
    },
    {
      id: 8,
      backgroundImage: AIOT,
      logoImage: bugsbunny,
      title: 'AI POWERED IOT PLATFORM',
      tag: 'In Progress',
      description: 'Design and develop a AI driven IOT platform.',
      link: '/dmtools',
      titleClassName: '',
    },
  ];
  
  export const services = ['Embedded Development', 'Web Development', 'Other', ];

  export const references = [
    {
      name: 'Till SOHIER',
      role: 'Project Owner',
      company: 'SIEMENS',
      contact: 'till.sohier@siemens.com',
      message: 'An excellent software engineer with a knack for solving complex problems.',
      profilePic: 'https://media.licdn.com/dms/image/C4D03AQGDNuJhjK--HA/profile-displayphoto-shrink_200_200/0/1517594942420?e=2147483647&v=beta&t=CFzvAEBwiAEpNhaOgHw-kc_mUAQGbYS7Cn_y1D-TLhA' // Replace with actual URL
    },
    {
      name: 'Rachid El MALKI',
      role: 'Industrial Solutions Provider',
      company: 'OPEX GROUP',
      contact: 'elmalki.rachid@gmail.com',
      message: 'A creative worker with an eye for detail.',
      profilePic: 'https://media.licdn.com/dms/image/C4D03AQEjUC57ipmWrg/profile-displayphoto-shrink_400_400/0/1612206781795?e=2147483647&v=beta&t=QPCLCkGSODiY9O6JAaItxejzD2RBr8d1E66FPwYE04g' // Replace with actual URL
    },
    {
      name: 'Mackert Thorsten',
      role: 'Chief Product Owner',
      company: 'SIEMENS',
      contact: 'thorsten.mackert@siemens.com',
      message: 'A great team player who keeps everything organized and on track.',
      profilePic: 'https://media.licdn.com/dms/image/v2/C5603AQFWXzIWDPXUEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559828865076?e=1734566400&v=beta&t=rdYNI2TNix_3-EFK1uZZHDuzWW2KqoDw5M-3DdEfuBY' 
    },
    {
      name: 'François DERIVAUX',
      role: 'Business Manager',
      company: 'Technology & Strategy',
      contact: 'f.derivaux@technologyandstrategy.com',
      message: 'Always do his best and with great client feedbacks.',
      profilePic: 'https://media.licdn.com/dms/image/v2/C4D03AQFvtG2LMT8sfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1584090010984?e=1734566400&v=beta&t=8BvXh-gMghqdaogOZb0b9YrD08kmbmcf1LWuBGIY7Cg' 
    },
    {
      name: 'Sass Franck',
      role: 'Process Automator',
      company: 'SIEMENS',
      contact: 'frank.sass@siemens.com',
      message: 'Perform high quality work in complex situations.',
      profilePic: 'https://media.licdn.com/dms/image/v2/D4E03AQEy7Yi1Ji1Lhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680527756928?e=1734566400&v=beta&t=m8agouucpgaNiRMwf2f5efLxkNejTPjo-D_5fLXIBpY'
    },
  ];