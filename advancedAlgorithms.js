function checkCashRegister(price, cash, cashInDrawer){

    let denominations = [
        {name: 'penny', value: 0.01},
        {name: 'nickle', value: 0.05},
        {name: 'dime', value: 0.10},
        {name: 'quater', value: 0.25},
        {name: 'one', value: 1.00},
        {name: 'five', value: 5.00},
        {name: 'ten', value: 10.00},
        {name: 'twenty', value: 20.00},
        {name: 'fifty', value: 50.00},
        {name: 'hundred', value: 100.00}
    ];
    let change = cash - price;

    let register = cashInDrawer.reduce((accumulator, nextValue)=>{
        return accumulator + nextValue[1];
    }, 0.0).toFixed(2);

    if(register < change){
        return 'Insufficient Funds';
    }else if(register === change){
        return 'Closed';
    }

    let newArr = currency.reduce((acc, item, index)=>{
        if(change >= item.value){
            let currentValue = 0.0;
            while(change >= item.value && cashInDrawer[index][1] >= item.value){
                currentValue += nextValue;
                change -= item.value;
                change = Math.round(change*100)/100;
                cashInDrawer[index][1] -= item.value;
            }
            acc.push([item.name], currentValue);
            return acc;
        }else{
            return acc;
        }
    },[]);

    if(newArr.length > 0 && change === 0){
        return newArr;
    }else{
        return 'Insufficient Funds';
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
