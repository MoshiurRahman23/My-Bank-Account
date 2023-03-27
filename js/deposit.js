//step-1: add Event Listener to thr deposit button
document.getElementById('btn-Deposit').addEventListener('click', function(){
    //console.log('Moshiur Deposit 4444');

    //step-2: get the deposit amount from the deposit input field
    //for input field use the .value to the inside input field 
 
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);


    //Step-3: Get the current deposit total
    // for non-input (element other then input , textarea) use innerText to get text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    // step-4: Get the current Balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-5: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal ;


    //step-7: empty space
    depositField.value = '';
})