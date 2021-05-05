<template>
  <div class="footer">
    <p>footer</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  max-width: 100%;
  background: var(--bg);
  height: 150px;
  color: var(--on-bg);
  z-index: 1;
  overflow: visible;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    transform-origin: left top;
    transform: skewY(-3deg);
  }
}
</style>
