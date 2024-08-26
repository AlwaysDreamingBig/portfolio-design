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
      title: 'Skills',
      href: '/skills',
    },
    {
      id: '5',
      title: 'Contact',
      href: '/contact',
    },
  ];

import { Bungee } from "next/font/google";
  import { itgstoreLogo, paulstraLogo, siemensLogo, alstomLogo, lesBrouilles, flowImg, aptisBus, paulstraImg1, chatbotImg, bugsbunny, HoospitalMan, HPMan, AIOT, Landlord, android17 } from "../images";

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
      link: '/case-studies/project-1',
    },
    {
      id: 6,
      backgroundImage: Landlord,
      logoImage: bugsbunny,
      title: 'LANDLORD WEB APPLICATION',
      tag: 'Web Development',
      description: 'Develop a complete Real-Estate web application with database management.',
      link: '/case-studies/project-2',
    },
    {
      id: 2,
      backgroundImage: aptisBus,
      logoImage: alstomLogo,
      title: 'FLYING DOCTOR',
      tag: 'Ingeneering & SAV',
      description: 'I help with the maintenance and improvement of electric buses by analyzing data.',
      link: '/case-studies/project-2',
    },
    {
      id: 3,
      backgroundImage: chatbotImg,
      logoImage: itgstoreLogo,
      title: 'AI CHATBOT DEVELOPMENT',
      tag: 'AI',
      description: 'I leaded case study of a chatbot development and implementation.',
      link: '/case-studies/project-2',
    },
    {
      id: 4,
      backgroundImage: paulstraImg1,
      logoImage: paulstraLogo,
      title: 'ANTI VIBRATION SYSTEM',
      tag: 'Embedded Development',
      description: 'I worked on the development of embedded functions for the MCU model.',
      link: '/case-studies/project-2',
    },
    {
      id: 5,
      backgroundImage: HPMan,
      logoImage: bugsbunny,
      title: 'HOSPITAL MANAGEMENT APK',
      tag: 'Software Development',
      description: 'Develop a complete hospital management desktop application with database management.',
      link: '/case-studies/project-2',
    },
    {
      id: 7,
      backgroundImage: android17,
      logoImage: bugsbunny,
      title: 'ANDROID-17 WEBSITE',
      tag: 'Web Development',
      description: 'Design and create a responsive and fun website.',
      link: '/case-studies/project-2',
    },
    {
      id: 8,
      backgroundImage: AIOT,
      logoImage: bugsbunny,
      title: 'AI POWERED IOT PLATFORM',
      tag: 'In Progress',
      description: 'Design and develop a AI driven IOT platform.',
      link: '/case-studies/project-2',
    },
  ];
  