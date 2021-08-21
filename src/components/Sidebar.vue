<template>
  <v-navigation-drawer
    permanent
  >
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      items: [
          { title: 'Home1', icon: 'mdi-home-city' },
          { title: 'My Account2', icon: 'mdi-account' },
          { title: 'Users3', icon: 'mdi-account-group-outline' },
           { title: 'Home4', icon: 'mdi-home-city' },
          { title: 'My Account5', icon: 'mdi-account' },
          { title: 'Users6', icon: 'mdi-account-group-outline' },
          { title: 'Home7', icon: 'mdi-home-city' },
          { title: 'My Acc8ount', icon: 'mdi-account' },
          { title: 'Users9', icon: 'mdi-account-group-outline' },
          { title: 'Home0', icon: 'mdi-home-city' },
          { title: 'My Ac01count', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    }
  }
}
</script>

<style>

</style>