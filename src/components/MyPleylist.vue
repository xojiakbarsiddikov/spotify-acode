<template>
  <div class="container_audio">
    <div class="audio-ul" v-for="audio in audios" :key="audio.id">
      <div class="ul_1">
        <ul class="justify ul_hover">
          <div class="flex">
            <li class="opacity_2 play-start_2" v-if="play">
              {{audio.id}}
            </li>
            <li class="li">
              <h4 :class="{green: toggle}">{{audio.title}}</h4>
              <p class="opacity_2">{{audio.li}}</p>
            </li>
          </div>
          <div class="play  margin">
            <i class="fa-solid fa-play" v-if="inshow" @click="color() + playSound(`${audio.url}`)"></i>
            <i  v-if="pause" @click="Pause" class="color_white">{{audio.speed}}</i>
          </div>
          <div class="ul-li">
            <li>{{audio.number}}</li>
          </div>
          <li>{{audio.second}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
name: "MyPleylist",
  data() {
    return {
      play: true,
      audios: [],
      onshow: false,
      inshow: true,
      pause: false,
      ids: [],
      toggle: false
    }
  },
  methods: {
    playSound(sound) {
      if (sound) {
        this.audio = new Audio(sound);
        this.audio.play();
        this.pause = true
        this.inshow = false
        this.play = true
      }
    },
    color() {
      this.toggle = true
    },
    Pause() {
      this.pause = false
      this.inshow = true
      if(this.audio.play()) {
        this.play = true
        this.pause = false
        if(this.audio.pause()) {
          this.pause = false
          this.play = true
          this.inshow = true
          this.audio.pause()
        }
      }
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/audios')
        .then(response => (this.audios = response.data))
  }
}
</script>

<style scoped>
.play{
  background: #32f832;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  opacity: 1!important;
}
.color_white {
  color: #ffffff;
  font-size: 17px;
}
.green {
  color: #32f832!important;
}
.container_audio {
  margin: 30px 0;
}
.fa-play {
  color: #000000!important;
  font-size: 15px;
}
.ul-li li {
  width: 102px;
}
.margin_2 {
  margin: 0 38px;
}
.fa-pause{
  color: #ffffff!important;
}
.fa-pause{
  color: #ffffff;
  font-size: 20px;
}
.color {
  color: red!important;
}
.size {
  font-size: 18px!important;
}
.ul_hover {
  padding: 5px 25px;
  border-radius: 6px;
}
.dn {
  display: none;
}
.db {
  display: block;
}
.ul_1 {
  cursor: pointer;
}
.ul_1 ul:hover {
  transition: .1s ease-in-out;
  background: #373636;
}
.margin:hover {
  opacity: 1!important;
  transition: .2s ease-in-out;
}
.flex {
  display: inherit;
  align-items: center;
  width: 22%;
}
.ul-wrapper {
  display: flex;
  margin: 0 26px;
  width: 18%;
}
.background_color {
  background: #626161!important;
}
ul li {
  list-style: none;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.js {
  font-size: 31px;
}
ul {
  display: flex;
  align-items: center;
}
.justify {
  justify-content: space-between;
  max-width: 99%;
}
.opacity{
  opacity: .5;
}
.download {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 3px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-start {
  display: flex;
  align-items: center;
}
.margin {
  margin: 0 20px;
  opacity: .8;
  color: #ffffff;
  cursor: pointer;
}
section {
  width: 87%;
}
.audio {
  margin: 50px 0;
}
.border-top {
  border-bottom: 1px solid #fff;
  padding: 13px 0;
  width: 97%;
  margin: 0 auto;
}
.li h4{
  padding: 10px 0;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-align: start;
}
.li p{
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-align: start;
}
.opacity_2 {
  opacity: .6;
}
.li {
  margin: 0 27px;
}
.audio-ul {
  margin: 10px 3px;
  align-items: center;
  justify-content: space-between;
}
</style>