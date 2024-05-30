import { useState } from 'react'
import './App.css'
function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done!"
}
function App() {
  
  let globalId = 1;
    
  

  function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandParent = document.createElement("div");
    firstGrandParent.innerHTML = title;
    const secondGrandParent = document.createElement("div");
    secondGrandParent.innerHTML = description;
    const thirdGrandParent = document.createElement("button");
    thirdGrandParent.innerHTML = "Mark as done";
   thirdGrandParent.addEventListener("click", () => markAsDone(id));
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGrandParent)
    child.setAttribute("id", id);
    return child;
  }
  
  function updateDomAcctostate(state){
      const parent= document.getElementById("container");
      parent.innerHTML="";
      for(let i=0;i<state.length;i++){
          const child=createChild(state[i].title,state[i].description,state[i].id);
          parent.appendChild(child);
      }
  }
  
  window.setInterval(async ()=>{
      const res=await fetch("https://sum-server.100xdevs.com/todos");
      const json=await res.json();
      updateDomAcctostate(json.todos)
  },2000)




  return (
    <div>
    
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      
    
      <div id="container">
    
      </div>
      
       
      
        
      </div>
     
   
  )
}

export default App
