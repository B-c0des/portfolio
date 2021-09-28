import emoji from 'react-easy-emoji';

import at100devs from './assets/img/icons/common/100devs.jpg'
import socialNetworkingApp from './assets/img/icons/common/sna.jpg'
import fizzBuzz from './assets/img/icons/common/fizzbuzz.jpg'
import github from './assets/img/icons/common/github.svg'
import socialagain from './assets/img/icons/common/social-again.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'
import brws from './assets/img/icons/common/brian-reed-web-solutions.png'
import mayflower from './assets/img/icons/common/mayflower.jpg'
import schoollogo from './assets/img/icons/common/school-logo.png'

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
    title: 'Focus of Software Technologies:',
    portfolioName: '⚡Portfolio Built With⚡', 
    github: 'GitHub Stats',
    skills: [
      emoji('React'),
      emoji('Apollo'),
      emoji('Axios'),
      emoji('Reactstrap'),
      emoji('GraphQL'),
      emoji('React Router'),
      emoji('React Lottie'),
      emoji('React External Link'),
      emoji('Node Sass'),
      emoji('React Router Dom'),
      emoji('React Parallax'),
      emoji('React Classnames'),
      
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
        skillName: 'REACT',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'NODE',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'SASS',
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
        skillName: 'NPM',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      // {
      //   skillName: 'sql-database',
      //   fontAwesomeClassname: 'vscode-icons:file-type-sql',
      // },
      {
        skillName: 'MongoDB',
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
        skillName: 'Github',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
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
      schoolLogo: schoollogo,
      schoolName: 'Portland Community College',
      subHeader: 'Computer Science',
      duration: '2022',
      desc: 'Computer science is the study of information systems, their representation, architecture, and implementation, used for a variety of practical and theoretical purposes. Computer science addresses methods by which data is accessed, stored, and retrieved, which include areas such as representational computation, programming languages, algorithmic modeling, and software design, testing and development. Computer scientists apply their knowledge of mathematics, physics, and logic to solve a variety of problems using diverse technology.',
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
    url: "https://www.linkedin.com/company/100devs/",
    date: '2020 – Present',
    desc:
      ' Whether you need a pogressive web application, or a full-stack web application, we develop it at 100 Devs through collaboration with over 100 developers. Creating unique custom web apps for customers and clients is what we do. ',
    descBullets: [
      'JavaScript',
      'React',
      'Node',
      'Styled Componants',
      'Material UI',
      'Mongoose',
      'Express',
      'NoSQL / Mongo Database',
      'EJS',
      'CSS3',
      'HTML5'
    ],
  },
    {
    role: 'Web Developer',
    company: 'Brian Reed Web Solutions',
    companylogo: brws,
    url: "https://www.linkedin.com/company/brian-reed-web-solutions/",
    date: '2017 – Present',
    desc:
      ' I work with local clients and businesses creating customer focused, user friendly, responsive websites for many different types of businesses. Iterative improvement researching various NPM libraries and frameworks for customer focused websites.',
    descBullets: [
      'JavaScript',
      'React',
      'Node',
      'Styled Componants',
      'Material UI',
      'Mongoose',
      'Express',
      'NoSQL / Mongo Database',
      'EJS',
      'CSS3',
      'HTML5'
    ],
  },

  {
    role: 'Route Manager',
    company: 'Mayflower',
    companylogo: mayflower,
    url: "https://www.linkedin.com/company/mayflower/",
    date: '2015 - 2017',
    desc:
      ' Managing routes to make sure customer time needs are met. Driving a Semi-Truck to customer locations safely. Moving customers personal items who are relocating for work purposes. Using software to inventory and load items carefully into a trailer for transport. Managing teams to coordinate relocation.',
    descBullets: [
      'Using electronic time management software.',
      'Using GPS software to navigate route.',
      'Using Inventory software to inventory product.',
      'Effective communication with moving coordinators.',
    ],
  },

]

export const projects = [
  {
    companyname: socialagain,
    companylogo: socialNetworkingApp,
    myLink: "https://social-again.herokuapp.com/",
    desc:
    ' A social networking application for software technology enthusiasts to be social again. It allows users to create a profile, upload a photo, share software tech stack, share contact information and share comments. ',
  descBullets: [
    'JavaScript',
    'Node',
    'EJS',
    'Express',
    'Mongoose',
    'NoSQL / Mongo DB',
    'CSS3',
    'HTML5'
  ],
}
  // },
  // {
  //   name: "Fun App",
  //   companylogo: fizzBuzz,
  //   myLink: "https://fizzbuzz-checker.herokuapp.com/",
  //   desc:
  //   ' An application that checks if a number is divisible by 2, 3 or both and returns, "Fizz", "Buzz", or "Fizz Buzz"',
  // descBullets: [
  //   'JavaScript',
  //   'CSS',
  //   'HTML',
  // ],
  // },
  // {
  //   name: "lorem ipsum",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  // },
]