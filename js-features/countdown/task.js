// простой таймер обратного отсчета
/*let seconds = 59;


const timer = setInterval(function () {
    seconds--; // Уменьшаем на 1


    document.getElementById('timer').textContent = seconds;


    if (seconds <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}, 1000)*/


// Таймер обратного отсчета усложненный
let totalSeconds = 59;

const timer = setInterval(function () {
    totalSeconds--;

    if (totalSeconds <= 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = '00:00:00';
        alert('Вы победили в конкурсе!');
        return;
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}, 1000);