const playerArray = [];

function display(arr){
    const addPlase= document.getElementById('addPlayer');
    addPlase.innerHTML = "";
   for(let i = 0; i<arr.length; i++){
      const playerName = arr[i].playerName;
      const ol = document.createElement('ol');

      ol.innerHTML = `
      <li>${i+1}. ${playerName}</li>
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
    
}