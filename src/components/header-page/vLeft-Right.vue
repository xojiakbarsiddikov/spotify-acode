<template>
  <div class="left-right-wrapper">
    <div class="span-wrapper">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="span-wrapper margin">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
name: "vLeft-Right"
}
</script>

<style scoped>
.span-wrapper {
  background: #000000;
  color: #ffffff;
  border-radius: 50px;
  max-width: 33px;
  padding: 7px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa-solid {
  font-size: 24px;
}
.left-right-wrapper {
  display: flex;
  width: 46%;
}
.margin {
  margin: 0 25px;
}
</style>