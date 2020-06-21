<template>
  <v-container>
    <v-layout row class="mb-3">
      <v-flex xs12 sm6 offset-sm3>
        <h3>Create a new Meetup</h3>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onCreateMeetup">
      <v-layout row>
        <v-flex x12 sm6 offset-sm3>
          <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex x12 sm6 offset-sm3>
          <v-text-field name="location" label="Location" id="location" v-model="location" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex x12 sm6 offset-sm3>
          <v-text-field
            name="imageUrl"
            label="Image URL"
            id="image-url"
            v-model="imageUrl"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-img :src="imageUrl" :height="imageHeight"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex x12 sm6 offset-sm3>
          <v-textarea
            name="description"
            label="Description"
            id="description"
            rows="4"
            no-resize
            required
            v-model="description"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-6 mb-3">
        <v-flex xs12 sm6 offset-sm3>
          <h4>Choose a Date &amp; Time</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-date-picker full-width v-model="date"></v-date-picker>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-time-picker full-width v-model="time" format="24hr"></v-time-picker>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn type="submit" class="mt-16 mb-8 primary" :disabled="!formIsValid">Create Meetup</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      time: new Date()
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    imageHeight() {
      return this.imageUrl === "" ? "0px" : "300px";
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups/");
    }
  }
};
</script>
