<template>
 <div class="container">
   <div class="text">
     <ul class="ul-wrapper">
       <li class="dot-li">...</li>
       <li class="li-flex">
         <i class="fa-solid fa-house"></i>
         <p>Главная</p>
       </li>
       <li class="li-flex">
         <i class="fa-solid fa-magnifying-glass"></i>
         <p>Поиск</p>
       </li>
       <li class="li-flex">
         <i class="fa-brands fa-atlassian"></i>
         <p>Моя методика</p>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 ul li {
   list-style: none;
   padding: 20px 0;
   font-size: 17px;
 }
 .container {
   background: #000;
   max-width: 15%;
 }
 .text{
   padding: 5px 20px;
   color: #fff;
 }
 .li-flex{
   display: flex;
   opacity: 0.8;
   align-items: center;
 }
 .li-flex p {
   font-weight: 400;
   margin: 0 5px;
 }
 .li-flex:hover {
   transition: 0.3s ease-in-out;
   opacity: 1;
   cursor: pointer;
 }
</style>