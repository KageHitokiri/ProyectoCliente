

window.addEventListener('load',()=>{
  
})

function combatInjection(){
  const element = document.getElementById("combat__menu");
  fetch("./combat.html").then(file => {
      file.text().then(content => {
          element.innerHTML = content;
      })
  })
}

function loginInjection(){
  const element = document.getElementById("changing__div");
  fetch("./login.html").then(file => {
      file.text().then(content => {
          element.innerHTML = content;
      })
  })
}

function createCharacterInjector(){
  const element = document.getElementById("changing__div");
  fetch("./createCharacter.html").then(file => {
      file.text().then(content => {
          element.innerHTML = content;
      })
  })
}

