<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  padding: 13px 22px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>