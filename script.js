// Функция: "Приветствие для посетителей"
function showWelcomeMessage() {
    alert("Добро пожаловать на страницу нашей команды!");
}

// Показ функции после загрузки странички
window.onload = showWelcomeMessage;

let btn = document.getElementById('btn');
btn.addEventListener('click', function showSkills() {
    alert('Ниже указаны наши навыки')
});
