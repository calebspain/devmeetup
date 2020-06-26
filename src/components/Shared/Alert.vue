<template>
  <v-alert color="rgba(255, 0, 0, 0.2)" error dismissible @input="onClose">{{ text }}</v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>

<style>
</style>