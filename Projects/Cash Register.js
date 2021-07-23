//Main function that returns the status of the cash register as well as the change amount, if necessary.
function checkCashRegister(price, cash, cid) {
    //Object that will change given the status of the cash register.
    var stat = {
        status: 'OPEN',
        change: calculateChangeFromDrawer(price, cash, cid)
    }
    //If there aren't sufficient funds, change the status.
    if (sufficientFunds(price, cash, cid) == false) {
        stat.status = 'INSUFFICIENT_FUNDS';
        stat.change = [];
        //If the change amount is equal to the change in the drawer, change the status.
    } else if (sufficientFunds(price, cash, cid) == 'Equals') {
        stat.status = 'CLOSED';
        stat.change = [...cid];
    }
    //Otherwise we have enough change, return the change amount.
    return stat;
}
//Function that checks to see if there are enough funds in the cash register.
function sufficientFunds(price, cash, cid) {
    //Establish variables
    var change = (cash - price);
    //Variable that finds the total of cid.
    var totalInDrawer = cid.flat().filter(x => typeof x == 'number').reduce(function (a, b) {
        return a + b;
    });
    //If the change is greater than the total in drawer than there are insufficient funds, return false.
    if (change > totalInDrawer) {
        return false;
        //If the function could not make exact change, return false.
    } else if (calculateChangeFromDrawer(price, cash, cid).flat().filter(x => typeof x == 'number').reduce(function (a, b) {
            return a + b
        }).toFixed(2) !== change.toFixed(2)) {
        return false;
    }
    //If the change is equal to the total in drawer.
    else if (change === totalInDrawer) {
        return 'Equals';
    }
    //Otherwise they there are enough funds, return true.
    return true;
}
//Function that calculates the change from drawer.
function calculateChangeFromDrawer(price, cash, cid) {
    //Establish a library which stores the value of each currency.
    const currency = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE-HUNDRED': 100
    };
    //Establish variables
    var ans = [];
    var change = parseFloat(cash - price).toFixed(2);
    //Loop through cid largest to smallest.
    for (var i = cid.length - 1; i >= 0; i--) {
        //Establish variables
        //The name of the currency
        const currencyName = cid[i][0];
        //The amount of currency in the drawer
        const currencyTotal = cid[i][1];
        //The value of that currency
        const currencyValue = currency[currencyName];
        //The amount of currency in the drawer, based on it's value.
        var currencyAmount = (currencyTotal / currencyValue).toFixed(2);
        //The amount of currency that will be returned.
        var currencyToReturn = 0;
        //While the change is greater than or equal to the currency value, and the amount of currency is greater than 0.
        while (change >= currencyValue && currencyAmount > 0) {
            //Continually subtract the change by the value of that currency amount.
            change -= currencyValue;
            change = change.toFixed(2);
            //Subtract the currency amount as the drawer is running out of funds.
            currencyAmount--;
            currencyToReturn++;
        }
        //If a type of currency is going to be returned.
        if (currencyToReturn > 0) {
            //Then push the name of that currency, as well as the specific amount of change.
            ans.push([currencyName, currencyToReturn * currencyValue])
        }
    }
    return ans;
}
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));

//Psuedo Code
//Design a cash register drawer function that accepts a purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer as the third argument.

//Main function will return the status of the drawer, as well as the change if necessary.
//If the sufficient change function is false, return insufficent funds.
//If the suffcient change function returns the drawer, then it's equal, return the drawer.
//Else return the calculated change amount from the calculated change function.

//Helper function that will check to see if there is enough funds in the drawer. It will take cid, price, and cash as it's arguments.
//Calculate the change amount, price - change.
//Calculate the total amount in the drawer
//If the change is greater then the total amount in the drawer return false.
//If the change is equal to the total amount in the drawer then return the drawer.
//Otherwise, there is enough in the drawer, return true.

//Helper function that will calculate the change, from the drawer. Taking cid, price and cash, as it's arguments.
//Create a library which contains currency amounts.
//Get as much change from one bill before moving onto the next.
//Establish variables
//While loop that checks to see if the change is greater than or equal to the value of that currency
//As well as checking to see if there is enough currency to return.
//Subtract the change amount by the value of that currency.
//Subtract the currency amount
//Add the currency to return amount
//Exit loop
//If statement that will check to see if a specific type of currency is going to be returned based on the conditions
//If it is, return the name of that currency as well as the specific change amount.