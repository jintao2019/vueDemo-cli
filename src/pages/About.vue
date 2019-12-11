<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ num }}</div>
    <button class="btn" @click="add(5)">add</button>
    <button class="btn" @click="reduce(2)">reduce</button>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["num"]),
  methods: {
    ...mapActions(["add", "reduce"])
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 20px;
  padding: 5px;
}
</style>
