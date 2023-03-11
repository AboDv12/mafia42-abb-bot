const addBot = document.getElementById('add');

addBot.onclick=function (){
  let timer = 0;
  
  function addSceond() {
    timer += 1
  if(timer===2){
    window.location.href='https://discord.com/api/oauth2/authorize?client_id=1075387642843234374&permissions=8&scope=bot'
  }
    
  }
  setInterval(addSceond, 1000);
  
}