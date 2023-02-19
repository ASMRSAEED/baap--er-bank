
//Add Click Handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //Get the amount from field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value)
    //Get the current deposit
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    //Update the total amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //Set the update Amount
    depositTotalElement.innerText = currentDepositTotal;
    ////Get the main balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    //Update the main balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //Set the main balance
    balanceTotalElement.innerText = currentBalanceTotal


    //Clear the deposit field
    depositField.value = '';

})