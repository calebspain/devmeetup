<template>
  <v-container>
    <v-layout row class="mb-3">
      <v-flex xs12 sm6 offset-sm3>
        <h3>Create a new Meetup</h3>
      </v-flex>
    </v-layout>
    <form>
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
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn class="mt-3 mb-6 primary" :disabled="!formIsValid">Create Meetup</v-btn>
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
      description: ""
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
    }
  }
};
</script>
