<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID {{$route.params.id}}</p>
    <router-link class="btn btn-primary" tag="button" :to="link">Edit link</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "eng", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }

    // access to the component properties with next
    // next((vm) => {
    //   console.log(vm.link)
    // })
  }
};
</script>


