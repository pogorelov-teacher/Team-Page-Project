const showSkillsOneBtn = document.getElementById('showSkillsOneBtn');
const showSkillsTwoBtn = document.getElementById('showSkillsTwoBtn');

// Функция: "Приветствие для посетителей"
function showWelcomeMessage() {
    alert("Добро пожаловать на страницу нашей команды!");
}

// Показ функции после загрузки странички
window.onload = showWelcomeMessage;

function showSkillsOne() {
    alert(`Навыки Синявской Маргариты: 
    Вайбкодинг;
    Варить вкусные пельмени;
    Профессиональное самобичевание.`);
}

function showSkillsTwo() {
    alert(`Навыки Булатовой Валерии: 
    Джим герл;
    Амбассадор греческого йогурта;
    Вайбкодинг.`);
}

showSkillsOneBtn.addEventListener('click', showSkillsOne);
showSkillsTwoBtn.addEventListener('click', showSkillsTwo);