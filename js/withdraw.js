//Add Click Handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //Get the amount from field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value)
    withdrawField.value = '';
    if (typeof newWithdrawAmount !== "number" || isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert('Please Withdraw Valid Amount')
    } else {
        //Get the current withdraw
        const withdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
        //Get the main balance
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
        if (newWithdrawAmount > previousBalanceTotal) {
            alert('Not Enough Balance')
            return;
        }
        //Update the total amount
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        //Set the update Amount
        withdrawTotalElement.innerText = currentWithdrawTotal;
        //Update the main balance
        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        //Set the main balance
        balanceTotalElement.innerText = currentBalanceTotal
        //Clear the deposit field
        withdrawField.value = '';
    }

})
