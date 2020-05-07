<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>User age {{userAge}}</p>
    <button @click="editAge">Edit me!</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    userAge: Number
  },
  methods: {
    editAge() {
      this.userAge = 88;
      eventBus.changeAge(88);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
