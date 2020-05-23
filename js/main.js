const title = document.querySelector('.title');
const text = document.querySelector('.text');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

// Title Font Size
const titleFontSizeText = document.querySelector('.titleFontSize');
const titlePlusButton = document.querySelector('.titlePlus');
const titleMinusButton = document.querySelector('.titleMinus');

function changeFontSize(fs, str) {
  if (str === '+') {
    fs += 0.1;
    return fs;
  } else if (str === '-') {
    fs -= 0.1;
    return fs;
  }
}

let titleFontSize;

if (!localStorage.titleFontSize) {
  titleFontSize = 2.0;
  titleFontSizeText.innerText = Math.round(titleFontSize * 10) / 10 + 'rem';
  localStorage.setItem('titleFontSize', titleFontSize);
} else {
  titleFontSize = localStorage.getItem('titleFontSize');
  titleFontSize = Math.round(titleFontSize * 10) / 10;
  title.style.setProperty('--title-font-size', titleFontSize + 'rem');
  titleFontSizeText.innerText = titleFontSize + 'rem';
}

titlePlusButton.addEventListener('click', () => {
  titleFontSize = Math.round(changeFontSize(titleFontSize, '+') * 10) / 10;
  localStorage.setItem('titleFontSize', titleFontSize);
  titleFontSizeText.innerText = titleFontSize + 'rem';
  title.style.setProperty('--title-font-size', titleFontSize + 'rem');
});

titleMinusButton.addEventListener('click', () => {
  titleFontSize = Math.round(changeFontSize(titleFontSize, '-') * 10) / 10;
  localStorage.setItem('titleFontSize', titleFontSize);
  titleFontSizeText.innerText = titleFontSize + 'rem';
  title.style.setProperty('--title-font-size', titleFontSize + 'rem');
});

// Text Font Size
const textFontSizeText = document.querySelector('.textFontSize');
const textPlusButton = document.querySelector('.textPlus');
const textMinusButton = document.querySelector('.textMinus');

let textFontSize;

if (!localStorage.textFontSize) {
  textFontSize = 1.1;
  textFontSizeText.innerText = Math.round(textFontSize * 10) / 10 + 'rem';
  localStorage.setItem('textFontSize', textFontSize);
} else {
  textFontSize = localStorage.getItem('textFontSize');
  textFontSize = Math.round(textFontSize * 10) / 10;
  text.style.setProperty('--text-font-size', textFontSize + 'rem');
  textFontSizeText.innerText = textFontSize + 'rem';
}

textPlusButton.addEventListener('click', () => {
  textFontSize = Math.round(changeFontSize(textFontSize, '+') * 10) / 10;
  localStorage.setItem('textFontSize', textFontSize);
  textFontSizeText.innerText = textFontSize + 'rem';
  text.style.setProperty('--text-font-size', textFontSize + 'rem');
});

textMinusButton.addEventListener('click', () => {
  textFontSize = Math.round(changeFontSize(textFontSize, '-') * 10) / 10;
  localStorage.setItem('textFontSize', textFontSize);
  textFontSizeText.innerText = textFontSize + 'rem';
  text.style.setProperty('--text-font-size', textFontSize + 'rem');
});

// Colour Scheme
const colourSchemePicker = document.querySelector('.colourScheme');

let colourSchemeOptions = {
  brown: ['#3e3e3e', '#d6c7a1', '#3e3e3e', '#f6e7c1'],
  navy: ['#0E2431', '#F5E4C3', '#0E2431', '#FAF4D0'],
};

let colourScheme;
let root = document.documentElement;

function setColourScheme(colourScheme) {
  root.style.setProperty(
    '--clr-background',
    colourSchemeOptions[colourScheme][0]
  );
  root.style.setProperty(
    '--clr-card-background',
    colourSchemeOptions[colourScheme][1]
  );
  root.style.setProperty('--clr-text', colourSchemeOptions[colourScheme][2]);
  root.style.setProperty('--clr-buttons', colourSchemeOptions[colourScheme][3]);
}

if (!localStorage.colourScheme) {
  colourScheme = 'brown';
  colourSchemePicker.value = colourScheme;
  localStorage.setItem('colourScheme', colourScheme);
} else {
  colourScheme = localStorage.getItem('colourScheme');
  setColourScheme(colourScheme);
  colourSchemePicker.value = colourScheme;
}

colourSchemePicker.addEventListener('change', (e) => {
  colourScheme = e.target.value;
  localStorage.setItem('colourScheme', colourScheme);
  setColourScheme(colourScheme);
});

// Object containing the flashcard's title and text body
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
