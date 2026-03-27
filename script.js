// Функция: "Приветствие для посетителей"
function showWelcomeMessage() {
    alert("Добро пожаловать на страницу нашей команды!");
}

// Показ функции после загрузки странички
window.onload = showWelcomeMessage;


const skills = document.getElementById("skills");

const b_skills = document.getElementById("b_skills");


function showSkills() {

const skillItems = skills.getElementsByTagName("li");
let skillsText = "Навыки участника: ";


for (let i = 0; i < skillItems.length; i++) {
    skillsText += skillItems[i].textContent;
    if (i < skillItems.length - 1) {
        skillsText += ", "; 
    }
}

 alert(skillsText);
}

b_skills.addEventListener('click', showSkills);