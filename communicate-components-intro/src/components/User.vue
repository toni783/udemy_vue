<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{name}}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :userAge="userAge"
          :name="name"
          @nameWasReset="name= $event"
          :resetFn="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="userAge"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data() {
    return {
      name: "Gilbert",
      userAge: 28
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "Gilbert";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
