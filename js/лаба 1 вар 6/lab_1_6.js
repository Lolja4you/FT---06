const readline = require('readline');

function getDigits(num) {
    // Функция для получения списка цифр числа
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digits;
}

function armstrongNumbers(a, b) {
    // Функция для нахождения чисел Армстронга на заданном отрезке
    let armstrongNums = [];
    for (let num = a; num <= b; num++) {
        let digits = getDigits(num);
        let numDigits = digits.length;
        let armstrongSum = digits.reduce((sum, digit) => sum + Math.pow(digit, numDigits), 0);
        if (armstrongSum === num) {
            armstrongNums.push(num);
        }
    }
    return armstrongNums;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите начало отрезка: ', (start) => {
    rl.question('Введите конец отрезка: ', (end) => {
        let a = parseInt(start);
        let b = parseInt(end);

        let armstrongNums = armstrongNumbers(a, b);
        console.log(`Числа Армстронга на отрезке [${a}, ${b}]: ${armstrongNums}`);
        rl.close();
    });
});