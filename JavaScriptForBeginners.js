// 1. В указанное место напишите код, который поместит значение из переменной a в переменную x
function testA(a) {
    let x = "";
    x = a;
    return x;
}

// 2. Вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b"
function testSum(a, b) {
    var x;
    x=a+b
    return x;
}

// 3. Вписать в указанное место код, который будет присваивать переменной "х" удвоенное значение остатка от деления произведения переменных "a" и "b" на их сумму.
function testOperation(a, b) {
    var x;
    x = (a * b) % (a + b) * 2;
    return x;
}

// 4. Вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях.
function testIf(a, b) {
    var x;
    x = a > b ? a + b : a * b;
    return x;
}

// 5. Вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" - в 
// случае если  a < b, разность "a" и "b" - в случае если  a > b, и их произведение  в остальных случаях.
function testIf(a, b) {
    var x;
    x = a < b ? a + b : (a > b ? a - b : a * b);
    return x;
}

// 6. Вписать в указанное место код, который будет присваивать переменной "х" название цифры, переданной в переменную "а". Цифра в 
// переменную "а" будет передана случайным образом и может оказаться в диапазоне от 0 до 9 включительно.
// Варианты решения
// 6.1. String constant
testCase = a => {
    const words = 'Ноль Один Два Три Четыре Пять Шесть Семь Восемь Девять';
    return words.split(' ')[a];
};

// 6.2. Array constant
testCase = a => {
    const words = ["Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"];
    return words[a];
};

// 6.3. Object constant
testCase = a => {
    const words = {0: "Ноль", 1: "Один", 2: "Два", 3: "Три", 4: "Четыре", 
                   5: "Пять", 6: "Шесть", 7: "Семь", 8: "Восемь", 9: "Девять"};
    return words[a];
};

// 7. Вычислить факториал для числа, передаваемого в нашу функцию и вывести его с помощью команды return.
function testFactorial(a) {
    var x = 1;
    for (var i = 1; i <= a; i++) {
        x = x * i;
    }
    return x;
}

// 8. Вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа.
function testWhile(a) {
    var x=0;
    var i = 1;
    while (i <= a) {
        if (i % 2 == 0) {
            x += i;
        }
        i++;          
    }
        return x;
}

// 9. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом.
function my_function(n) {
    return n <= 1? 1 : my_function(n - 1) + ' ' + n;
  }

// 10. В функцию testStr передаются две строки. Нужно вернуть из функции суммарную длину.
function testStr(a, b) {
    return(a.length + b.length); 
}

// 11. Вернуть из функции символ строки, порядковый номер которого указан в переданном в функцию числе.
function testStr(str, n){
    return(str.charAt(n-1))
}

// 12. Вернуть из функции строку, которая будет включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные, а во второй - в строчные.
function testStr(a, b) {
    return(a.toUpperCase().concat(b.toLowerCase()))
}

// 13. Вернуть индекс позиции, с которой начинается вхождение второй строки в первую.
function testStr(a, b) {
    return a.indexOf(b);
}

// 14. Сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
function testArray(a, b) {
    let sum = 0;
    for(let x of a) sum += x;
    for(let x of b) sum += x;
    return sum;
}

// 15. Составить из символов этих строк один массив, затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, преобразовав в строку.
function testArray(a, b) {
    const total = a.concat(b);
    return [...total].reverse().join('') + "Иванов";
}

// 16. Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
function testDateTime(a, b) {
    let date1 = new Date(a);
    let date2 = new Date(b);
    let daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    if (date1 > date2)
        return daysArr[date1.getDay()];
    else
        return daysArr[date2.getDay()];
}

// 17. В функцию передается угол в градусах. Нужно вернуть из функции значение его синуса.
function testMath(a) {
    return Math.sin((a*Math.PI)/180)
}

// 18. Вычислить и вернуть из функции площадь треугольника. Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах.
function testMath(a, b, c) {
    c = ((c*Math.PI)/180)
    return (1/2*a*b*Math.sin(c))
}

// 19. Вычислить результат деления большего из этих чисел на меньшее, и округлив до ближайшего меньшего целого вернуть из функции.
function testMath(a, b, c, d) {
    m = Math.max(a, b, c, d)
    n = Math.min(a, b, c, d)
    return Math.floor(m/n)
}

// 20. В функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func"). Необходимо запустить функцию "func", с переменной "а" в качестве аргумента. нужно возвратить имя возникающей ошибки.
function testErrorFunc(a, func) {         
    try {
        func(a)
    }
    catch (e) {
        return e.name;
    }
}

// 21. В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s), а вторым - случайная подстрока(переменная sub_s), которую нужно использовать 
// в качестве шаблона регулярного выражения. Вам нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой.
function testRegExp(s, sub_s) {
    var m = new RegExp(sub_s, 'g')
    x = s.match(m);
    return x.join();
    }