// №1
let age = +prompt("Сколько тебе лет?")
if (age > 18) {
    alert("Добро пожаловать")
} if (age < 18) {
    alert("Тебе ещё не 18!")
} else if  (age >= 0 || age <=18)  { 
   alert("Привет, Дебил")
} 
console.log(age);

// №2
let num1 = +prompt("Скажите число?")
let num3 =prompt("+ - / * ")
let num2 = +prompt("Скажите число?")

function toCalculate(a,b) {  
switch (num3) {
    case "+":
        alert(a + b)
        break;

        case "-":
        alert(a - b)
        break;

        case "*":
        alert(a * b)
        break;

        case "/":
        alert(a / b)
        break;
    default:
        break;
}
}
toCalculate(num1, num2)


// №3
function maxName(...names) {
    let long = "";

    names.forEach(name => {
        if (name.length > long.length) {
            long = name;
        }
    });

    return long;
}

console.log("Longest name:", maxName("Alex", "George", "Michael"));