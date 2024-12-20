import {Component, OnInit} from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [
   
    {
      id: 9,
      name: 'Enabler',
      description: '',
      github: '',
      icon: '../assets/Ethereum-01.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'A blockchain based energy trading web application allowing neighbors to benefit from their produced energy.',
      tags: ['Solidity', 'Ethereum', 'Angular', 'Spring Boot'],
    },
    {
      id: 8,
      name: 'Foodies',
      description: '',
      github: 'https://github.com/abirelhalimi/foodies',
      icon: 'https://img.icons8.com/pastel-glyph/2x/dining-room.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'A food networking platform for restaurants and individuals dedicated to fighting food waste.',
      tags: ['Spring boot', 'React', 'Angular', 'PostgreSQL'],
    },
    {
      id: 7,
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
      id: 6,
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
      id: 5,
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
      shortDescription: 'Web application for managing courses, resumes and IT related questions/answers dedicated for ENSIAS students.',
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
