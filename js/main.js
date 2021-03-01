
document.querySelector('#button').addEventListener('click', getFetch)

class PokemonInfo {
    constructor(name, sprite, hp) {
        this.pokemonName = name
        this.pokemonSprite = sprite
        this.pokemonHealth = hp
    }
}

function randomOpponent() {
    let random = Math.floor(Math.random() * 150)
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`

    fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            const hp = data.stats[0].base_stat 
            const name = data.species.name 
            const sprite = data.sprites.front_default 
            let pokemonOpponent = new PokemonInfo(name, sprite, hp)
            console.log(pokemonOpponent)

            document.querySelector('#pokemonOName').innerText = pokemonOpponent.pokemonName
            document.querySelector('#pokemonOHealth').innerText = pokemonOpponent.pokemonHealth
            document.querySelector('#pokemonOImage').src = `${pokemonOpponent.pokemonSprite}`
            })
        .then(err => `error ${err}`)
}

randomOpponent()

function getFetch() {
    let endpoint = document.querySelector('#input').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const hp = data.stats[0].base_stat 
            const name = data.species.name 
            const sprite = data.sprites.back_default 

            let pokemonPlayer = new PokemonInfo(name, sprite, hp)
            document.querySelector('#pokemonPName').innerText = pokemonPlayer.pokemonName
            document.querySelector('#pokemonPHealth').innerText = pokemonPlayer.pokemonHealth
            document.querySelector('#pokemonPImage').src = `${pokemonPlayer.pokemonSprite}`
        })
        .then(err => `error ${err}`)
}

