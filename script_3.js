//Завдання третє

let country = prompt('Оберіть країну для доставки:')
let lowercaseCountry = country.toLowerCase();

let price;

switch(lowercaseCountry){
    case "китай":
        price = `100`;
        break;
    case "чилі":
        price = `250`;
        break;
    case "індія":
        price = `80`;
        break;
    case "австралія":
        price = `170`;
        break;
    case "ямайка":
        price = `120`;
        break;
    default: alert('В вашу країні немає доставки')
}
alert(`Доставка в ${lowercaseCountry} буде коштувати ${price} кредитів`)