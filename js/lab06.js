// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let error = "";

// COLLECT VALUES FROM THE USER
//investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
do { 
    investment = parseFloat (prompt ("Enter investment amount as xxxx.xx")); 
} while (isNaN (investment));

//rate = parseFloat(prompt('Enter interest rate as xx.x'));
do { 
    rate = parseFloat (prompt ("Enter interest rate as xx.x Valid rates are between 0 and 6")); 
} while (isNaN (rate) || rate > 6 || rate < 0);

//years = parseInt(prompt('Enter the number of years you want to invest for'));
do { 
    years = parseFloat (prompt ("Enter the number of years you want to invest for. Valid value are between 1 and 30")); 
} while (isNaN (years) || years > 30 || years < 1);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);