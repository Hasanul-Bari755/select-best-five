document.getElementById('calculate-btn').addEventListener('click',function(){
    if(isNaN(getInputValueById('player'))){
        alert('Please valid Input')
        return;
    }
    const totalPlayerCostValue = totalPlayerCost();
    setTextValueById('expences',totalPlayerCostValue);
})

document.getElementById('total-calculate').addEventListener('click',function(){
   
    const managerCost = getInputValueById('manager');
    const coachCost = getInputValueById('coach');
    if(isNaN(managerCost && coachCost && totalPlayerCost())){
        alert('Please valid input');
        return;
    }
    
    const totalPlayerExpence = totalPlayerCost();
    if(isNaN(totalPlayerExpence)){
        return;
    }
    const totalCost = managerCost + coachCost + totalPlayerExpence;
    setTextValueById('total',totalCost)
    
    
})