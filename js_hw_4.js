// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let n = 2

for(let a = 1; a <= 10; a++){
    let b = n**a
    console.log(b)
}

// 2. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const vozv = function(step) {
    console.log(n**step)
}

vozv(8)

// 3. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)'
let x = ''

for(i = 0; i < 5; i++) {
    x = x + smile
    console.log(x)
}

// 4. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(stroka, numberOfRows) {
    let x = ''
    for(i = 0; i < numberOfRows; i++) {
        x = x + stroka
        console.log(x)
    }
}

printSmile('@', 34)

// 5.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructure(str = "gfmfgmghmyguuyyg") {
    str = str.toLowerCase();
    let vowels = "aeiouy";
    let consonants = "bdmnmymygmgtygrrhrhgvwqu";
    
    let vowelCount = 0
    let consonantCount = 0

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (vowels.includes(currentLetter)) {
            vowelCount++
        }
        else if (consonants.includes(currentLetter)) {
            consonantCount++
        }
    }
    console.log(`Слово ${str} состоит из ${vowelCount} гласных и ${consonantCount} согласных букв`)
}

getWordStructure("Hello man! How are you?")

// 6. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

function isPalindrom(str){
    str = str.toLowerCase();
    let len = Math.floor(str.length / 2)
    for(let i = 0; i < len; i++ ){
        
        let front = str[i]
        let bottom = str[str.length - i - 1]
        if(front !== bottom){
            console.log(`${str} не полиндром`)
            return false
        }
    }
     console.log(`${str} полиндром`)
    return true
}

isPalindrom('Abba')