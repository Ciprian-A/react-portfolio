import calc from '../assets/calc.png'
import beer from '../assets/beer.jpg'
import hangman from '../assets/hangman.png'
import bbad from '../assets/breaking-bad.jpg'
import converter from '../assets/converter.png'
import morse from '../assets/morse.jpg'

const projectsData = [
  {
    id: 1,
    name: 'Calculator',
    imageSrc: calc, 
    description: 'Calculator made with Vanilla Javascript, HTML and SCSS',
    gitLink: 'https://github.com/Ciprian-A/Calculator-js',
    liveSite: 'https://calculator.ciprian-andrei-wd.co.uk'

  },
  {
    id: 2,
    name: 'Morse Code Translator',
    imageSrc: morse,
    description: 'Morse Code Translator app made with Vanilla Javascript, HTML and SCSS. It allows you to convert english to morse code and morse code to english',
    gitLink: 'https://github.com/Ciprian-A/morse-translator',
    liveSite: 'https://morse.ciprian-andrei-wd.co.uk'

  },
  {
    id: 3,
    name: 'Hangman Game',
    imageSrc: hangman, 
    description: 'Hangman Game made with HTML, SCSS and Vanilla Javascript',
    gitLink: 'https://github.com/Ciprian-A/Hangman',
    liveSite: 'https://hangman.ciprian-andrei-wd.co.uk'
    
  },
  {
    id: 4,
    name: 'Breaking-Bad-Cast',
    imageSrc: bbad, 
    description: 'A React app that allows you to search for the main characters in the famous tv-series.',
    gitLink: 'https://github.com/Ciprian-A/breaking-bad-cast',
    liveSite: 'https://breaking-bad-cast.ciprian-andrei-wd.co.uk'
    
  },
  {
    id: 5,
    name: 'Currency convertor',
    imageSrc: converter, 
    description: 'Currency convertor made with React.Js, SCSS which allows you to check the latest currency rates',
    gitLink: 'https://github.com/Ciprian-A/currency-converter',
    liveSite: 'https://currency.ciprian-andrei-wd.co.uk'
    
  },
  {
    id: 6,
    name: 'Punk API',
    imageSrc: beer, 
    description: 'Coming soon',
    gitLink: '#',
    liveSite: '#'
  
  },
  
]

export default projectsData