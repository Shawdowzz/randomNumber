let button = document.getElementById('btn');
let output = document.getElementById('gen');
let minInput = document.getElementById('Min');
let maxInput = document.getElementById('Max');

button.onclick = function () {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max) || min > max) {
        output.textContent = "⚠️ Invalid range";
        return;
    }

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    output.textContent = randomNum;
};
