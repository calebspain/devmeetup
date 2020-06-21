<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="pa-3" color="grey lighten-5">
          <v-card-title>
            <h3>{{ meetup.title }}</h3>
          </v-card-title>
          <v-img :src="meetup.imageUrl" height="400px"></v-img>
          <v-card-text>
            <h4>University of Houston Library - {{ meetup.date }}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu fringilla sapien. Fusce egestas
              porta libero ut varius. Cras sit amet tellus facilisis est maximus interdum bibendum a leo. Proin
              ornare laoreet lectus laoreet tincidunt. Nulla ac pulvinar diam. Quisque malesuada, quam vel vulputate
              condimentum, diam mauris dictum mi, sed lobortis est massa at enim. Ut imperdiet justo vel lacus congue
              condimentum. Nullam efficitur feugiat nunc, et faucibus urna fringilla ullamcorper. Vivamus eu convallis
              ex. Ut eleifend magna a metus blandit, vitae auctor tortor sollicitudin.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

<style>
</style>