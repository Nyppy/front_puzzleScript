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
          <v-toolbar-title class="ml-0 pl-0">Загрузка файла</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>

        <form
          @submit.prevent="submit"
          class="pa-8"
        >
          <v-file-input
            label="Файл"
            v-model="user_file"
            outlined
            dense
            required
            hide-details
            placeholder="Email"
          ></v-file-input>

          <!-- <input type="file" name="" @change="onFilePicked" id=""> -->

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
// import { file } from '@/plugins/helper.js';

import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

import Cookies from 'vue-cookies';

import axios from 'axios';

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
      user_file: null,
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
    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {

          console.log(files[0])

          const data = {
            profile: this.user_id,
            video: files[0]
          };

          console.log(data)
          

          axios.post('http://89.223.69.148:8000/api/file_manager/', files[0], {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          // file.load(data).then((res) => {
          //   console.log(res);

          //   window.location.reload();
          // }).catch((err) => {
          //   console.log(err);

          //   Vue.$toast.error('Ой ошибочка!', {
          //     position: 'top-right'
          //   });
          // });
        })
      }
    },
    async submit() {
      let formData = new FormData();
      formData.append("file", this.user_file);

      console.log(formData);

      
    },
  }
}
</script>

<style>
.v-dialog {
  border-radius: 50px !important
}
</style>