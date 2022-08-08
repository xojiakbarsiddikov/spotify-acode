<template>
 <div class="container-select">
    <div class="ul-wrapper">
       <ul>
         <li>{{account}}</li>
         <li>{{profile}}</li>
         <li>{{premium}}</li>
         <li>{{private}}</li>
         <li>{{settings}}</li>
         <div class="border-top"></div>
         <li>{{close}}</li>
       </ul>
    </div>
 </div>
</template>

<script>
export default {
name: "MySelect",
  data() {
    return {
      account: 'Аккаунт',
      profile: 'Профиль',
      premium: 'Переход на Premium',
      private: 'Приватный режим',
      settings: 'Настройки',
      close: 'Выход'
    }
  }
}
</script>

<style scoped>
 .border-top{
   border-top: 1px solid #323030;
   max-width: 99%;
   margin: 5px auto;
 }
 ul {
   background: #1e1e1e;
   padding: 4px 37px;
 }
 ul li {
   font-size: 17px;
   font-weight: 400;
   color: #ffffff;
   padding: 10px 0;
   list-style: none;
 }
 .container-select {
   max-width: 13%;
   display: flex;
   justify-content: center;
   position: fixed;
   top: 77px;
   right: 200px;
}
</style>