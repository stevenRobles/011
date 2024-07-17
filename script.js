document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible")
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active")
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none"
            } else {
                content.style.display = "block"
            }
        })
    }
})

function showExercise(id) {
    document.querySelectorAll('.exercise-section').forEach(section => {
        section.style.display = 'none'
    });
    document.getElementById(id).style.display = 'block'
}
function hideExercise(exerciseId) {
    document.getElementById(exerciseId).style.display = 'none'
}
function showEncorugamentMessage (){
    alert('¡No te desanimes! ¡Sigue intentandolo, lo estas haciendo muy bien!')
}

function checkSequence (answer,resultId){
    const correctanswer = 8
    let result
    if (answer=== correctanswer){
        result = '¡Correcto! Buen trabajo'
    }else {
        showEncorugamentMessage()
        result ='Incorrecto. Intentalo de nuevo '
    }
    document.getElementById(resultId).innerText=result
}

function checkComparison(answer, resultId) {
    const correctAnswer = 'María'
    let result;
    if (answer === correctAnswer) {
        result = '¡Correcto! Buen trabajo.'
    } else {
        showEncorugamentMessage()
        result = 'Incorrecto. Inténtalo de nuevo.'
    }
    document.getElementById(resultId).innerText = result
}


function checkConditional(answer, resultId) {
    const correctAnswer = 'Botella';
    let result;
    if (answer === correctAnswer) {
        result = '¡Correcto! Buen trabajo.'
    } else {
        showEncorugamentMessage()
        result = 'Incorrecto. Inténtalo de nuevo.'
    }
    document.getElementById(resultId).innerText = result
}
function checkConditional(answer, resultId) {
    const correctAnswer = 'Botella'
    let result;
    if (answer === correctAnswer) {
        result = '¡Correcto! Buen trabajo.'
    } else {
        showEncorugamentMessage()
        result = 'Incorrecto. Inténtalo de nuevo.'
    }
    document.getElementById(resultId).innerText = result
}


function checkLoop(answer, resultId) {
    const correctAnswer = 10;
    let result;
    if (answer === correctAnswer) {
        result = '¡Correcto! Buen trabajo.'
    } else {
        showEncorugamentMessage()
        result = 'Incorrecto. Inténtalo de nuevo.'
    }
    document.getElementById(resultId).innerText = result
}


function sumNaturalNumbers() {
    const num = parseInt(document.getElementById('numSum').value)
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    const result = `La suma de los números naturales hasta ${num} es ${sum}.`
    document.getElementById('result5').innerText = result
}


function calculateFactorial() {
    const num = parseInt(document.getElementById('numFactorial').value)
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    const result = `El factorial de ${num} es ${factorial}.`
    document.getElementById('result6').innerText = result
}


function generateTable() {
    const num = parseInt(document.getElementById('numTable').value)
    const operation = document.getElementById('operationTable').value
    let result = '';
    for (let i = 1; i <= 10; i++) {
        if (operation === '*') {
            result += `${num} x ${i} = ${num * i}\n`
        } else if (operation === '+') {
            result += `${num} + ${i} = ${num + i}\n`
        }
    }
    document.getElementById('result7').innerText = result
}


function generateFibonacci() {
    const num = parseInt(document.getElementById('numFibonacci').value)
    let fibSequence = [0, 1]
    for (let i = 2; i < num; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]
    }
    const result = fibSequence.slice(0, num).join(', ')
    document.getElementById('result8').innerText = result
}


function calculate() {
    const operation = document.getElementById('operationCalc').value
    const num1 = parseFloat(document.getElementById('num1Calc').value)
    const num2 = parseFloat(document.getElementById('num2Calc').value)
    let result
    switch (operation) {
        case 'add':
            result = num1 + num2
            break;
        case 'subtract':
            result = num1 - num2
            break;
        case 'multiply':
            result = num1 * num2
            break;
        case 'divide':
            result = num1 / num2
            break;
        default:
            result = 'Operación no válida'
    }
    document.getElementById('result9').innerText = `Resultado: ${result}`
    function convertBinaryToHex() {
        const binaryInput = document.getElementById('binaryInput').value
        const binaryValue = parseInt(binaryInput, 2)
        if (isNaN(binaryValue)) {
            showEncorugamentMessage()
            document.getElementById('binaryResult').textContent = 'Por favor, ingrese un número binario válido.'
        } else {
            const hexValue = binaryValue.toString(16).toUpperCase()
            document.getElementById('binaryResult').textContent = `Hexadecimal: ${hexValue}`
        }
    }

}

function convertBinaryToHex() {
    const binaryInput = document.getElementById('binaryInput').value
    const binaryValue = parseInt(binaryInput, 2)
    if (isNaN(binaryValue)) {
        showEncorugamentMessage()
        document.getElementById('binaryResult').textContent = 'Por favor, ingrese un número binario válido.'
    } else {
        const hexValue = binaryValue.toString(16).toUpperCase()
        document.getElementById('binaryResult').textContent = `Hexadecimal: ${hexValue}`
    }
}

function convertHexToBinary() {
    const hexInput = document.getElementById('hexInput').value;
    const hexValue = parseInt(hexInput, 16)
    if (isNaN(hexValue)) {
        showEncorugamentMessage()
        document.getElementById('hexResult').textContent = 'Por favor, ingrese un número hexadecimal válido.'
    } else {
        const binaryValue = hexValue.toString(2)
        document.getElementById('hexResult').textContent = `Binario: ${binaryValue}`
    }
}

function hideExercise(exerciseId) {
    document.getElementById(exerciseId).style.display = 'none'
}

function analyzeText() {
    const text = document.getElementById('textInput').value
    
    const charCount = text.length
    const vowelCount = (text.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g) || []).length
    const signCount = (text.match(/[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g) || []).length
    const spaceCount = (text.match(/\s/g) || []).length
    const wordCount = (text.match(/\b\S+\b/g) || []).length
    const digitCount = (text.match(/\d/g) || []).length
    
    document.getElementById('charCount').textContent = `Caracteres: ${charCount}`
    document.getElementById('vowelCount').textContent = `Vocales: ${vowelCount}`
    document.getElementById('signCount').textContent = `Signos: ${signCount}`
    document.getElementById('spaceCount').textContent = `Espacios: ${spaceCount}`
    document.getElementById('wordCount').textContent = `Palabras: ${wordCount}`
    document.getElementById('digitCount').textContent = `Dígitos: ${digitCount}`
}

function hideExercise(exerciseId) {
    document.getElementById(exerciseId).style.display = 'none'
}
function isPerfectNumber(num) {
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num
}

function findPerfectNumbers() {
    const input = document.getElementById('arrayInput').value
    const numbers = input.split(',').map(Number)
    const perfectNumbers = numbers.filter(isPerfectNumber)
    
    document.getElementById('arrayResult').textContent = 
        perfectNumbers.length > 0 ? `Números perfectos: ${perfectNumbers.join(', ')}` : 'No se encontraron números perfectos.'
}

function hideExercise(exerciseId) {
    document.getElementById(exerciseId).style.display = 'none'
}

