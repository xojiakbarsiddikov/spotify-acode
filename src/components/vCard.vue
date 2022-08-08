<template>
  <div class="container-card">
    <div class="card">
      <div class="card-content" v-for="card in cards" :key="card.id">
        <div class="main">
          <div class="img">
            <img :src="require(`../assets/img/${card.img}`)">
          </div>
          <div class="text">
            <h1>{{card.title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "vCrad",
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/music-cards')
      .then(response => (this.cards = response.data))
  }
}
</script>

<style scoped>
  .main {
    width: 462px;
    height: 102px;
    background: #1e1e1e;
    display: flex;
    border-radius: 5px;
  }
  .container-card {
    display: flex;
    justify-content: end;
    max-width: 95.5%;
  }
  .main:hover{
    transition: .3s ease-in-out;
    background: #5d5a5a;
    border-radius: 5px;
  }
  .img img {
    width: 97px;
    height: 102px;
  }
  .text {
    display: flex;
    align-items: center;
  }
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 52px;
    row-gap: 29px
  }
  .text {
    margin: 0 20px;
  }
  .text h1 {
    font-size: 19px;
    color: #ffffff;
    font-weight: 400;
  }
</style>