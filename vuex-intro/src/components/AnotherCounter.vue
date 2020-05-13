<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: '5000' })">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: '5000' })">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  //   methods: {
  //     increment() {
  //       this.$store.commit("increment");
  //     },
  //     decrement() {
  //       this.$store.commit("decrement");
  //     },
  //   },
  //   methods: { ...mapMutations(["increment", "decrement"]) },
  methods: { ...mapActions("counter", ["asyncIncrement", "asyncDecrement"]) }
};
</script>
