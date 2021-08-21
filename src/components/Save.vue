<template>
  <div class="save" @click="save">
    <v-btn
      color="#2F65A6"
      fab
      x-large
      dark
    >
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Save",
  props: ['data', 'id'],
  methods: {
    save() {
      axios.post('http://89.223.69.148:8000/api/file_text_save/', {
        file_id: this.id,
        file_text: this.data,
      }).then(res => {
        console.log(res);

        this.loadFile();
      })
    },
    loadFile() {
      axios.post('http://89.223.69.148:8000/api/file/', {
        file_manager_id: this.id,
      }).then(res => {
        console.log(res.data);
        const url = res.data.text_doc;
        fetch(url)
          .then( r => r.text() )
      })
    }
  }
}
</script>

<style>
.save {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>