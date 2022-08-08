<template>
 <div class="container">
  <div class="text">
    <h1>{{ good_morning }}</h1>
  </div>
   <vCard />
 </div>
</template>

<script>
import vCard from "@/components/vCard";
export default {
  name: "vMusicCard",
  data() {
    return {
      good_morning: 'Доброе утро'
    }
  },
  components: {
    vCard
  }
}
</script>

<style scoped>
  .text h1 {
    font-size: 36px;
    color: #ffffff;
  }
  .container {
    background: #101010;
  }
  .text {
    display: flex;
    justify-content: center;
    max-width: 47%;
    align-items: center;
    height: 22vh;
  }
</style>