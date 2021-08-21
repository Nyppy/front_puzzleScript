<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="40%"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="#D2F1C4"
          style="
            color: #000;
          "
          class="pl-4"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon
              color="#000"
            >mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-0 pl-0">Авторизация</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>

        <form
          @submit.prevent="submit"
          class="pa-8"
        >
          <v-text-field
            v-model="email"
            label="Email"
            class="mb-4"
            type="email"
            required
            hide-details
            placeholder="Email"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Пароль"
            class="mb-4"
            type="password"
            required
            hide-details
            placeholder="Пароль"
            outlined
            dense
          ></v-text-field>

          <div class="mb-4">
            <p>Все еще нет аккаунта? <span style="color: #3B7A20; cursor: pointer;" @click="openReg">Зарегистрироваться</span></p>
          </div>

          <v-btn
            class="text-none"
            type="submit"
            width="100%"
            color="#3B7A20"
            text-color="#fff"
            dark
          >
            Войти
          </v-btn>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { user } from '@/plugins/helper.js';

import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

import Cookies from 'vue-cookies';

export default {
  name: 'Login',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
  },
  methods: {  
    async submit() {
      const data = {
        email: this.email,
        password: this.password
      };
      
      user.login(data).then((res) => {
        console.log(res);
        
        Cookies.set('Token', res.data.authorization);     
        Cookies.set('Auth', true);

        window.location.reload();
      }).catch((err) => {
        console.log(err);

        Vue.$toast.error('Ой ошибочка!', {
          position: 'top-right'
        });

        Cookies.set('Auth', false);
      });
    },
    openReg() {
      if (typeof(this.callback) == 'function') {
        this.dialog = false;
        this.callback();
      }
    }
  }
}
</script>

<style>
.v-dialog {
  border-radius: 50px !important
}
</style>