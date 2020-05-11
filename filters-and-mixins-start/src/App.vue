<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8-col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters and Mixins</h1>
          <p>{{text | toUpperCase | toLowerCase}}</p>
          <hr />
          <button @click="fruits.push('berry')">Add Item</button>
          <br />
          <input v-model="filterText" />
          <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
          </ul>
          <hr />
        </div>

        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin";
export default {
  data() {
    return {
      text: "Hello there!"
    };
  },
  filters: {
    // "to-upper-case": {}
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    List
  },
  mixins: [fruitMixin]
};
</script>

<style>
</style>
