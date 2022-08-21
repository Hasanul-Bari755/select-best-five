document.getElementById('calculate-btn'),addEventListener('click',function(){
    if(isNaN(getInputValueById('player'))){
        
        return;
    }
    const totalPlayerCostValue = totalPlayerCost();
    setTextValueById('expences',totalPlayerCostValue);
})