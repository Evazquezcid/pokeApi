const mygallerypoke$$ = document.querySelector(".pokemon-gallery")

const pokeURL = "https://pokeapi.co/api/v2/pokemon"

const pokePerson = [];

const pokeDatos = async () => {


 
 for (let i = 1 ; i < 152; i++) {

 const pokeApi = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
 const pokeJSON =  await pokeApi.json();
 pokePerson.push(pokeJSON)


 const cardDivs$$ = document.createElement("div");
 const nomprePoke$$ = document.createElement("h2");
 const ordenpok$$e =  document.createElement("p");
 const img$$ = document.createElement("img"); 
 const abilitie$$ = document.createElement("h3")

 nomprePoke$$.innerText= pokeJSON.name;
 ordenpok$$e.innerText = pokeJSON.order;
 img$$.src = pokeJSON.sprites.other.dream_world.front_default;
 abilitie$$.innerText = pokeJSON.weight;
 cardDivs$$.classList.add("divPadre")
 

 mygallerypoke$$.appendChild(cardDivs$$)

 cardDivs$$.appendChild(nomprePoke$$)
 cardDivs$$.appendChild(ordenpok$$e)
 cardDivs$$.appendChild(img$$)
 cardDivs$$.appendChild(abilitie$$)


//  console.log(pokeJSON.sprites.other.dream_world.front_default);



 }



}

pokeDatos()
// console.log(pokePerson);

const buscar = () => {
 
  
 

 const arrayfiltrados= [];

  for (const pokeDato of pokeDatos) { 
    console.log(pokeDato.name,"pokedatos150");
    if (pokeDato.name.includes(nomprePoke$$)) {
        pokemonfiltro.push(pokeDatos)
    }
    return pokePerson

  }
 console.log(pokePerson);

// return pokemonfiltro
  // buscar(pokePerson)

}


const buscador = document.querySelector("#botonbusca");


buscador.addEventListener("click",buscar(pokePerson))
 console.log(buscar(pokePerson));