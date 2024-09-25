import horiseonImg from "../assets/images/horiseon.jpg"
import comingSoon from "../assets/images/comingSoon.jpg"
import NestCast from "../assets/images/NestCast.png"
import TP from "../assets/images/tp-logo.png"
import taskBoard from "../assets/images/task-board.png"
import crithCroth from "../assets/images/crithcroth.png"
import ember from "../assets/images/logo-original-200.png"
import QRcode from "../assets/images/qr-code-pic.jpg"

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
    description: 'A basic Javascript made todo list for organization',
    image: taskBoard,
    url: 'https://mpredelus3.github.io/task-board/'
  },
  {
    title: 'QR Code Generator',
    description: 'A QR code generator built using React with Vite and MS SQL Server',
    image: QRcode,
    url: 'https://github.com/mpredelus3/qr-codeGen'
  },
  {
    title: 'Ember Mock-Up',
    description: 'A client-requested mock-up of a multi-step customer signup page',
    image: ember,
    url: 'https://mpredelus3.github.io/checkout-page/'
  },
  // Add more projects as needed
];

export default projects;
