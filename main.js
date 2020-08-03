const apiData = {
	url: 'https://pokeapi.co/api/v2/',
	type: 'pokemon',
	id: '333',
}
const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

//Fetch Data from API //
fetch(apiUrl)
	.then( (data) => {
			if(data.ok){
				return data.json()
			}
			throw new Error('Response failed m(-_-)m');
	})
	
	
	.then( (pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
	console.log(data)

const html = `
	<div class="name">${data.name}</div>
	<img class="avatar" src=${data.sprites.other.dream_world.front_default}>
	<div class="details">
		<span class="spec">Height: ${data.height}</span>
		<span class="spec">Weight: ${data.weight}</span>
	</div>`

const pokemonDiv = document.querySelector('.pokemon')
	pokemonDiv.innerHTML = html}