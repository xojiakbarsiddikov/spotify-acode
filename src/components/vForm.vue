<template>
  <form @submit.prevent>
    <h4>{{create_text}}</h4>
    <input
        v-model="post.title"
        type="text"
        :placeholder="placeholder">
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost">
      Создать
    </my-button>
  </form>
</template>

<script>
import MyButton from './MyButton';
export default {
  name: "vForm",
  props: {
    posts: {
      type: Array,
      required: true
    },
  },
  components: {MyButton},
  data() {
    return{
      placeholder: "Название",
      placeholder_2: "Описание",
      create_text: 'Создание поста',
      post: {
        title: '',
      }
    }
  },
  computed: {
    MyButton
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
      }
    },
  }
}
</script>

<style scoped>
form input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
h4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
form {
  display: flex;
  flex-direction: column;
}
.btn {
  padding: 0px;
  background: none;
  color: teal;
  border: none;
}
</style>