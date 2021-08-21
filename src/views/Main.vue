<template>
  <div class="main">
    <Header />
    <Description />
    <Functional />
    <Team />
    <Connect />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Description from '@/components/Description.vue';
import Functional from '@/components/Functional.vue';
import Team from '@/components/Team.vue';
import Connect from '@/components/Connect.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Main',
  data() {
    return {
      flag_modal_login: false
    }
  },
  components: {
    Header,
    Description,
    Functional,
    Team,
    Connect,
    Footer,
  },
}
</script>