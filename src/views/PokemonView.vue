<template>
  <div class="pokemon">
    <PokemonSiteVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonSiteVue from '@/components/PokemonSite.vue'

export default {
  name: 'PokemonView',
  components: {
    PokemonSiteVue
  }
}
</script>