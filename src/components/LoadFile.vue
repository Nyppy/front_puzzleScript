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
          <v-toolbar-title class="ml-0 pl-0">Загрузка файлов</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>

        <form
          @submit.prevent="submit"
          class="pa-8"
          ref="form"
        >
          <v-file-input
            v-if="!loader"
            label="Файл"
            v-model="user_file"
            outlined
            dense
            required
            hide-details
          ></v-file-input>

          <v-progress-linear
            v-else
            color="#2F65A6"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>

          <v-btn
            class="text-none mt-4"
            type="submit"
            width="100%"
            color="#3B7A20"
            text-color="#fff"
            dark
          >
            Загрузить
          </v-btn>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

import Cookies from 'vue-cookies';

export default {
  name: 'LoadFile',
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
      user_file: null,
      loader: false,
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
    user_id() {
      return Cookies.get('User_id');
    }
  },
  methods: {
    submit() {
      this.loader = true;

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer {{token}}");

      var formdata = new FormData();
      formdata.append("profile", this.user_id);
      formdata.append("video", this.user_file, this.user_file.name);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://89.223.69.148:8000/api/file_manager/", requestOptions)
        .then(response => {
          response.text();

          this.loader = false;

          Vue.$toast.success('Файл успешно загружен!', {
            position: 'top-right'
          });

          this.dialog = false;
        })
        .catch(error => {
          console.log('error', error);

          Vue.$toast.success('Ой, ошибочка!', {
            position: 'top-right'
          });
        });      
    },
  }
}
</script>

<style>
.v-dialog {
  border-radius: 50px !important
}
</style>