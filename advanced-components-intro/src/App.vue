<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent= 'app-quote'">Quote</button>
        <button @click="selectedComponent= 'appAuthor'">Author</button>
        <button @click="selectedComponent= 'appNew'">New</button>
        <hr />
        {{selectedComponent}}
        <keep-alive>
          <component :is="selectedComponent">Default Content</component>
        </keep-alive>

        <!-- <app-quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p>A Wonderfull Quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "app-quote"
    };
  },
  components: {
    "app-quote": Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
/* h2 {
  color: blue;
} */
</style>
