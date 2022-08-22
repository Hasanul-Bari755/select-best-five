const playerArray = [];

function display(arr){
    if(arr.length > 5){
        arr.pop();
    }
    const addPlase= document.getElementById('addPlayer');
    addPlase.innerHTML = "";
   for(let i = 0; i<arr.length; i++){
     if(i === 5){
        break;
     }
     const playerName = arr[i].playerName;
     const ol = document.createElement('ol');

     ol.innerHTML = `
     <li class="text-2xl">${i+1}. ${playerName}</li>
     `;
     addPlase.appendChild(ol);
   }
  
} 

function addToplayer(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const playerObj = {
        playerName: playerName
    }
   
    playerArray.push(playerObj);
   
    display(playerArray);

    element.setAttribute("disabled", "disabled");
  
}

