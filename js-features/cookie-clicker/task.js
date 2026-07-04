const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isSmall = false;


cookie.onclick = function () {

    clickCount++;
    counter.textContent = clickCount;

    if (isSmall) {
        cookie.width = 300;
        cookie.height = 300;
    } else {
        cookie.width = 150;
        cookie.height = 150;
    }

    isSmall = !isSmall;
};