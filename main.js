// Завдання 1.

// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання.

function numbers (numb){
    return function (nextNumb){
        return numb +=nextNumb;
    }
}
const sum = numbers(0);
console.log(sum(3))
console.log(sum(5))
console.log(sum(228))
