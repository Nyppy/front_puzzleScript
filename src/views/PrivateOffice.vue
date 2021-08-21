<template>
  <div class="main">
    <Header fixed/>
    
      <v-container class="d-flex">
        <Sidebar/>

        <v-container class="pa-1 mb-4 ml-4">
          <v-row>
            <Card
              v-for="i in list"
              :key="i.id"
              :data="i"
            />
          </v-row>
        </v-container>
      </v-container>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderPrivate.vue';
import Footer from '@/components/Footer.vue';

import Card from '@/components/CardProtocol.vue';
import Sidebar from '@/components/Sidebar.vue';

import axios from '../service/axios';

export default {
  name: 'PrivateOffice',
  data() {
    return {
      list: null,
    }
  },
  components: {
    Header,
    Footer,
    Card,
    Sidebar,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('/file/?profile_id=1').then((res) => {
        this.list = res.data.data;
      })
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
}
</style>