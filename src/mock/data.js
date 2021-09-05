import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vimal | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vimal',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    "Hello, I'm Vimal, currently pursuing my Bachelor's with a major in Computer Science at K.Ramakrishnan College of Technology, Trichy. I'm a passionate coder and have a huge enthusiasm in open source. I have always been passionate about technology and creating an impact in the community. I have a strong technical understanding of computer programming languages and frameworks.",
  paragraphTwo:
    "I'm a person who loves to take challenges and as a result, I'm one of the docker challenge winners conducted by jFrog and workspace submission winners conducted by Postman and also I'm an active hacker in the MLH-INIT program. I will always make sure that I return the best to the community. I’m not only passionate about results, but also about being able to deliver them.",
  paragraphThree: 'Other than these I like to listen to music and tech videos',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Payment Gateway',
    info: "A payment gateway is an online payments' service that, when integrated with the e-commerce platform, is devised as the channel to make and receive payments. The procedure to receive payments includes the customer requiring to fill in some details, like credit/debit card number, expiry date, and CVV. Here's its used for donation to prevent children from child labour.",
    info2: '',
    url: 'https://vimalprogrammer.github.io/payment_gateway/',
    repo: 'https://github.com/vimalprogrammer/payment_gateway', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Login - Logout Registration',
    info: 'Login is a default feature that allows workspace access for users that have been invited to the workspace by and admin. Registration is an optional feature that can be enabled to allow anyone (or specified domains) to join/register to the workspace by themselves & Logout is exiting out of the website.',
    info2: '',
    url: 'https://tenet-vimal.herokuapp.com/',
    repo: 'https://github.com/vimalprogrammer/login-vimal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Todo App',
    info: 'This is a To-Do app constructed by python django framework. A To-Do list is a list that you can keep to put all of the tasks that you need to complete on a given day. It can be very useful for managing time, by planning your day ahead of time, and prioritizing activities.',
    info2: '',
    url: 'https://todo-vimal.herokuapp.com/',
    repo: 'https://github.com/vimalprogrammer/todo-vimal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Rock Paper Scissor game',
    info: 'Rock, paper, and scissors game is a simple fun game in which both the players have to make a rock, paper, or scissors. It has only two possible outcomes a draw, or a win for one player and a loss for the other player.  A random option will be generated from the computer’s side and the one who wins will get one point every time. The game will be completely responsive so that it can be played on every device.',
    info2: '',
    url: 'https://vimalprogrammer.github.io/RPS_game/',
    repo: 'https://github.com/vimalprogrammer/RPS_game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'msvimal10@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Vimal46701132',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_vimal_ms/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vimalprogrammer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vimalprogrammer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
