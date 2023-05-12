/**
 * 
 */

// const moneyBox = (coins) => {
//     var saveCoins = 0;

//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

moneyBox(5);
moneyBox(10);


/**
 * Crear una alcancia pero con closure
 */

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);    
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4); // 4
myMoneyBox(6); // 4 + 6 = 10
myMoneyBox(10); // 10 + 10 = 20