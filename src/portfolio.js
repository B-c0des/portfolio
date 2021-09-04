import emoji from 'react-easy-emoji';

import at100devs from './assets/img/icons/common/100devs.jpg'
import socialNetworkingApp from './assets/img/icons/common/sna.jpg'
import fizzBuzz from './assets/img/icons/common/fizzbuzz.jpg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'
 let myLink = "http://at100devs.herokuapp.com/"
 

export const greetings = {
    "name": "Brian Reed",
    "title": "Brian Reed",
    "description": "  I'm a Software Engineer focused on Full-Stack Web Development. I am proficient in both Front-End and Back-End development. I have knowledge in Javascript, React, Node.js, MongoDB, CSS, HTML and GitHub. As a software engineer I aspire to help bring projects to life and demonstrate my commitment to developing world-class software solutions for companies and customers. I am also open to learning new languages, libraries and frameworks whichever enhances the customers experience. Creating Cool Cross Platform Mobile Apps is my passion.",
    "resumeLink": "contact.me"
}

export const openSource = {
  githubUserName: 'brian-reed-software',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/1Brian Reed100",
    "instagram": "https://www.instagram.com/1Brian Reed100",
    "twitter": "https://twitter.com/brian_software_",
    "github": "https://github.com/brian-reed-software",
    "linkedin": "https://www.linkedin.com/in/brian-reed-software/"
}

export const skillsSection = {
    title: '',
    title: 'Software Tech:',
    skills: [
      emoji(
        '⚡ Developing interactive User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA )'),
      // emoji(
      //   '⚡ Integration of Firebase/ AWS / Digital Ocean'
      // ),
    ],
    
    softwareSkills: [
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      // {
      //   skillName: 'TypeScript',
      //   fontAwesomeClassname: 'logos:typescript-icon',
      // },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      // {
      //   skillName: 'flutter',
      //   fontAwesomeClassname: 'logos:flutter',
      // },
      // {
      //   skillName: 'swift',
      //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      // {
      //   skillName: 'sql-database',
      //   fontAwesomeClassname: 'vscode-icons:file-type-sql',
      // },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      // {
      //   skillName: 'aws',
      //   fontAwesomeClassname: 'logos:aws',
      // },
      // {
      //   skillName: 'firebase',
      //   fontAwesomeClassname: 'logos:firebase',
      // },
      // {
      //   skillName: 'python',
      //   fontAwesomeClassname: 'logos:python',
      // },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Portland Community College',
      subHeader: 'Associate of Science in Computer Science',
      duration: '',
      desc: 'Expected Graduation 2022',
      descBullets: [
        // '',
        // '',
      ],
    },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: '100 Devs',
    companylogo: at100devs,
    date: '2020 – Present',
    desc:
      ' Whether you need a single web app, or a full-stack web app, we develop it at 100 Devs through collaboration with over 100 developers. Creating custom web apps is what we do. ',
    descBullets: [
      'JavaScript',
      'React',
      'Node',
      'Express',
      'EJS',
      'CSS3',
      'HTML5'
    ],
  },
]

export const projects = [
  {
    name: "Social Networking App",
    companylogo: socialNetworkingApp,
    myLink: "https://social-again.herokuapp.com/",
    desc:
    ' Advanced Social Media Website 🌍 for your clients or customers ',
  descBullets: [
    'JavaScript',
    'Node',
    'EJS',
    'Express',
    'Mongo DB',
    'CSS3',
    'HTML5'
  ],
  },
  {
    name: "Fizz Buzz Checker",
    companylogo: fizzBuzz,
    myLink: "https://fizzbuzz-checker.herokuapp.com/",
    desc:
    ' An application that checks if a number is divisible by 2, 3 or both and returns, "Fizz", "Buzz", or "Fizz Buzz"',
  descBullets: [
    'JavaScript',
    'CSS',
    'HTML',
  ],
  },
  // {
  //   name: "lorem ipsum",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  // },
]