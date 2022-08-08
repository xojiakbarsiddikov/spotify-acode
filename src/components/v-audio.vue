<template>
 <section>
   <div class="content" >
     <div class="start-wrapper">
       <div class="flex-start">
         <div class="play  margin">
           <i class="fa-solid fa-play" v-if="inshow" @click="playSound('https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3')"></i>
           <i  v-if="pause" @click="Pause" class="color_white">⏸</i>
         </div>
         <div class="like margin">
           <i class="fa-solid fa-heart js"></i>
         </div>
         <div class="download margin">
           <i class="fa-solid fa-arrow-down-long"></i>
         </div>
         <div class="dotted margin">
           <span>&#x2022; &#x2022; &#x2022;</span>
         </div>
       </div>
       <div class="search">
           <i class="fa-solid fa-magnifying-glass div1"></i>
         <input type="text" placeholder="search" v-model="search" class="" />
       </div>
     </div>
     <div class="audio" v-for="album in albums" :key="album.id">
       <div class="text">
         <div class="flex-box">
           <ul class="opacity justify">
             <div class="ul-wrapper">
               <li>{{album.name}}</li>
               <li style="padding: 0 25px;">{{album.ul}}</li>
             </div>
             <li>{{album.start}}</li>
             <li>{{album.music}}</li>
             <li class="margin_2"><i class="fa-solid fa-clock"></i></li>
           </ul>
         </div>
         <div class="border-top"></div>
         <div class="container_audio">
           <div class="audio-ul" v-for="audio in filteredPosts" :key="audio.id">
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
                   <i class="fa-solid fa-play" v-if="inshow" @click="color +playSound(`${audio.url}`)"></i>
                   <i  v-if="pause" @click.p="Pause" class="color_white">{{audio.speed}}</i>
                 </div>
                 <div class="ul-li">
                   <li>{{audio.number}}</li>
                 </div>
                 <li>{{audio.second}}</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
import axios from "axios";
export default {
name: "v-audio",
  data() {
   return {
     albums: [],
     play: true,
     inshow: true,
     onshow: false,
     pause: false,
     toggle: false,
     audios: [],
     ids: [],
     change: false,
     search: ''
   }
  },
  methods: {
    playSound(sound) {
      if (sound) {
        this.audio = new Audio(sound);
        this.audio.play();
        this.pause = true
        this.inshow = false
      }
    },

    color() {
      this.toggle = true
    },
    Pause(e) {
      this.pause = false
      e.preventDefault()
      this.inshow = true
      this.audio.play()
        if(this.audio.pause()) {
          this.pause = false
          this.play = true
          this.inshow = true
          this.audio.play()
        }
    }
  },
  mounted() {
    let i = document.querySelector('.js')
    i.addEventListener('click', () => {
      i.classList.toggle('color')
    })

    axios
        .get('http://localhost:3000/album')
        .then(response => (this.albums = response.data))

    axios
        .get('http://localhost:3000/audios')
        .then(response => (this.audios = response.data))

  },
  computed: {
    filteredPosts() {
      return this.audios.filter(audio =>
          audio.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
 .start-wrapper {
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 89%;
 }
 .margin_2 {
   margin: 0 38px;
 }
 .fa-play,

 .fa-pause{
   color: #000000;
   font-size: 20px;
 }
 .color {
   color: red!important;
 }
 .size {
   font-size: 18px!important;
 }

 .background_2 {
   background: red;
 }

 .flex-box {
   display: flex;
   justify-content: space-between;
 }
 input
 {
   position:absolute;
   -webkit-transform:translate(-50%,-50%);
   width:20px;
   height:20px;
   border-style:none;
   border-radius:20px;
   padding: 19px;
   background-color:#081925;
   outline:none;
   transition-duration:500ms;
   cursor:pointer;
   background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAWpJREFUWEfNljFOxDAQRbehoKDnIjTcgYtwAHpOwhE4BA3Vig6Je9ABYZ60kZbVc5xkifRHelrleRzP2rGT3TAM0ahMQmUSKpNQmYTKJFQmoTIJlUmonMFlcV88FW/F5+GXazzt1m8xKjvcFh/FVNBOnvVfhMoJHorvgtgXzNZNcXX45RpPkEe+3Wc2KhswIwz6VTwWF4Xl4Wknj/yzZlKlwDM1LiuDW84p5BH0W/1MqhRYOoLla83cKeSNy01/y+miUmB3EksHGv8Y/a29i0qBI4RgI1h7C/IJ+lt7F5UC5xzBbrX2FuQT9Lf2LiqF+BmMfwbHgWJ3cfw5CEvfJD8FcVdY3ixUTrDkXTzGe3Fd2P26qOww92uGmaM4YnWRKmfAM8VssTs5QlrfgxR1VpEq/5mzilS5AauLVLkRq4pUuSHHRb4WlvMHlRtDkS/F85FrojIJlUmoTEJlEiqTUJmEyiRUJqEyh2H3Cz4WH1fC57RBAAAAAElFTkSuQmCC);
   background-repeat:no-repeat;
   font-size:15px;
   color:transparent;
   overflow:hidden;
 }
 input:focus
 {
   width:200px;
   cursor:text;
   padding-left:40px;
   color:#A0A0A0;
 }
 input:hover,input:focus
 {
   background-color:#FFFFFF;
   background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJTSURBVFiF7ZdNSxtRFIafM5PgJGqXxXy4DIziJhBdFLrwnyi4cym40S4ClkJ/g2B/Qv+BC0s3CtkIDWYZasWtXxEzebswQxGt3sk0Nou8cHfnPTycc+fOOSaJUZb3vwFe0hgwrcaAaTUGTKuRB8wMYrLZ2dxEd3rVPC2aqAoqBi0ZDfXs8DZzsad2++ZfAFrSP0m+NPdO4gtQeSasZcbK9c8f39PAQcIW50vzmxIHQEXQkGzdU2+pc6c3nnpLkq0LGkBF4iBfmt9MC+hcwX7lDgBhfOycTu5IR3ePElotGxSvthFbgJnxPlUlJb14KJdzQSE8CQqhgmJYd/EExbAeFEIFhfCEcjnn4nnqOLV4oju9Sr+tndPJHRdP53RyJ2533z+QnADN0yIAst2n2vqUpKM7ZLsP/EMDFFUAn+gwSfI4PvYPIidA9Z+U6641kySP4/X8k/Ss3CoILYB8RmGS5HF87B9EbhU0GgARfqK7FMfH/kHkBtiz+7tnWjOrZV08ZrUsprUH/mEB3mYu9oCWQTUoXm27eILi1bZBFWj1/cMDVLt9Y8YK0ENs5Upz9b9V0qyWzZXm6ogPAF6PjTSDQ6Jh4f5frE+AJ2gg2/WJDq+71sxnFEb4i5jW+pWL1fS7/vLl+fHZ0AHvId2mGa/HRs/jMxCmgUwMCO7z4NTbhZkoE+2ngRwIMInSQg595L88Pz7zu/4y0ATCKBPtT71dmHH1v8pOkgby1ZamR5DZ6KuL71W3uj+Q9k3SLxfP0D+StBr5vXgMmFZjwLQaA6bVyAP+BkJqfmMbSKF/AAAAAElFTkSuQmCC);
 }
 .div1
 {
   position:absolute;
   left:0px;
   top:45px;
   width:50px;
   height:5px;
 }

 .search {
   margin: 0 58px;
 }
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