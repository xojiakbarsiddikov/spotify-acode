<template>
 <div class="btn-wrapper">
   <div class="btn-main">
     <button class="color-white">{{ btn_title }}</button>
   </div>
 </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      btn_title: 'Сменить тариф',
    }
  }
}
</script>

<style scoped>
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
  .btn-content p {
    margin: 0 10px;
  }
  .btn-wrapper {
    display: flex;
  }
</style>