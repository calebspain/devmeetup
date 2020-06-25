<template>
  <v-alert color="rgba(255, 0, 0, 0.2)" error dismissible @input="onClose">Test</v-alert>
</template>

<script>
export default {
  name: "Alert",
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>

<style>
</style>