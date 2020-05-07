<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <div v-if="server">
      <p>Server Id: {{server.id}}</p>
      <p>Server Status: {{server.status}}</p>
      <button @click="changeServerStatus">Change status to normal</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data: function() {
    return { server: null };
  },
  created() {
    eventBus.$on("showDetail", data => {
      this.server = data;
    });
  },
  methods: {
    changeServerStatus() {
      this.server.status = "Normal"; // same memory adress so we can change the object (Not a god approach)
    }
  }
};
</script>

<style>
</style>
