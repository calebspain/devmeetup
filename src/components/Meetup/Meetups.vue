<template>
  <v-container>
    <v-layout v-for="meetup in meetups" :key="meetup.id" class="mb-3">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="grey lighten-5">
          <v-container fluid class="pa-0">
            <v-layout row>
              <v-flex xs6 sm5 md4 class="pt-3 pb-3 pl-6 pr-6">
                <v-responsive>
                  <v-img :src="meetup.imageUrl" height="150px"></v-img>
                </v-responsive>
              </v-flex>
              <v-flex xs6 sm7 md8>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">{{ meetup.title }}</h3>
                    <small>
                      <em>{{ meetup.date }}</em>
                    </small>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn text :to="'/meetups/' + meetup.id">
                    <v-icon left>mdi-arrow-right</v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
};
</script>
<style scoped>
small {
  font-size: 65%;
}
</style>