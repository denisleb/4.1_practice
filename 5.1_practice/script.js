var inputString = 'Hello, World!';
var inputStringSpace = '     Hello,     World!     ';

// 1. Возврат последнего символа в строке
function getLastSymbol(inputString) {
    return inputString.charAt(inputString.length - 1);
}

// 2. Возврат строки без последнего символа
function getWithoutLastSymbol(inputString) {
    return inputString.substring(0, inputString.length - 1);
}

// 3. Возврат строки в обратной последовательности
function reverseString(inputString) {
    var inputStringArray = inputString.split(''); //преобразование строки в массив
    inputStringArray = inputStringArray.reverse(); //реверс массива
    return inputStringArray.join(''); //преобразование массива в строку
}

// 4. Возврат строки с удаленными пробелами
function deletingSpace(inputStringSpace) {
    var unSpaceString = inputStringSpace.trim();
    while(unSpaceString.indexOf('  ') > -1) {
    	unSpaceString = unSpaceString.replace('  ', ' ');
    }
    return unSpaceString;
}

// Вызов функций
document.write('Исходный текст: ' + inputString + '<br>');
document.write('1. Последний символ: ' + getLastSymbol(inputString) + '<br>');
document.write('2. Строка без последнего символа: ' + getWithoutLastSymbol(inputString) + '<br>');
document.write('3. Строка в обратной последовательности: ' + reverseString(inputString) + '<br><br>');

document.write('Исходный текст: ' + inputStringSpace + '<br>');
document.write('4. Строка c удаленными пробелами: ' + deletingSpace(inputStringSpace) + '<br>');

console.log('Исходный текст: ' + inputStringSpace);
console.log('4. Строка c удаленными пробелами: ' + deletingSpace(inputStringSpace));