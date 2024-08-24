import horiseonImg from "../assets/images/horiseon.jpg"
import comingSoon from "../assets/images/comingSoon.jpg"
import NestCast from "../assets/images/NestCast.png"
import TP from "../assets/images/tp-logo.png"
import taskBoard from "../assets/images/task-board.png"
import crithCroth from "../assets/images/crithcroth.png"

const projects = [
  {
    title: 'Crith Croth',
    description: 'mobile friendly Tic-Tac-Toe game made with React',
    image: crithCroth,
    url: 'https://crithcroth.netlify.app'
  },
  {
    title: 'Nest-Cast',
    description: 'Weather and national parks, all-in-one.',
    image: NestCast,
    url: 'https://mpredelus3.github.io/nest-cast/home.html'
  },
  {
    title: 'Mental Health Adventure',
    description: "Trash Panda is resources for mental health that encourages outside activity.",
    image: TP,
    url: 'https://mental-health-adventure.onrender.com/'
  },
  {
    title: 'Task Board',
    description: 'A basic todo list for organization',
    image: taskBoard,
    url: 'https://mpredelus3.github.io/task-board/'
  },
  {
    title: 'Horiseon Project',
    description: 'My very first project',
    image: horiseonImg,
    url: 'https://mpredelus3.github.io/horiseon01/'
  },
  {
    title: '6',
    description: 'Yet another project',
    image: comingSoon,
    url: 'https://your-third-deployed-site-url.com'
  },
  // Add more projects as needed
];

export default projects;
