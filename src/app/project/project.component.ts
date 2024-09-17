import {Component, OnInit} from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [
    // {
    //   id: 10,
    //   name: 'Mood Diary',
    //   description: '',
    //   github: 'https://github.com/abirelhalimi/moody-diary',
    //   icon: 'https://static.thenounproject.com/png/3000416-200.png',
    //   live: 'https://moody-diary.netlify.app',
    //   screens: ['', ''],
    //   shortDescription: 'A simple dApp to set and get mood done as part of the freshman course on LearnWeb3.',
    //   tags: ['Solidity', 'HTML', 'CSS', 'EthersJS'],
    // },
    // {
    //   id: 11,
    //   name: 'Coin Control',
    //   description: '',
    //   github: 'https://github.com/abirelhalimi/coin-control',
    //   icon: 'https://static.thenounproject.com/png/2285848-200.png',
    //   live: '',
    //   screens: ['', ''],
    //   shortDescription: 'A personal finance tracker app for logging transactions, managing budgets, and analyzing spending habits.',
    //   tags: ['Spring boot', 'PostgreSQL'],
    // },
    // {
    //   id: 10,
    //   name: 'Game Hub',
    //   description: '',
    //   github: 'https://github.com/abirelhalimi/game-hub',
    //   icon: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
    //   live: 'https://game-hub-abirelhalimi.vercel.app/',
    //   screens: ['', ''],
    //   shortDescription: 'Rawg clone, a video game discovery platform that offers a comprehensive database of ' +
    //     'games across multiple platforms.',
    //   tags: ['TypeScript', 'React', 'Vite', 'Chakra UI'],
    // },
    {
      id: 9,
      name: 'Foodies',
      description: '',
      github: 'https://github.com/abirelhalimi/foodies',
      icon: 'https://img.icons8.com/pastel-glyph/2x/dining-room.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'A common food networking platform for restaurants and individuals dedicated to fighting food waste.',
      tags: ['Spring boot', 'React', 'Angular', 'PostgreSQL'],
    },
    {
      id: 8,
      name: 'Donation App',
      description: '',
      github: 'https://github.com/daychissaf/donation-app',
      icon: 'https://static.thenounproject.com/png/29964-200.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for managing social projects built by free donations via the consultation of advertising videos.',
      tags: ['Spring boot', 'Angular', 'PostgreSQL', 'JWT'],
    },
    {
      id: 7,
      name: 'Car Tracking',
      description: '',
      github: 'https://github.com/abirelhalimi/car_tracking',
      icon: 'https://www.shareicon.net/data/512x512/2016/01/15/703693_gps_512x512.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for car tracking and managing. where you can add your cars and track their position.',
      tags: ['Java', 'JSP / Servlet', 'HTML', 'CSS'],
    },
    {
      id: 6,
      name: 'Tribute Page',
      description: '',
      github: 'https://github.com/abirelhalimi/tribute-page',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHP_xhepKcMpRAiaqLmtBNPLlOGz8SC_QUEGLIsjXG_2LVDrls&usqp=CAU',
      live: 'https://lvbeethoven.netlify.app/',
      screens: ['', ''],
      shortDescription: 'A L.V. Beethoven tribute page done as a part of the responsive web design certificate on FreeCodeCamp.',
      tags: ['HTML', 'CSS'],
    },
    {
      id: 5,
      name: 'A Quote A Day',
      description: '',
      github: 'https://github.com/abirelhalimi/random-quote-machine',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/800px-Cquote1_black.svg.png',
      live: 'https://aquoteaday.netlify.app/',
      screens: ['', ''],
      shortDescription: 'A random quote machine done as a part of the Front-end libraries certificate on FreeCodeCamp.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      id: 4,
      name: 'Covid-19 News',
      description: '',
      github: 'https://github.com/abirelhalimi/covid19',
      icon: 'https://cdn-icons-png.flaticon.com/512/4097/4097354.png',
      live: 'https://covid19-news-ar.netlify.app/',
      screens: ['', ''],
      shortDescription: 'Covid-19 news in both Arabic and English to see number of cases and other information by country.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      id: 3,
      name: 'Questions Game',
      description: '',
      github: 'https://github.com/abirelhalimi/questions-game',
      icon: 'https://pngimg.com/uploads/question_mark/question_mark_PNG91.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Android Game for learning questions for 4-5 years old autistic children.',
      tags: ['Android Studio', 'Java'],
    },
    {
      id: 2,
      name: 'e-ensias',
      description: '',
      github: 'https://github.com/abirelhalimi/e-ensias',
      // tslint:disable-next-line:max-line-length
      icon: 'https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-e-learning-line-icon-online-internet-education-symbol-graduation-png-image_1550385.jpg',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for managing courses and resumes and IT related questions/answers dedicated for ENSIAS students.',
      tags: ['Spring boot', 'Thymeleaf', 'PostgreSQL'],
    },
    {
      id: 1,
      name: 'Portfolio',
      description: '',
      github: 'https://github.com/abirelhalimi/portfolio-m',
      icon: 'https://vectorified.com/images/portfolio-website-icon-20.jpg',
      live: 'https://abirelhalimi.com',
      screens: ['', ''],
      shortDescription: 'My personal portfolio. Built and designed by me to showcase the different projects i\'ve worked on.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 0,
      name: 'MDE',
      description: '',
      github: 'https://github.com/abirelhalimi/MDE',
      icon: 'https://cdn.pixabay.com/photo/2014/04/02/14/09/cogwheel-306306_960_720.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Model driven engineering project. For more information on this project please checkout the github repository.',
      tags: ['Java', 'Henshin', 'Xtext', 'PlantUML'],
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
