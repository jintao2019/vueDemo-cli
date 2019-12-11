<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ num }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import ajax from "@/api";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: mapState(["num"]),
  created() {
    this.getConfigData();
    this.$storage.set("sdad", "sdada");
  },
  methods: {
    async getConfigData() {
      const data = await ajax.getparams("heavn20191120");
      console.log(data);
    }
  }
};
</script>
