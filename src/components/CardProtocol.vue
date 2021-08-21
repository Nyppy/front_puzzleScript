<template>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      max-width="300"
      :to="`/editor/${data.id}`"
    >
      <v-img
        class="white--text align-end"
        style="border-bottom: 2px solid #000;"
        height="140px"
        src="../assets/img/editor/temp.png"
      >
        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
      </v-img>

      <v-card-subtitle class="pb-0 text-left">
        Протокол {{data.name ? data.name : data.id}}
      </v-card-subtitle>

      <v-card-text class="text--primary text-left">
        <div>{{data.short_text || 'Нет данных!'}}</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Card',
  props: ['data']
}
</script>

<style>

</style>