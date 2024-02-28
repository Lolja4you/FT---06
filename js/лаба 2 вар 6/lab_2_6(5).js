const readline = require('readline');


function multiply(first, second, third) {
    // Создаем отсортированный список из трех чисел
    let numbers = [first, second, third];
    numbers.sort(function(a, b) {
      return b - a;
    });
    
    // Выбираем первые два самых больших числа
    let largest1 = numbers[0];
    let largest2 = numbers[1];
    
    // Возвращаем произведение двух самых больших чисел
    return largest1 * largest2;
  }
  

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});

rl.question('Введите первое число: ', (first) => {
    rl.question('Введите второе число: ', (second) => {
        rl.question('Введите третье число: ', (third) => {
            let firstNum = parseInt(first);
            let secondNum = parseInt(second);
            let thirdNum = parseInt(third);

            let result = multiply(firstNum, secondNum, thirdNum);
            console.log(`Наибольшее произведение из [${firstNum}, ${secondNum}, ${thirdNum}]: ${result}`);
            rl.close();
        });
    });
});