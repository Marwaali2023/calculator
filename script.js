function clearDisplay() {
    document.getElementById('display').value = '';
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value)
    } catch (error) {
        document.getElementById('display').value = 'Error!!'
    }
}
function toggleSign(){
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) * -1;
}
