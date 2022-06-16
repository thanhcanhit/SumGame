var scoreValue = 0, result;
var score = document.getElementById('js-score');
var question = document.getElementById('js-question');
var items = document.getElementsByClassName('js-request-item');
var correctSound = new Audio('./correct.mp3');
var wrongSound = new Audio('./wrong.mp3');


function load() {
    setTimeout(() => {
        for (let item of items) {
            item.classList.add('hide');
        }
        question.classList.add('hide');
        score.classList.add('hide');

        score.innerHTML = scoreValue;
        
        var a = Math.floor(Math.random() * (99) + 1);
        var b = Math.floor(Math.random() * (99) + 1);

        result = a + b;
        var head = result - result / 2;
        var tail = result + result / 2;

        question.innerHTML = a + " + " + b + " = ?";

        for (var i = 0; i < 4; i++) {
            items[i].value = Math.floor(Math.random() * (head - tail) + tail);
        }

        var resultPosition = Math.floor(Math.random() * 3 + 0);
        items[resultPosition].value = result;

        setTimeout(() => {
            score.classList.remove('hide');
            question.classList.remove('hide');
            for (let item of items) {
                item.classList.remove('hide');
            }
        }, 100);
    }, 400);
};

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
        if (e.target.value == result) {
            scoreValue += 100;
            correctSound.play();
        }
        else {
            wrongSound.play();
            setTimeout(() => {
                alert(`Bạn đạt được ${scoreValue} điểm`);
                score.innerHTML = 0;
                scoreValue = 0;
            }, 500
            )
        }
        load();
    })

}