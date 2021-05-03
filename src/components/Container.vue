<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container",
};
</script>
<style lang="scss" scoped>
.container {
  background: var(--bg);
  max-width: 100%;
  height: fit-content;
  min-height: 300px;
  margin: 25px;
  border-radius: 10px;

  color: var(--on-bg);
}
</style>
