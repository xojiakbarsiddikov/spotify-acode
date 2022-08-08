import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import vPage from "../components/v-page.vue";
import album_miyagi from '../components/album-miyagi.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/v-page/1',
    name: 'vPage',
    component: vPage
  },
  {
    path: '/v-page/1',
    name: 'AlbumMiyagi',
    component: vPage
  },
  {
    path: '/v-page/2',
    name: 'album_miyagi',
    component: album_miyagi
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
