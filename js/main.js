const title = document.querySelector('.title');
const text = document.querySelector('.text');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let flashcards = {
  title: [
    'mga numero ng',
    'isa',
    'dalawa',
    'tatlo',
    'apat',
    'lima',
    'anim',
    'pito',
    'walo',
    'siyam',
    'sampu',
  ],
  text: [
    'numbers',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ],
};

let currentFlashcard;

if (!localStorage.cardIndex) {
  currentFlashcard = 0;
  localStorage.setItem('cardIndex', currentFlashcard);
} else {
  currentFlashcard = localStorage.getItem('cardIndex');
}

title.innerText = flashcards.title[currentFlashcard];
text.innerText = flashcards.text[currentFlashcard];

rightButton.addEventListener('click', () => {
  if (currentFlashcard < flashcards.title.length - 1) {
    nextCard();
  } else {
    currentFlashcard = 0;
    localStorage.setItem('cardIndex', currentFlashcard);
    title.innerText = flashcards.title[currentFlashcard];
    text.innerText = flashcards.text[currentFlashcard];
  }
});

leftButton.addEventListener('click', () => {
  if (currentFlashcard > 0) {
    previousCard();
  } else {
    currentFlashcard = flashcards.title.length - 1;
    localStorage.setItem('cardIndex', currentFlashcard);
    title.innerText = flashcards.title[currentFlashcard];
    text.innerText = flashcards.text[currentFlashcard];
  }
});

function nextCard() {
  currentFlashcard++;
  localStorage.setItem('cardIndex', currentFlashcard);
  title.innerText = flashcards.title[currentFlashcard];
  text.innerText = flashcards.text[currentFlashcard];
}

function previousCard() {
  currentFlashcard--;
  localStorage.setItem('cardIndex', currentFlashcard);
  title.innerText = flashcards.title[currentFlashcard];
  text.innerText = flashcards.text[currentFlashcard];
}
