const randomBtn = document.getElementById('random-btn')

var foodArr = ['Cheesecake Factory', 'Mozz Artisan Pizza', 'Rasing Canes', 'In-n-Out Burger', 'Five Guys', 'Longhorn Stakehouse', 'Buffalo Wild Wings', 'Bombay House']

function randomFood() {
    const random = foodArr[(Math.random() * foodArr.length) | 0];
    alert(random, foodArr[random]);
}

randomBtn.addEventListener('click', randomFood)
