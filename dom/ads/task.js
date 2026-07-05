const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function (rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');

    if (cases.length < 2) return;

    // Функция для переключения объявлений
    function rotate() {
        let currentActive = rotator.querySelector('.rotator__case_active');
        let currentIndex = Array.from(cases).indexOf(currentActive);

        if (currentActive) {
            currentActive.classList.remove('rotator__case_active');
        }

        let nextIndex = (currentIndex + 1) % cases.length;
        let nextCase = cases[nextIndex];

        nextCase.classList.add('rotator__case_active');
    }

    setInterval(rotate, 1000);
});