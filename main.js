const card = document.querySelector("#card");
const btn = document.querySelector("#btn");
const url = "https://pokeapi.co/api/v2/pokemon/";


let getPoke = () => {
  let pokeRandom = Math.floor(Math.random() * 150) + 1;
  let finalPoke = url + pokeRandom;
  fetch(finalPoke)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    generateCard(data);
  })
}

let generateCard = (data) => {
  let imagePoke = data.sprites.other.dream_world.front_default;
  let hp = data.stats[0].base_stat;
  let namePoke = data.name;
  let attack = data.stats[1].base_stat;
  let defend = data.stats[2].base_stat;
  let speed = data.stats[5].base_stat;
  
  card.innerHTML = `
  <div class="hp">
        <p>
          <span>${hp} Hp</span>
        </p>
      </div>
      <div class="images">
        <img src="${imagePoke}" alt="">
        <h3>${namePoke}</h3>
      </div>
      <div class="types">
        
      </div>
      <div class="power">
        <div class="attack">
          <h2>${attack}</h2>
          <p>Attack</p>
        </div>
         <div class="defense">
          <h2>${defend}</h2>
          <p>Defense</p>
        </div>
         <div class="speed">
           <h2>${speed}</h2>
           <p>Speed</p>
         </div>
      </div>
  `;
  typesCard(data.types);
}

let typesCard = (types) => {
  
  types.forEach(type => {
    
    
  let typ = document.querySelector(".types")
  let span = document.createElement("span");
  span.textContent = type.type.name;
  typ.appendChild(span)
  })
 
}

btn.addEventListener("click",getPoke);
window.addEventListener("load",getPoke)
