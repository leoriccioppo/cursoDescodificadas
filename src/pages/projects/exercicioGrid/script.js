const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');
const btn = document.querySelector('#btn');
//Array com imagens dos personagens
const characters = [
    'Anna',
    'Ariel',
    'Aurora',
    'Bella',
    'Branca',
    'Cinderella',
    'Elsa',
    'Jasmine',
    'Merida',
    'Moana',
    'Mulan',
    'Pocahontas',  
    'Rapunzel',
    'Tiana'
];

//Criando os elementos HTML para receber tipo e classe
const createElement = (tag, className) =>{
const element = document.createElement(tag);
element.className = className;
return element;
}



let firstCard = '';
let secondCard = '';
let timerIntervalId = null;

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 28) {
        clearInterval(timerIntervalId);
        setTimeout(() => { 
        alert(`Você conseguiu e levou ${timer.innerHTML} segundos!`);
        window.location.reload(); // reinicia a página
        }, 600);
    }
};
//checagem cartas
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        firstCard = '';
        secondCard = '';
     } else {
        setTimeout(()=>{
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';
        }, 600);      
    }

    checkEndGame();

};

//virada da carta 
const revealCard = ({ target }) =>{  
  
    if(target.parentNode.className.includes('reveal-card')){
    return;
    }

  if (firstCard === ''){
     target.parentNode.classList.add('reveal-card');
     firstCard = target.parentNode;
    } else if(secondCard === ''){
     target.parentNode.classList.add('reveal-card');
     secondCard = target.parentNode;

     checkCards();
    }

};

//cria o card com as classes atribuidas +foto de cada princesa do array
const createCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./img/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}
const startTimer = () => {

    setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
}
//restart game
btn.addEventListener('click', () => {
    startTimer();
    loadGame();
  })

//Funcionamento do jogo, responsavel duplicar e aleatoriar cards
const loadGame = () => {
   const duplicateCharacters = [...characters, ...characters];
   
   const shuffledArray = duplicateCharacters.sort(()=>Math.random() - 0.5);

   shuffledArray.forEach((character)=>{
      const card = createCard(character);
      grid.appendChild(card);
});
}
