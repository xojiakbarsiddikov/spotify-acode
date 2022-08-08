<template>
  <div class="home">
    <nav-bar />
    <v-header />
  </div>
  <div>
    <v-music-card />
    <VPosts />
    <vCatalog />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VHeader from "@/components/vHeader";
import VMusicCard from "@/components/vMusic";
import VPosts from "@/components/vPosts";
import vCatalog from "@/components/vCatalog";

export default {
  name: 'HomeView',
  components: {
    VPosts,
    VMusicCard,
    VHeader,
    NavBar,
    vCatalog
  }
}
</script>
<style scoped>
 .home {
   display: flex;
 }
</style>
