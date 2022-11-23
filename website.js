var button = document.createElement('button');
var randomNumber = 0;
button.innerHTML = 'Generate Random Number';
button.onclick = function () {
    randomNumber = Math.random() * 10;
    randomNumber = randomNumber - randomNumber % 1;
    alert("The number is between 1 and 10!");
};
document.body.appendChild(button);
var textBox = document.createElement('input');
textBox.type = 'text';
document.body.appendChild(textBox);
var checkButton = document.createElement('button');
checkButton.innerHTML = 'Check';
checkButton.onclick = function () {
    if (textBox.value == randomNumber) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
};
document.body.appendChild(checkButton);