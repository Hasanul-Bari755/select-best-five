function getInputValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputValue =parseFloat(inputFieldString);
  //inputField.value = "";

  return inputValue;
}

function setTextValueById(elementId,value){
   const elementField = document.getElementById(elementId);
   elementField.innerText = value;
}

function getTextValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldValueString =  elementField.innerText;
    const elementValue = parseFloat(elementFieldValueString);
    return elementValue;
}

function totalPlayerCost(){
    const playerCost = getInputValueById('player');
    return playerCost * playerArray.length;
    
}

