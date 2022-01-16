let order = [];

const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

const numbers_pokemon = 898;

for(let i = 1; i <= numbers_pokemon; i++){
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then(function(response){
        return response.json();
    })
    .then(function(pokemon){
        order.push(pokemon);
        order = sort_pokemon(order);
        if (i === numbers_pokemon) {
            show(order);
        };
    });      
};
var div = document.querySelector("#allpokemon");

console.log(order);

document.querySelector('#all_types').addEventListener('change', () => {
    let pokemon_show = document.querySelectorAll('.pokemon');
    let select_value = document.querySelector('#all_types').value;
    pokemon_show.forEach( pokemon => {
        if ( pokemon.className.includes(select_value) === false ) {
            pokemon.style.display = 'none';
        } else {
            pokemon.style.display = 'block';
        };
    });
});

function show(list) {
    list.forEach(pokemon => {
        var creatediv = document.createElement("div");
        creatediv.classList.add("pokemon");
        creatediv.classList.add(pokemon.types[0].type.name);
    
        var title = document.createElement("h2");
        title.appendChild(document.createTextNode(pokemon.name));
    
        var img = document.createElement("img");
        img.src = pokemon.sprites.front_default;
    
        var type = document.createElement("p");
        type.appendChild(document.createTextNode("Type : " + pokemon.types[0].type.name));
        type.classList.add("type");
    
        var heightweightdiv = document.createElement("div");
        var height = document.createElement("p");
        height.appendChild(document.createTextNode("Height : " + pokemon.height));
        var weight = document.createElement("p");
        weight.appendChild(document.createTextNode("Weight : " + pokemon.weight));
        heightweightdiv.appendChild(height);
        heightweightdiv.appendChild(weight);
        heightweightdiv.classList.add("heightweight");


        creatediv.addEventListener("mouseover", () => {
            subtitle.style.display='block';
            statsdiv.style.display='grid';
        })

        creatediv.addEventListener("mouseout", () => {
            subtitle.style.display='none';
            statsdiv.style.display='none';
        })

            var subtitle = document.createElement("h3");
            subtitle.appendChild(document.createTextNode("Stats :"));
            subtitle.classList.add("subtitle");

            var statsdiv = document.createElement("div");
            statsdiv.classList.add("stats");
            var hp = document.createElement("p");
            hp.appendChild(document.createTextNode("Hp : " + pokemon.stats[0].base_stat));
            var attack = document.createElement("p");
            attack.appendChild(document.createTextNode("Attack : " + pokemon.stats[1].base_stat));
            var defense = document.createElement("p");
            defense.appendChild(document.createTextNode("Defense : " + pokemon.stats[2].base_stat));
            var special_attack = document.createElement("p");
            special_attack.appendChild(document.createTextNode("Special Attack : " + pokemon.stats[3].base_stat));
            var special_defense = document.createElement("p");
            special_defense.appendChild(document.createTextNode("Special Defense : " + pokemon.stats[4].base_stat));
            var speed = document.createElement("p");
            speed.appendChild(document.createTextNode("Speed : " + pokemon.stats[5].base_stat));
            statsdiv.appendChild(hp);
            statsdiv.appendChild(attack);
            statsdiv.appendChild(defense);
            statsdiv.appendChild(special_attack);
            statsdiv.appendChild(special_defense);
            statsdiv.appendChild(speed);
    
        creatediv.appendChild(title);
        creatediv.appendChild(img);
        creatediv.appendChild(type);
        creatediv.appendChild(heightweightdiv);
        creatediv.appendChild(subtitle);
        creatediv.appendChild(statsdiv);
        div.appendChild(creatediv);
    
        const color = colors[pokemon.types[0].type.name];
        creatediv.style.backgroundColor = color;
    });
}


function sort_pokemon(list) {
    list.sort((a,b) => a.id - b.id);
    return list;
}




/*
let fire_btn = document.getElementsById("fire");
let water_btn = document.getElementsById("water");
let grass_btn = document.getElementsById("grass");
let bug_btn = document.getElementsById("bug");
let poison_btn = document.getElementsById("poison");
let normal_btn = document.getElementsById("normal");
let electric_btn = document.getElementsId("electric");
let fairy_btn = document.getElementsById("fairy");
let ground_btn = document.getElementsById("ground");

fire_btn.addEventListener("click", ()=>{
    let button_value = this.value;
    btn_function(button_value);
})

function btn_function(value) {
    let pokemon_show = document.querySelectorAll(".pokemon");
    console.log(pokemon_show);
}
*/
/*
var all_buttons = document.getElementsByClassName("type_button");

var filter_type = document.getElementsByClassName("type");


for(let i = 0; i >7; i++) {
    all_buttons[i].addEventListener("click", ()=>{
        if(all_buttons[i].value === 'fire') {
            
        }
    })
}
*/




document.getElementById("button").addEventListener("click", ()=>{
    window.alert('Wow ! Bravo ! Vous savez cliquer sur un bouton !')
})