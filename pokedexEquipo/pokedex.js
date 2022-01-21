
function buscar(){
    
    var numPokemon = document.getElementById("entrada").value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+ numPokemon )
    .then(respuesta => respuesta.json())
    .then(pokemon => {
    let name = document.getElementsByClassName('card-title')[0]
    name.innerHTML = `${pokemon.name}`
    let img = document.getElementById('image')
        img.innerHTML = `<img src="${pokemon.sprites.front_default}">`;
    let desc = document.getElementsByClassName('card-text')[0]
        desc.innerHTML = `ID : `+ pokemon.id + `<br>Altura : `+ pokemon.height/10 + ` m` + `<br>Peso : ` + pokemon.weight/10 + ` kg`;
    
    console.log(pokemon)
    })
    .catch(err=>console.log(err))
    }



    //     fetch('https://pokeapi.co/api/v2/pokemon/'+ numPokemon)
//     .then(respuesta => respuesta.json())
//     .then(pokemon => {
//         let element = document.getElementById('elemento')
//         element.innerHTML = `<p> Nombre: ${pokemon.name}<p><p> Pokedex ID: ${pokemon.id}<p>
//         <img src='${pokemon.sprites.front_default}'><img src='${pokemon.sprites.back_default}'><p>Tipo: ${pokemon.types[0].type.name}<p><p> Peso : ${pokemon.weight}<p>`;
//         console.log(pokemon)
//     })
//     .catch(err=>console.log(err))
// }
