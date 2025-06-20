const phone = document.getElementById('phone');
const screenOverlay = document.getElementById('screen-overlay');
const input = document.getElementById('codeInput');
const screenText = document.getElementById('screen-text');
const winMessage = document.getElementById('win-message');
const winText = document.getElementById('win-text');
const winOk = document.getElementById('win-ok');
const winCancel = document.getElementById('win-cancel');
const openSound = document.getElementById('openSound');
const replySound = document.getElementById('replySound');

let isOpen = false;

phone.addEventListener('click', () => {
  if (isOpen) return;

  isOpen = true;

  openSound.play();

  phone.src = 'assets/open-phone1.png';

  setTimeout(() => {
    phone.src = 'assets/open-phone2.png';
    screenOverlay.style.display = 'block';
    // Здесь изменено на innerHTML и добавлен перенос строки <br>
    screenText.innerHTML = 'Send a text<br>to X';
    input.style.display = 'block';
    input.focus();
  }, 400);
});

const responses = {
  "руж": "uh-uh",
  "велосипед": "я пернул",
  "табуретка": "ты еблан?",
  "котоносок": "это пиздец",
  "нежность": "^_^",
  "натаниэль": "PFFFFFFF",
  "ананас": "несса пожрет говна",
  "икс": "BIMBO DOLL",
  "григорий": "король 25 кадра",
  "мишель": "oops",
  "арина": "пожалуста не кради постеры умоляю пожалуста",
  "солви": "cutest girl in the world ! ^_^",
  "аяно": "Drag Queen",
  "плакса": "girly girl",
  "мила": "прекрати такие стикеры крутые юзать",
  "туна": "огромные соски",
  "лия": "обернись, я уже 10 лет живу в твоем пентхаусе",
  "визави": "а вы помните вазу?",
  "эра": "very soon ya will see it 07",
  "нура": "главный твинкуля района отсосала наруто за 3рубля",
  "несса": "лерон барон ракрута",
  "сайаана": "воплощение теории антропогенеза",
  "соня": "мимик chapter one true",
  "федя": "nah",
  "хэли": "uh-uh",
  "фурри": "кровные братья",
  "ена": "я захотел воппер из-за твоей эры",
  "катсуки": "cat suka ха хах ха хах хаха ха ...............",
  
  
  
  
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const code = input.value.toLowerCase().trim();
    if (code.length === 0) return;

    screenText.textContent = '...';  // мигающее троеточие
    input.style.display = 'none';

    setTimeout(() => {
      replySound.play();
      const answer = responses[code] || "Код не распознан";
      winText.textContent = answer;
      winMessage.classList.add('active');
    }, 1500);
  }
});

winOk.addEventListener('click', () => {
  winMessage.classList.remove('active');
  input.value = '';
  input.style.display = 'block';
  screenText.innerHTML = 'Send a text<br>to X';
  input.focus();
});

winCancel.addEventListener('click', () => {
  winMessage.classList.remove('active');
  input.value = '';
  input.style.display = 'block';
  screenText.innerHTML = 'Send a text<br>to X';
  input.focus();
});