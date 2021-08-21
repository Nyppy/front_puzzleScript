<template>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      max-width="300"
      :to="`/editor/${id}`"
    >
      <v-img
        class="white--text align-end"
        style="border-bottom: 2px solid #000;"
        height="140px"
        src="../assets/img/editor/temp.png"
      >
        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
      </v-img>

      <v-card-subtitle class="pb-0">
        Number 10
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Card',
  props: ['id']
}
</script>

<style>

</style>