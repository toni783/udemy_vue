<template>
  <div class="col-xs-12 col-sm-6">
    <server-list :servers="servers"></server-list>
  </div>
</template>

<script>
import ServerList from "./ServersList.vue";
export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Who knows!?" }
      ]
    };
  },
  components: {
    "server-list": ServerList
  }
};
</script>

<style>
</style>
