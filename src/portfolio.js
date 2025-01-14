import emoji from 'react-easy-emoji';
import at100devs from './assets/img/icons/common/100devs.jpg'
import socialNetworkingApp from './assets/img/icons/common/sna.jpg'
import fizzBuzz from './assets/img/icons/common/fizzbuzz.jpg'
import github from './assets/img/icons/common/github.svg'
import socialagain from './assets/img/icons/common/social-again.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'
import brws from './assets/img/icons/common/brian-reed-web-solutions.png'
import truckDriver from './assets/img/icons/common/truckdriver.png'
import schoollogo from './assets/img/icons/common/school-logo.png'
let myLink = "http://at100devs.herokuapp.com/"
export const greetings = {
  "name": "brain.reed.software@outlook.com",
  "title": "Brian Reed",
  // "description": "  I'm a Software Engineer focused on Full-Stack Web Development. I am proficient in both Front-End and Back-End development. I have knowledge in Javascript, React, Node.js, MongoDB, CSS, HTML and GitHub. As a software engineer I aspire to help bring projects to life and demonstrate my commitment to developing world-class software solutions for companies and customers. I am also open to learning new languages, libraries and frameworks whichever enhances customers experience. Creating Cool Cross Platform Mobile Apps is my passion.",
  "description": "I am a software engineer with a focus on web development using Javascript, React, Express, Node, and MongoDB. I have experience with styling using CSS and styling components using Material UI. I enjoy learning new languages, libraries, or frameworks. Please reach out to me if you have any questions, or would like to hire me as a web developer. Thanks! ",
  "resumeLink": "contact.me"
}
export const openSource = {
  githubUserName: 'brian-reed-software',
};
export const contact = {

}
export const socialLinks = {
  "facebook": "",
  "instagram": "",
  "twitter": "https://twitter.com/brian_software_",
  "github": "https://github.com/brian-reed-software",
  "linkedin": "https://www.linkedin.com/in/brian-reed-software/",
  "resume": "https://bit.ly/brian-reed-resume-"
}
export const skillsSection = {
  title: 'Software Technologies',
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
  softwareSkills: [{
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
export const SkillBars = [{
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
export const educationInfo = [{
  schoolLogo: schoollogo,
  schoolName: 'Portland Community College',
  subHeader: 'Computer Science',
  duration: 'Expected Graduation: 2023',
  desc: 'Computer science is the study of information systems, their representation, architecture, and implementation, used for a variety of practical and theoretical purposes. Computer science addresses methods by which data is accessed, stored, and retrieved, which include areas such as representational computation, programming languages, algorithmic modeling, and software design, testing and development. Computer scientists apply their knowledge of mathematics, physics, and logic to solve a variety of problems using diverse technology.',
  descBullets: [
  ],
}, ]
export const experience = [
    {
    role: 'Route Manager',
    company: 'Truck Driver',
    companylogo: truckDriver,
    url: "https://www.linkedin.com/company/truckdriver/",
    date: '2015 - 2017',
    desc: 'Managing routes to make sure customer time needs are met. Driving a Semi-Truck to customer locations safely. Moving customers personal items who are relocating for work purposes. Using software to inventory and load items carefully into a trailer for transport. Managing teams to coordinate relocation.',
    descBullets: [
      'Using time management software on a computer.',
      'Navigating a route using GPS software.',
      'Inventories are inventoried using inventory software.',
      'Clear communication with relocation coordinators.',
    ],
  },

    {
    role: 'Web Developer',
    company: 'Brian Reed Web Solutions',
    companylogo: brws,
    url: "https://www.linkedin.com/company/brian-reed-web-solutions/",
    date: '2017 – Present',
    //desc: ' As a software engineer I enjoy creating responsive customer focused applications to demonstrate my commitment to developing software solutions for companies and customers. I am a Web Developer with a focus on React, Javascript, Node, Mongo and Express. I also have experience with styling using CSS and custom styled Components using Material UI. I am also open to learning new languages, libraries and frameworks whichever enhances the customers experience.',
    desc: 'I create customer-focused, user-friendly, responsive websites for small and medium-sized businesses. Iterative improvement researching software technologies for customer-focused websites. ',
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
      'CSS',
      'HTML'
    ],
  },
  
  {
  
    role: 'Software Engineer',
    company: '100 Devs',
    companylogo: at100devs,
    url: "https://www.linkedin.com/company/100devs/",
    date: '2020 – Present',
    desc: 'Whether you need a progressive web application or a full-stack web application, we develop it at 100 Devs through collaboration with over 100 developers. Creating unique custom web apps for customers and clients is what we do.',
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
      'CSS',
      'HTML'
    ],
  },

]
export const projects = [{
    companyname: socialagain,
    companylogo: socialNetworkingApp,
    appName: 'Social Again',
    myLink: "https://social-again.herokuapp.com/",
    desc: 'A social networking application. Technology enthusiasts can be social again. It allows users to create a profile, upload a photo, and share the software tech stack, contact information, and comments.  ',
    descBullets: [
      'JavaScript',
      'Node',
      'EJS',
      'Express',
      'Mongoose',
      'NoSQL / Mongo DB',
      'CSS',
      'HTML'
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