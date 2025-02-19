function goToNextPage() {
    window.location.href = "birthday.html";
}

function openGift() {
    document.querySelector('.surprise').style.display = "flex";
}
function openGift() {
    document.querySelector('.gift-box').classList.add('open');
    document.querySelector('.surprise').style.display = "flex";
}
function createBalloons() {
    const balloonContainer = document.getElementById('balloons');
    const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 3 + 5 + 's';
        balloonContainer.appendChild(balloon);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createBalloons();
});
