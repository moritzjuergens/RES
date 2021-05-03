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
  max-width: 100%;
  height: fit-content;
  min-height: 300px;
  margin: 25px;
  border-radius: 10px;

  background: var(--bg);
  color: var(--on-bg);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
