// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
    age = Number(age)
    if(!isNaN(age)) {
        if (age < age_2){
            console.log("You don't have access cause your age is " + age + " It's less then " + age_2)
        } else if(age >=  age_2 && age <  age_3) {
            console.log("Welcome  !")
        } else if(age  > age_3) {
            console.log("Keep calm and look Culture channel")
        } 
    } else { console.log("Not integer value")}
}
checkAge(17)
checkAge('adfasdg')
checkAge('27adfasdg')

let agePrompt = prompt("Enter age")
checkAge(agePrompt)
