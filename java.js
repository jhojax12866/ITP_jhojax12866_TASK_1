let displayInput = document.getElementById('display-input');

function addToDisplay(value) {
    displayInput.value += value;
}

function clearDisplay() {
    displayInput.value = '';
}

function call() {
    let number = displayInput.value;
    alert(`Llamando a ${number}`);
}
