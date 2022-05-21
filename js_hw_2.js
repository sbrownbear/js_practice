// HW_1* Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    if (age < age_2) {
        console.log("You don't heve access cause your age is " + age + " . It's less then " + age_2)
    } else if (age >= age_2 && age  < age_3) {
        console.log("Welcom!")
    } else if(age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }   
}

checkAge(17)
checkAge(18)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
const checkAge_2 = function(age) {
    if(typeof age == "number") {

    if (age < age_2) {
        console.log("You don't heve access cause your age is " + age + " . It's less then " + age_2)
    } else if (age >= age_2 && age  < age_3) {
        console.log("Welcom!")
    } else if(age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }   
} else { console.log ("Not integer value")}
}

checkAge_2(17)
checkAge_2('adfasdg')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const checkAge_3 = function(age) {

    age = Number(age)
    
    if(!isNaN(age_2)) {

    if (age < age_2) {
        console.log("You don't heve access cause your age is " + age + " . It's less then " + age_2)
    } else if (age >= age_2 && age  < age_3) {
        console.log("Welcom!")
    } else if(age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }   
} else { console.log ("Not integer value")}
}
checkAge_3(17)
checkAge_3('adfasdg')
checkAge_3('27adfasdg')
