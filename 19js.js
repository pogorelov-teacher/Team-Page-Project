let mas = ["Анимации (долго но круто)", "Соооон", "Кушать" ]

let ul = document.getElementById("ul");
function showSkills() {
for (let i = 0; i < mas.length; i++) {
    let li = document.createElement("li");
    li.textContent =  mas[i];
    ul.appendChild(li);

    }
    };
