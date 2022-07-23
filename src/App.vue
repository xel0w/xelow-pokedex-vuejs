<template>
  <div class="app">
    <header>
        <div class="logo">
            <img src="./assets/img/logo.png" alt="logo pokemon" id="logopokemon"/>
        </div>
        <div class="menu">
            <router-link to="/" class="menuLink">Accueil</router-link>
            <router-link to="/pokemon" class="menuLink">Pokédex</router-link>
        </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
* {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}
@font-face {
    font-family: "Pokemon";
    src: url("./assets/font/Pokemon.ttf");
}
header {
    height: 10vh;
    background-image: linear-gradient(
        to bottom,
        #858585,
        #757575,
        #656565,
        #555555,
        #464646
    );
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.app{
  background-color: lightgray;
  font-family: Pokemon;
  min-height: 100vh;
}
#logopokemon{
  width: 100%;
  height: 100%;
}
.logo{
  width: 12rem;
}
.menu{
  width: 40%;
  margin-right: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: x-large;
  color: white;
  font-family: Pokemon;
}
.menuLink{
  cursor: pointer;
  text-decoration: none;
  color: white;
}
.menuLink:hover{
  color: red;
  text-decoration: none;
}
@media screen and (max-width: 700px) {
    #logopokemon{
  width: 100%;
  height: 50%;
}
.logo{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu{
  width: 60%;
  font-size: medium;
}
    }
</style>
