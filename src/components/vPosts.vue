<template>
 <div class="text-wrapper">
   <div class="text">
     <h1>{{similar}}</h1>
   </div>
   <div class="post">
     <vPost />
   </div>
 </div>
</template>

<script>
import vPost from '@/components/PostCards'
export default {
  name: "vPosts",
  data() {
    return {
      similar: "Похожие на MiyaGi&Эндшпиль"
    }
  },
  components: {
    vPost
  }
}
</script>

<style scoped>
 .text-wrapper{
   width: 100%;
   background: #101010;
 }
 .text h1 {
   text-align: center;
   color: #ffff;
 }
 .text {
   max-width: 60.5%;
   padding: 63px 0;
 }
</style>