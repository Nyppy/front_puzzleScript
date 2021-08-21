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
          <v-toolbar-title class="ml-0 pl-0">Регистрация</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>

        <form
          @submit.prevent="submit"
          class="pa-8"
        >
          <v-text-field
            v-model="first_name"
            label="Имя"
            class="mb-4"
            type="text"
            required
            hide-details
            placeholder="Имя"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="last_name"
            label="Фамилия"
            class="mb-4"
            type="text"
            required
            hide-details
            placeholder="Фамилия"
            outlined
            dense
          ></v-text-field>

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

          <v-text-field
            v-model="phone"
            label="Телефон"
            class="mb-4"
            type="phone"
            required
            hide-details
            placeholder="Телефон"
            v-mask="'# (###) ###-##-##'"
            outlined
            dense
          ></v-text-field>

          <v-btn
            class="text-none"
            type="submit"
            width="100%"
            color="#3B7A20"
            text-color="#fff"
            dark
          >
            Регистрация
          </v-btn>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { user } from '@/plugins/helper.js';

import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask);

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

export default {
  name: 'Registery',
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      email: null,
      first_name: null,
      last_name: null,
      phone: null,
      password: null
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
    }
  },
  methods: {
    async submit() {
      const data = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        password: this.password
      };

      user.registery(data).then((res) => {
        console.log(res);

        Vue.$toast.success('Вы успешно зарегистрированы!', {
          position: 'top-right'
        });

        this.dialog = false;
      }).catch((err) => {
        console.log(err);

        Vue.$toast.error('Ой ошибочка!', {
          position: 'top-right'
        });
      });
    }
  }
}
</script>