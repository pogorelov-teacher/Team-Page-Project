// Функция: "Приветствие для посетителей"
function showWelcomeMessage() {
    alert("Добро пожаловать на страницу нашей команды!");
}

// Показ функции после загрузки странички
window.onload = showWelcomeMessage;

let skills = document.getElementById("skills");

function showSkills() {
    skills.style.display = 'block';
}

let btn = document.getElementById("btn");
btn.onclick = showSkills;


let skills1 = document.getElementById("skills1");

function showSkills1() {
    skills1.style.display = 'block';
}

let btn1 = document.getElementById("btn1");
btn1.onclick = showSkills1;
