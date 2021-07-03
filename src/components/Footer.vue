<template>
  <div class="footer">
    <p>Made you look!</p>
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
  background: var(--object-background);
  height: 5rem;
  color: var(--object-background-txt);
  display: flex;
  place-content: center;
}
.footer > p {
  font-size: var(--txt-text-s);
}
</style>
