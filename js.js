var score = document.getElementById('js-score');
var question = document.getElementById('js-question');
var item = new Array();
item[0] = document.getElementById('js-item-1');
item[1] = document.getElementById('js-item-2');
item[2] = document.getElementById('js-item-3');
item[3] = document.getElementById('js-item-4');

var scoreValue = 0;
var result;

function load() {
    score.innerHTML = scoreValue;

    var a = Math.floor(Math.random() * (99) + 1);
    var b = Math.floor(Math.random() * (99) + 1);

    result = a + b;
    var head = result - result/2;
    var tail = result + result/2;

    question.innerHTML = a + " + "  + b + " = ?";

    for (var i = 0; i < 4; i++) {
        item[i].value = Math.floor(Math.random() * (head-tail) + tail);
    }

    var resultPosition = Math.floor(Math.random() * 3 + 0);
    item[resultPosition].value = result;

    
};

item[0].addEventListener('click', function () {
    if (item[0].value == result) scoreValue += 100;
    else {
        alert("Game Over Điểm của bạn là " + scoreValue);
        scoreValue = 0;
    }
    load();
})
item[1].addEventListener('click', function () {
    if (item[1].value == result) scoreValue += 100;
    else {
        alert("Game Over Điểm của bạn là " + scoreValue);
        scoreValue = 0;
    }
    load();
})
item[2].addEventListener('click', function () {
    if (item[2].value == result) scoreValue += 100;
    else {
        alert("Game Over Điểm của bạn là " + scoreValue);
        scoreValue = 0;
    }
    load();
})
item[3].addEventListener('click', function () {
    if (item[3].value == result) scoreValue += 100;
    else {
        alert("Game Over Điểm của bạn là " + scoreValue);
        scoreValue = 0;
    }
    load();
})

