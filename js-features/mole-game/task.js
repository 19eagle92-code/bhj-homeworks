const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');


let dead = 0;
let lost = 0;

// Функция для получения элемента лунки (из base.js)
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Функция для сброса игры
function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}

// Функция проверки условий победы/поражения
function checkGameStatus() {
    if (dead === 10) {
        alert('Вы победили!');
        resetGame();
        return true;
    }

    if (lost === 5) {
        alert('Вы проиграли!');
        resetGame();
        return true;
    }

    return false;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {

        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
        } else {

            lost++;
            lostCounter.textContent = lost;
        }

        checkGameStatus();
    };
}