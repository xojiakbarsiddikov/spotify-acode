<template>
 <header>
   <vLeft_Right />
   <div class="btn-wrapper">
     <MyButton/>
     <div class="flex-btn">
       <button class="btn">
         <div class="btn-content color-white">
         <span class="btn-img">
         <i class="fa-solid fa-user"></i>
       </span>
           <p>{{user_name}}</p>
           <i class="fa-solid fa-angle-down"></i>
           <i class="fa-solid fa-chevron-up"></i>
         </div>
       </button>
     </div>
   </div>
   <div class="img">
     <img src="../assets/logo.png" alt="vue-logo">
     <img src="../assets/img/spotify.png" alt="spotify-logo" style="margin: 0 15px;">
   </div>
  <MySelect id="MySelect"/>
 </header>
</template>

<script>
import vLeft_Right from "@/components/header-page/vLeft-Right";
import MyButton from "@/components/header-page/MyButton";
import MySelect from "@/components/MySelect";
export default {
name: "vHeader",
  data() {
    return {
      user_name: 'user_name'
    }
  },
  components: {
    vLeft_Right,
    MyButton,
    MySelect,
  },
  mounted() {
    let myselect = document.getElementById('MySelect')
    let bottom = document.querySelector('.fa-angle-down')
    let top = document.querySelector('.fa-chevron-up')
    myselect.style.display = 'none'
    top.style.display = 'none'
    bottom.addEventListener('click', () => {
      bottom.style.display = 'none'
      top.style.display = 'block'
      myselect.style.display = 'block'
    })
    top.addEventListener('click', () => {
      bottom.style.display = 'block'
      top.style.display = 'none'
      myselect.style.display = 'none'
    })
  }
}
</script>

<style scoped>
  header {
    background: #101010;
    width: 87%;
    height: 8vh;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
  }
  img {
    width: 30px;
    height: 30px;
  }
  i {
    font-size: 16px;
  }
  .btn-wrapper {
    display: flex;
  }
  .btn-wrapper button {
    width: 158px;
    padding: 8px 0;
    background: transparent;
    border-radius: 20px;
    border: 1px solid #ffff;
  }
  .color-white {
    color: #ffffff!important;
  }
  .btn-img {
    width: 34px;
    border-radius: 20px;
    color: #fff;
  }
  .btn-content {
    display: flex;
    align-items: center;
  }
  .btn-content p {
    margin: 0 10px;
  }
  .flex-btn {
    margin: 0 22px;
  }
</style>