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
      id: 0,
      name: 'Foodies',
      description: '',
      github: 'https://github.com/abirelhalimi/random-quote-machine',
      icon: 'https://img.icons8.com/pastel-glyph/2x/dining-room.png',
      live: 'https://aquoteaday.netlify.app/',
      screens: ['', ''],
      shortDescription: 'A common food networking platform for restaurants and individuals dedicated to fighting food waste.',
      tags: ['Spring boot', 'React', 'Angular', 'PostgreSQL'],
      type: 'School'
    },
    {
      id: 1,
      name: 'Donation App',
      description: '',
      github: 'https://github.com/daychissaf/donation-app',
      icon: 'https://static.thenounproject.com/png/29964-200.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for managing social projects built by free donations via the consultation of advertising videos.',
      tags: ['Spring boot', 'Angular', 'PostgreSQL', 'JWT'],
      type: 'Professional'
    },
    {
      id: 2,
      name: 'Car Tracking',
      description: '',
      github: 'https://github.com/abirelhalimi/car_tracking',
      icon: 'https://www.shareicon.net/data/512x512/2016/01/15/703693_gps_512x512.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for car tracking and managing. where you can add your cars and track their position.',
      tags: ['Java', 'JSP / Servlet', 'HTML', 'CSS'],
      type: 'School'
    },
    {
      id: 3,
      name: 'Tribute Page',
      description: '',
      github: 'https://github.com/abirelhalimi/tribute-page',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHP_xhepKcMpRAiaqLmtBNPLlOGz8SC_QUEGLIsjXG_2LVDrls&usqp=CAU',
      live: 'https://lvbeethoven.netlify.app/',
      screens: ['', ''],
      shortDescription: 'A L.V. Beethoven tribute page done as a part of the responsive web design certificate on FreeCodeCamp.',
      tags: ['HTML', 'CSS'],
      type: 'Personal'
    },
    {
      id: 4,
      name: 'A Quote A Day',
      description: '',
      github: 'https://github.com/abirelhalimi/random-quote-machine',
      icon: 'https://pngriver.com/wp-content/uploads/2018/04/Download-Quote-Png-Image-97166-For-Designing-Projects.png',
      live: 'https://aquoteaday.netlify.app/',
      screens: ['', ''],
      shortDescription: 'A random quote machine done as a part of the Front-end libraries certificate on FreeCodeCamp.',
      tags: ['Angular', 'HTML', 'CSS'],
      type: 'Personal'
    },
    {
      id: 5,
      name: 'Covid-19 News',
      description: '',
      github: 'https://github.com/abirelhalimi/covid19',
      icon: 'https://i.ya-webdesign.com/images/newspaper-icon-png-5.png',
      live: 'https://covid19-news-ar.netlify.app/',
      screens: ['', ''],
      shortDescription: 'Covid-19 news in both Arabic and English to see number of cases and other information by country.',
      tags: ['Angular', 'HTML', 'CSS'],
      type: 'Personal'
    },
    {
      id: 6,
      name: 'Questions Game',
      description: '',
      github: 'https://github.com/abirelhalimi/questions-game',
      icon: 'https://pngimg.com/uploads/question_mark/question_mark_PNG91.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Android Game for learning questions for 4-5 years old autistic children.',
      tags: ['Android Studio', 'Java'],
      type: 'School'
    },
    {
      id: 7,
      name: 'e-ensias',
      description: '',
      github: 'https://github.com/abirelhalimi/e-ensias',
      // tslint:disable-next-line:max-line-length
      icon: 'https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-e-learning-line-icon-online-internet-education-symbol-graduation-png-image_1550385.jpg',
      live: '',
      screens: ['', ''],
      shortDescription: 'Web application for managing courses and resumes and IT related questions/answers dedicated for ENSIAS students.',
      tags: ['Spring boot', 'Thymeleaf', 'PostgreSQL'],
      type: 'School'
    },
    {
      id: 8,
      name: 'Portfolio',
      description: '',
      github: 'https://github.com/abirelhalimi/abirelhalimi.github.io',
      icon: 'https://vectorified.com/images/portfolio-website-icon-20.jpg',
      live: 'https://abirelhalimi.me',
      screens: ['', ''],
      shortDescription: 'My personal portfolio. Build and designed by me to showcase the different projects i\'ve worked on.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Personal'
    },
    {
      id: 9,
      name: 'MDE',
      description: '',
      github: 'https://github.com/abirelhalimi/MDE',
      icon: 'https://cdn.pixabay.com/photo/2014/04/02/14/09/cogwheel-306306_960_720.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Model driven engineering project. For more information on this project please checkout the github repository.',
      tags: ['Java', 'Henshin', 'Xtext', 'PlantUML'],
      type: 'School'
    },
    {
      id: 10,
      name: 'Gaming Center',
      description: '',
      github: 'https://github.com/abirelhalimi/gaming-center',
      icon: 'https://static.thenounproject.com/png/123929-200.png',
      live: '',
      screens: ['', ''],
      shortDescription: 'Management system for a gaming center to keep track of the games played by day and other data.',
      tags: ['Spring boot', 'Angular', 'PostgreSQL'],
      type: 'Professional'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
