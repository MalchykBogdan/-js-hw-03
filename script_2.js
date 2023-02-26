//Завдання Друге

let enterMood = prompt(`Введіть свій настрій`)
 
const mood = enterMood;
let number;

switch (mood){
    case "Щасливий":
        number = `🙂`;
        break;
    case "Сумний":
        number = `😢`;
        break;
    case "Злий":
        number = `😕`;
        break;
}
alert(number)