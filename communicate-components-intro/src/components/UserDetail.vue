<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- <p>User Name: {{name}}</p> -->
    <p>User Name: {{switchName}}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String,
      required: true
      //   default: "Gilbert"
    },
    resetFn: Function,
    userAge: Number
  },

  // reference type prop passed to child component example
  // props: {
  //     name: {
  //       type: Object,
  //       required: true,
  //       default() {
  //         return {
  //           myProp: { id: 1 }
  //         };
  //       }
  //     }
  //   },
  methods: {
    resetName() {
      //   this.name = "Gilbert";
      this.$emit("nameWasReset", "Gilbert");
    }
  },
  computed: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    }
  },

  created() {
    eventBus.$on("ageWasEdited", data => {
      this.userAge = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
