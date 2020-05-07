<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="server in servers"
      :key="server.id"
      @click="showDetail(server)"
    >Server Status: {{ server.status }}</li>
  </ul>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: {
    servers: {
      type: Array,
      required: true
    }
  },
  methods: {
    showDetail(server) {
      eventBus.showDetail(server);
    }
  }
};
</script>

<style>
</style>