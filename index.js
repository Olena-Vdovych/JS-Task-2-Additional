// Example 1 
let incomePayment = Number(prompt('Введіть бажаний дохід :'));
let lateness = Number(prompt('Введіть кількість запізнень:'));
let linesOfCode = Math.floor((incomePayment / 50) * 100);
if (lateness >= 3) {
    linesOfCode -= (lateness - 2) * 50;
}
alert(`Вам потрібно написати ${linesOfCode} рядків коду`);
