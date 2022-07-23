import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import PokemonView from '../views/PokemonView.vue'

const routes = [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: PokemonView
      }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  
export default router