// простой таймер обратного отсчета
let seconds = 59;


const timer = setInterval(function () {
    seconds--; // Уменьшаем на 1


    document.getElementById('timer').textContent = seconds;


    if (seconds <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}, 1000)
