import fish from '../assets/fishbook-landing.png'
import zombie from '../assets/zombodie-2-love-landing.png'
import deal from '../assets/rt-deals-landing.png'
import ttt from '../assets/tic-tac-toe.png'


let projectData = [
  {
    title: 'FishBook',
    deployment: 'https://fishbook-ss.herokuapp.com/',
    image: fish,
    github: 'https://github.com/ssemlitz/fish-collector',
    description: 'A fish collecting app using Django.'
  },
  {
    title: 'Zombodie 2 Love',
    deployment: 'https://zombodie-2-love.netlify.app',
    image: zombie,
    github: 'https://github.com/ssemlitz/zombodie-2-love-front-end',
    description: 'A zombie dating app built with the MERN stack.'
  },
  {
    title: 'RT-Deals',
    deployment: 'https://rt-deals.herokuapp.com/deals',
    image: deal,
    github: 'https://github.com/ssemlitz/rt-deals',
    description: "A deal aggregator application created using the MEN stack."
  },
  {
    title: 'Tic Tac Toe',
    deployment: 'https://ssemlitz-tic-tac-toe.netlify.app/',
    image: ttt,
    github: 'https://github.com/ssemlitz/ttt-weekend',
    description: 'A web browser game of tic-tac-toe with Dogs vs Cats.'
  }
]

export {
  projectData
}