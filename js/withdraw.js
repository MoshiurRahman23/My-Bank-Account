//step-1: Add Even handeler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
   //console.log('Sucessfully ');
   //step-2:
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdawAmountString = withdrawField.value ; 
   const newWithdrawAmount = parseFloat(newWithdawAmountString);
   //step-7:
   withdrawField.value = '';
   if(isNaN(newWithdrawAmount)){
      alert('Please provide a valid Number');
      return ; 
   }

   //step-3:Get the withdraw amount from the withraw field

   const WithdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = WithdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
   
   //step-5:
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      if( newWithdrawAmount > previousBalanceTotal){
         alert('You do not have sufficient Balance');
         return;
      }
   //step-4:
   const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
   WithdrawTotalElement.innerText = currentWithdrawTotal ;

   //step-6:
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;

   


})