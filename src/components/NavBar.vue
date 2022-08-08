<template>
 <div class="container">
   <div class="text">
     <ul class="ul-wrapper color-white cursor">
       <li class="padding-dotted">&#x2022; &#x2022; &#x2022;</li>
       <li class="li-flex">
         <i class="fa-solid fa-house"></i>
         <router-link :to="'/'" class="link"><p>{{main}}</p></router-link>
       </li>
       <li class="li-flex">
         <i class="fa-solid fa-magnifying-glass"></i>
         <p>{{search}}</p>
       </li>
       <li class="li-flex">
         <i class="fa-brands fa-atlassian"></i>
         <p>{{method}}</p>
       </li>
     </ul>
   </div>
   <div>
     <v-create class="color-white"/>
   </div>
 </div>
</template>

<script>
import vCreate from "@/components/vCreate";
export default {
name: "NavBar",
  data() {
   return {
     main: "Главная",
     search: "Поиск",
     method: "Моя методика"
   }
  },
  components: {
    vCreate
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.link {
  text-decoration: none;
}
 ul li {
   list-style: none;
   padding: 20px 0;
   font-size: 17px;
 }
 .container {
   background: #000;
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   width: 12%;
   height: 100vh;
 }
 .text{
   padding: 20px 20px;
 }
 .padding-dotted {
   padding: 0 0!important;
 }
 .color-white {
   color: #fff;
 }
 .li-flex{
   display: flex;
   opacity: 0.8;
 }
 .li-flex p {
   font-weight: 400;
   margin: 0 22px;
   text-decoration: none;
   color: #ffffff;
   font-size: 15px;
 }
 .li-flex:hover {
   transition: 0.2s ease-in-out;
   opacity: 1;
 }
i {
  font-size: 21px;
}

.cursor {
  cursor: pointer;
}
</style>