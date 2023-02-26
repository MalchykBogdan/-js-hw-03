//Завдання Перше

const minNumerc = 1;
const maxNumeric = 10;
totalNumeric = 0;

for (let i = minNumerc; i <= maxNumeric; i+=1){
    const numeric = Math.round(
        Math.random() *(maxNumeric-minNumerc)+minNumerc
    );
    console.log(`Номер: ${i} - ${numeric}`);
}

