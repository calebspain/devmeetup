<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-center text-sm-right">
        <v-btn large router to="/meetups" class="ma-3" color="grey lighten-5">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-center text-sm-left">
        <v-btn large router to="/meetup/new" class="ma-3" color="grey lighten-5">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular :value="20" v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 class="text-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  created: function() {
    if (!this.userIsAuthenticated) {
      this.$router.push("/signin");
      this.$store.commit("setLoading", false);
    }
  },
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>