<template>
  <div class="header" :style="{'position': !fixed?'fixed':''}">
    <div class="header__content">
      <router-link tag="div" to="/" class="header__logo cursor-pointer ">
        <div class="header__img">
          <img src="../assets/img/header/session.png" alt="">
        </div>
      </router-link>

      <div class="header__nav">
        <p>Бета-тест</p>
        <p>Принцип работы</p>
        <router-link v-if="auth" to="/private-office" tag="p">Личный кабинет</router-link>
        <p v-if="!auth" @click="toggleModalLogin">Вход</p>
        <p v-else @click="exit">Выход</p>
        <p v-if="!auth" @click="toggleModalRegistery">Регистрация</p>
      </div>
      <div class="header__social">
        <img src="../assets/img/header/facebook.png" alt="">
        <img src="../assets/img/header/inst.png" alt="">
        <img src="../assets/img/header/twitter.png" alt="">
      </div>
    </div>

    <modalLogin
      v-model="flag_modal_login"
      :callback="toggleModalRegistery"
    />

    <modalRegistery
      v-model="flag_modal_registery"
    />
  </div>
</template>

<script>
  import modalLogin from '@/components/Login.vue';
  import modalRegistery from '@/components/Registery.vue';


  import Cookies from 'vue-cookies';

  export default {
    name: 'Header',
    data() {
      return {
        flag_modal_login: false,
        flag_modal_registery: false,
      }
    },
    props: {
      fixed: {
        type: Boolean,
        default: false,
      }
    },
    components: {
      modalLogin,
      modalRegistery
    },
    computed: {
      auth() {
        const auth = Cookies.get('Auth');

        return auth;
      }
    },
    methods: {
      toggleModalLogin() {
        this.flag_modal_login = !this.flag_modal_login;
      },
      toggleModalRegistery() {
        this.flag_modal_registery = !this.flag_modal_registery;
      },
      exit() {
        Cookies.remove('Auth');
        Cookies.remove('Token');

        window.location.href = '/';
      }
    }
  }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        min-height: 100px;
        z-index: 10;
        // position: fixed;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #3A3A3A;
        background-color: white;
        p{
          margin-bottom: 0px;
        }
    }

    .header__content{
      max-width: 1280px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }

    .header__img{
      img{
      max-width: 80%;

      }
    }

    .header__nav{
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
      padding: 0px 50px 5px;
      
        p{
          cursor: pointer;
          transition: 0.3s;
          &:hover{
           color: #3B7A20;
          }
          
        }
      
    }

    .header__social{
      img{
        cursor: pointer;
        margin-right: 10px;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
</style>
