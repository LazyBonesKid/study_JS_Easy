'use strict';

let 
money,
income,
addExpenses,
deposite,
mission = 100500,
period = 11;



while (!parseInt(money)) {
    money = prompt('Ваш месячный доход?');
    if(money == null){
        alert('Это поле обезательно к заполнению');
        continue;
    }
    if(!money.trim()){
        alert('пустая строка (или только пробелы)');
        continue;
    }
    if(!Number(money)){
        alert('Только цифры');
        continue;
    }
    Number(money);
}


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposite = confirm('Есть ли у вас депозит в банке?');
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' крышек нюка колы');
console.log(addExpenses = addExpenses.toLocaleLowerCase().split(', '));

let 
expenses1 = prompt('Введите обязательную статью расходов'),
expenses2 = prompt('Введите обязательную статью расходов'),
amount1 = prompt('Во сколько это обойдется?'),
amount2 = prompt('Во сколько это обойдется?'),
budgetMonth = money - Number(amount1) + Number(amount2);

console.log('Бюджет на месяц :', budgetMonth);
console.log('Цель будет достигнута через:', Math.ceil(mission/budgetMonth), 'месяца');


let budgetDay = Math.floor(budgetMonth / 30) ;
console.log('Бюджет на день:', budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0 ) {
    console.log('Что то пошло не так');
} 