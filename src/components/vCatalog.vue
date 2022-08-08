<template>
 <div class="catalog-container">
   <div class="posts-card posts">
     <div class="text-wrapper">
       <h1>{{music}}</h1>
     </div>
   </div>
   <div class="posts">
     <div class="container-posts"  v-for="post in posts" :key="post.id">
       <div class="content">
         <div class="img">
           <img :src="require(`../assets/img/${post.img}`)">
         </div>
         <div class="text">
           <h1>{{post.title}}</h1>
           <p>{{post.description}}</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vCatalog",
  data() {
    return {
      music: 'Послушай сегодня',
      posts: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/catalog')
        .then(response => (this.posts = response.data))
  }
}
</script>

<style scoped>
 .catalog-container{
   background: #101010;
   padding: 40px 0;
 }
 .content {
   width: 245px;
   background: #181818;
   padding: 27px;
 }
 .content:hover{
   transition: .3s ease-in-out;
   background: #5d5a5a;
   border-radius: 5px;
 }
 .text-wrapper h1 {
   color: #ffffff;
   padding: 30px 0;
 }
 .posts-card {
   max-width: 65%!important;
 }
 .posts {
   display: flex;
   max-width: 67%;
   margin: 0 auto;
 }
 .img img {
   width: 190px;
   height: 199px;
   border-radius: 5px;
 }
 .text {
   color: #ffffff;
 }
 .container-posts {
   display: flex;
   justify-content: center;
   max-width: 49%;
   margin: 0 18px;
 }
 .text h1 {
   font-size: 18px;
   padding: 22px 0;
 }
 p {
   font-size: 15px;
   opacity: .5;
 }
 p:hover {
   text-decoration: underline;
   transition: .2s ease-in-out;
   cursor: pointer;
 }
</style>