<template>
  <div>
    <div>
      <slot name="title"></slot>
      <span style="color: #ccc">
        <slot name="subtitle">default Subtitle</slot>
      </span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solic #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h2 {
  color: red;
}
</style>