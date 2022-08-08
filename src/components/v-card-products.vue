<template>
  <div>
    <vHeader style="background: #a07520;!important; width: 90%!important;"/>
    <NavBar />
  </div>
 <div class="container-album">
   <div class="content" v-for="album in albums" :key="album.id">
     <div class="content-wrapper">
       <div class="img">
         <img :src="require(`../assets/img/${album.img}`)">
       </div>
       <div class="text">
         <h4>{{album.description}}</h4>
         <h1>{{album.title}}</h1>
         <div class="flex-img">
           <img :src="require(`../assets/img/${album.img}`)">
           <div class="ul-main">
             <ul>
               <li>{{album.li}}</li>
               <li>{{album.li2}}</li>
               <li>{{album.li3}}</li>
               <li>{{album.li4}}</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="audion-container">
     <v_audio />
   </div>
 </div>
</template>

<script>
import v_audio from "@/components/v-audio"
import axios from "axios";
import vHeader from "@/components/vHeader";
import NavBar from "@/components/NavBar";
export default {
name: "vAlbum",
  data() {
    return {
      albums: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/album')
        .then(response => (this.albums = response.data))
  },
  components: {
    v_audio,
    vHeader,
    NavBar,
  }
}
</script>

<style scoped>
 .container-album {
   background: #a07520;
 }
 .img img {
   height: 393px;
   padding: 80px 0;
 }
 .text h1 {
   font-size: 80px;
   padding: 25px 0;
 }
 .text h4 {
   font-size: 15px;
 }
 .content {
   display: flex;
   justify-content: center;
   max-width: 89%;
   margin: 20px 0;
 }
 .flex-img img {
   width: 30px;
   height: 30px;
   border-radius: 50px;
 }
 ul {
   display: flex;
 }
 ul li {
   padding: 0 5px;
   list-style: none;
   color: #fff;
 }
 .flex-img {
   display: flex;
   align-items: center;
 }
 .text {
   color: #fff;
   margin: 20px;
 }
 .content-wrapper {
   display: flex;
   align-items: center;
 }
 .audion-container {
   display: flex;
   justify-content: end;
   max-width: 100%;
   background: #101010;
   padding: 27px 0;
 }
</style>