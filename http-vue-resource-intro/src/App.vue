<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input v-model="user.username" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input v-model="user.email" type="text" class="form-control" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" class="form-control" v-model="node" />
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { username: "", email: "" },
      users: [],
      resource: {},
      node: "vue-data",
    };
  },
  methods: {
    submit() {
      //   console.log(this.user);
      //   this.$http
      //     .post("vue-data.json", this.user)
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //   this.resource.save([], this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      //   this.$http
      //     .get("vue-data.json")
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       this.users = data;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      this.resource
        .getData({ node: this.node })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.users = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "vue-alternative-data.json" },
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
};
</script>

<style></style>
