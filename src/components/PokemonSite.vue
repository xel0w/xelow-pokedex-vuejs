<template>
    <h1><img src="../../public/favicon.png" alt="pokeball"> POKEDEX <img src="../../public/favicon.png" alt="pokeball"></h1>
      <div class="search">
        <input type="texte" name="search" id="searchbar" v-model="recherche" v-on:keyup="rech()"  placeholder="Saisissez un pokémon ici ...">
        <button v-on:click="rech()" class="btnMobile">Rechercher</button>
      </div>
    <div class="pokemonListe" v-if="recherche == null || recherche == ''">
        <div
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            class="card"
            style="width: 18rem"
        >
            <img
                class="card-img-top"
                :src="imagePokemon + pokemon.url.split('/')[6] + '.png'"
                alt="Card image cap"
            />
            <div class="card-body">
                <h4 class="card-title">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</h4>
                <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    :data-target="'#'+pokemon.name"
                    v-on:click="pokeSpec(pokemon.url.split('/')[6])"
                >
                    Details
                </button>
            </div>
        <div
            class="modal fade"
            :id="pokemon.name"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">
                            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }} <span id="sousTitre">({{pokeSpeNameFr}})</span>
                        </h3>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                      <img
                          class="modal-img"
                          :src="pokeSpeImgFront"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgBack"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgFrontShiny"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgBackShiny"
                          alt="Modal image cap"
                      />
                      <p><span class="titre">Numero: </span>{{pokeSpeId}} /151</p>
                      <p ><span class="titre">Type: </span><span v-for=" types in pokeSpeType" :key="types">{{types.type.name.charAt(0).toUpperCase()+types.type.name.slice(1) + " "}}</span></p>
                      <p><span class="titre">Taille: </span>{{pokeSpeTaille}} m</p>
                      <p><span class="titre">Poids: </span>{{pokeSpePoids}} kg</p>
                      <p><span class="titre">Description: </span>{{pokeSpeDesc}}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- SI RECHERCHE -->

    <div class="pokemonListe" v-else>
        <div
            v-for="pokemon in pokemonRecherche"
            :key="pokemon.id"
            class="card"
            style="width: 18rem"
        >
            <img
                class="card-img-top"
                :src="imagePokemon + pokemon.url.split('/')[6] + '.png'"
                alt="Card image cap"
            />
            <div class="card-body">
                <h4 class="card-title">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</h4>
                <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    :data-target="'#'+pokemon.name"
                    v-on:click="pokeSpec(pokemon.url.split('/')[6])"
                >
                    Details
                </button>
            </div>
        <div
            class="modal fade"
            :id="pokemon.name"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">
                            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }} <span id="sousTitre">({{pokeSpeNameFr}})</span>
                        </h3>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                      <img
                          class="modal-img"
                          :src="pokeSpeImgFront"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgBack"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgFrontShiny"
                          alt="Modal image cap"
                      />
                      <img
                          class="modal-img"
                          :src="pokeSpeImgBackShiny"
                          alt="Modal image cap"
                      />
                      <p><span class="titre">Numero: </span>{{pokeSpeId}} /151</p>
                      <p ><span class="titre">Type: </span><span v-for=" types in pokeSpeType" :key="types">{{types.type.name.charAt(0).toUpperCase()+types.type.name.slice(1) + " "}}</span></p>
                      <p><span class="titre">Taille: </span>{{pokeSpeTaille}} m</p>
                      <p><span class="titre">Poids: </span>{{pokeSpePoids}} kg</p>
                      <p><span class="titre">Description: </span>{{pokeSpeDesc}}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            pokemons: [],
            imagePokemon:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
            pokeSpe: null,
            pokeSpeImgFront:null,
            pokeSpeImgBack:null,
            pokeSpeImgFrontShiny:null,
            pokeSpeImgBackShiny:null,
            pokeSpeId:null,
            pokeSpeType:null,
            pokeSpePoids:null,
            pokeSpeTaille:null,
            pokeSpeDesc:null,
            pokeSpeNameFr:null,
            recherche:null,
            pokemonRecherche:null
        };
    },
    mounted() {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => {
                this.pokemons = response.data.results;
            });
    },
    methods:{
    pokeSpec(id){
      console.log(id);
      axios
      .get("https://pokeapi.co/api/v2/pokemon/"+id)
      .then((response)=>{
        this.pokeSpe = response.data;
        this.pokeSpeImgFront = response.data.sprites.front_default;
        this.pokeSpeImgBack = response.data.sprites.back_default;
        this.pokeSpeImgFrontShiny = response.data.sprites.front_shiny;
        this.pokeSpeImgBackShiny = response.data.sprites.back_shiny;
        this.pokeSpeId = response.data.id;
        this.pokeSpeType = response.data.types;
        this.pokeSpeTaille = response.data.height/10;
        this.pokeSpePoids = response.data.weight/10;
      })
      axios
      .get("https://pokeapi.co/api/v2/pokemon-species/"+id)
      .then((response)=>{
        console.log(response);
        this.pokeSpeDesc = response.data.flavor_text_entries[16].flavor_text;
        this.pokeSpeNameFr = response.data.names[4].name;
      })
    },
    rech(){
      this.pokemonRecherche = this.pokemons.filter((a)=>a.name.toLocaleLowerCase().includes(this.recherche))
    }
    }
};
</script>
<style>
h1 {
    margin-top: 2%;
    margin-bottom: 2%;
    font-family: Pokemon;
    text-align: center;
}
.pokemonListe {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card {
    border: 3px solid black;
    border-radius: 0%;
    margin: 1%;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
}
.card-body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#sousTitre{
  font-size: medium;
  color: grey;
}
.titre{
  font-size: large;
  font-weight: 600;
}
.search{
  width: 100%;
  display: flex;
  justify-content: center;

}
.search input{
  box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
  height: 7vh;
  font-size: larger;
}
#searchbar{
  padding-left: 1%;
  border: 4px black solid;
}
h1 img{
  width: 30px;
}
.btn{
  border: 4px black solid;
  border-radius: 0%;
}
.btn:hover{
  background-color: green;
  color: white;
}
.btnMobile{
  width: fit-content;
  border: 3px black solid;
  padding: 0 1%;
  margin-left: 2%;
  cursor: pointer;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
}
.btnMobile:hover{
  background-color: green;
  color: white;
}
@media screen and (max-width: 700px) {
  #searchbar{
    width: 90%;
  }
  h1 {
    font-size: x-large;
  }
  .btnMobile{
  width: fit-content;
  border: 3px black solid;
  padding: 1%;
  margin: 2% 0;
}
.search{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
}
</style>
