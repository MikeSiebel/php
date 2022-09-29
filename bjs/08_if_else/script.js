let minValue = parseInt(prompt('Минимальное значение числа (не может быть менее -999)', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное значение числа (не может быть более 999)', '100')) || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
if (maxValue < minValue) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
/*call to function refactor number to text*/
let answerNumber1 = answerNumberF(answerNumber);
answerField.innerText = `Вы загадали число ${answerNumber1}?`;

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = ['Вы загадали неправильное число!\u{1F914}','Этого не может быть!\u{1F928}','А вы не ошиблись?\u{1F925}'];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;

            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            /*call to function refactor number to text*/
            let answerNumber2 = answerNumberF(answerNumber);
            let arrPhrase = [`Вы загадали число ${answerNumber2}?`,`Предположим это ${answerNumber2}?`,`Возможно это ${answerNumber2}?`];
            const answerPhrase = (arrPhrase[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            let taskError = ['Вы загадали неправильное число!\u{1F914}','Этого не может быть!\u{1F928}','А вы не ошиблись?\u{1F925}'];
            const answerPhrase = (taskError[phraseRandom]);

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            /*call to function refactor number to text*/
            let answerNumber3 = answerNumberF(answerNumber);
            const phraseRandom = Math.round( Math.random()*2);
            let arrPhrase = [`Вы загадали число ${answerNumber3}?`,`Предположим это ${answerNumber3}?`,`Возможно это ${answerNumber3}?`];
            const answerPhrase = (arrPhrase[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})


document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное значение числа (не может быть менее -999)', '0')) || 1;
    maxValue = parseInt(prompt('Максимальное значение числа (не может быть более 999)', '100')) || 99;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    if (maxValue < minValue) {
        minValue = 0;
        maxValue = 100;
    }
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.floor((minValue + maxValue) / 2);
gameRun = true;
/** */
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let taskError = ['Да! Я не шутил!\n\u{1F60E}','Yes! Это работает!\u{1F60A}','Работает! Попробуем ещё раз?\u{1F917}'];
        const answerPhrase = (taskError[phraseRandom]);
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

function answerNumberF(answerNumber){

    let textVarSign = ' ';
    
    if (answerNumber < 0) {
       textVarSign = 'минус';
    }
    /*define the module of number*/
    let absNumber = Math.abs(answerNumber);
    /*define the text value of Hundreds of number*/
    let answerNumbH = Math.floor(absNumber);
    let indexNumbH = Math.floor(answerNumbH / 100 - 1);
    let textVarHundreds = textVarHundred(indexNumbH);
    /*define the text value of Dozens of number*/
    let answerNumbD = (absNumber - (indexNumbH + 1) * 100);
    
    let textVarNineteens = ' ';
    let textVarDozens = ' ';
    let textVarUnits = ' ';
    
    if (answerNumbD < 20) {
    /*define the text value of Dozens of number with dozens less then 20 */
    textVarNineteens = textVarNineteen(answerNumbD);
    }else{
       let indexNumbD = Math.floor(answerNumbD / 10 - 2);
       textVarDozens  = textVarDozen(indexNumbD);
       let indexNumbU = answerNumbD - (indexNumbD + 2) * 10;
       console.log(answerNumbD);
       console.log(indexNumbU);
       textVarUnits = textVarUnit(indexNumbU - 1);
       //textVarUnits = textVarUnit(indexNumbU);
    }
    
    
    function textVarHundred(indexNumH) {
        if (indexNumH >= 0) {
       let textArrHundreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
       return textArrHundreds[indexNumH];
        }else{
            return ' ';
            }
    }
    
    function textVarDozen(answerNumberText) {
        if (answerNumberText >= 0) {
    
       let textArrDozens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
       return textArrDozens[answerNumberText];
        }else{
            return ' ';
            }
       
    }
    
    function textVarUnit(answerNumU) {
        if (answerNumU >= 0) {
       let textArrUnits = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
       return textArrUnits[answerNumU];
        }else{
            return ' ';
            }
    }
    
    function textVarNineteen(answerNumN) {

        if (answerNumN >= 0){
       let answerNumberText = answerNumN;
    
       let textArrNineteens = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
       return textArrNineteens[answerNumberText - 1];
        }else{
        return ' ';
        }
    }
    
    return  `${textVarSign} ${textVarHundreds} ${textVarNineteens} ${textVarDozens} ${textVarUnits}`;
    }