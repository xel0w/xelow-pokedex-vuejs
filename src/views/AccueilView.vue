<template>
  <div class="accueil">
    <AccueilSiteVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilSiteVue from '@/components/AccueilSite.vue'

export default {
  name: 'AccueilView',
  components: {
    AccueilSiteVue
  }
}
</script>