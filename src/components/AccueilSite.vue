<template>
    <div class="accueil">
      <h1>Bienvenue jeune dresseur Pokémon</h1>
      <img src="../assets/img/red.png" alt="red">
      <h2>Une grande déstinée t'attends</h2>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .accueil{
      width: 100%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .accueil img{
      width: 10%;
    }
    @media screen and (max-width: 700px) {
      .accueil img{
        width: 20%;
      }
      h2{
        text-align: center;
      }
    }
</style>