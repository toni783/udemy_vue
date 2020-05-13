<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  //   methods: { ...mapMutations(["increment", "decrement"]) },

  //   methods: {
  //     increment() {
  //       this.$store.commit("increment");
  //     },
  //     decrement() {
  //       this.$store.commit("decrement");
  //     },
  //   },
  //   methods: {
  //     increment() {
  //       this.$store.state.counter++;
  //     },
  //     decrement() {
  //       this.$store.state.counter--;
  //     },
  //   },
  methods: { ...mapActions("counter", ["increment", "decrement"]) }
};
</script>
