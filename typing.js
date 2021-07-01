const textDisplay = document.getElementById('text');
const phrases = ['Welcome To My Website',
'I Am Sharan',
'I Study CS And Applied Math At UC Berkeley',
'Scroll Down To Learn More About Me'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function showText () {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');
  console.log(i);
  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 100
  const normalSpeed = Math.random() * (300 -200) + 100;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(showText, time);
}
showText();
