<template>
  <div class="create">
    <div class="content">
      <div class="plus-create color-white cursor"  @click="showDialog">
        <div class="plus-wrapper">
          <i class="fa-solid fa-plus i-size"></i>
        </div>
        <p>{{create}}</p>
      </div>
      <my-dialog
          v-model:show="dialogVisible">
        <v-form
            @create="createPost"
        />
      </my-dialog>
      <div class="plus-create color-white cursor">
        <div class="plus-wrapper background">
          <i class="fa-solid fa-heart color-white"></i>
        </div>
        <p>{{love}}</p>
      </div>
        <div class="border-bottom"></div>
      <div class="create-ul">
        <ul class="post-ul">
          <li v-for="post in posts" :post="post" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vForm from "@/components/vForm";
import MyDialog from "@/components/MyDialog";
export default {
  name: "vCreate",
  data() {
    return{
      dialogVisible: false,
      posts: [],
      create: 'Создать плейлист',
      love: 'Любимый треки'
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  components: {
    vForm,
    MyDialog
  }
}
</script>

<style scoped>
.plus-create {
  display: flex;
  align-items: center;
  margin: 7px 18px;
  opacity: .8;
}
.background {
  background: rgb(253,249,255)!important;
  background: linear-gradient(233deg, rgba(253,249,255,1) 5%, rgba(237,216,249,1) 25%, rgba(99,0,249,1) 100%)!important;
}
.color-white{
  color: #ffffff!important;
}
.plus-create p {
  padding: 0 15px;
  font-size: 15px;
}
.plus-wrapper {
  padding: 7px 9px;
  background: #ffff;
  color: #282626;
  border-radius: 3px;
}
.post-ul {
  margin: 30px 23px;
}
.post-ul li {
  list-style: none;
  padding: 13px 0;
  font-size: 15px;
}
.cursor {
  cursor: pointer;
}
.plus-create {
  padding: 7px 0;
}
.i-size {
  font-size: 15px!important;
}
.plus-create:hover {
  opacity: 1;
  transition: 0.2s ease-in-out;
}
.border-bottom{
  border-bottom: 1px solid #323030;
  max-width: 85%;
  margin: 0 auto;
}
</style>