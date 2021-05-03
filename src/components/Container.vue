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
  box-shadow: rgba(68, 68, 68, 0.274) 0 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
