// Сообщение о начале
alert("Сейчас будут выходить рандомные числа");

// Генерация случайного числа от 0 до 99
let randomNumber = Math.floor(Math.random() * 100);
alert("Ваше случайное число: " + randomNumber);

// Умножение на 2
let confirmMultiply = confirm("Нажмите ОК, чтобы умножить число на 2");
if (confirmMultiply) {
    randomNumber = randomNumber * 2;
    alert("Результат после умножения: " + randomNumber);
}

// Деление на 2
let confirmDivide = confirm("Нажмите ОК, чтобы разделить число на 2");
if (confirmDivide) {
    randomNumber = randomNumber / 2;
    alert("Результат после деления: " + randomNumber);
}

// Остаток от деления на 3
let confirmRemainder = confirm("Нажмите ОК, чтобы найти остаток от деления этого числа на 3");
if (confirmRemainder) {
    let remainder = randomNumber % 3; // Остаток от деления
    randomNumber = randomNumber - remainder; // Вычитаем остаток
    alert("Результат после вычитания остатка (" + remainder + "): " + randomNumber);
}
