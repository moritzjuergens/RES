<template>
  <div class="footer">
    <div style="margin: 10px 20px">
      <h1 class="footer__header">Our Team</h1>
      <p>Mohammed Haidarah <br />Moritz Jürgens <br />Gökalp Yildiz</p>
    </div>
    <div style="margin: 10px 20px">
      <h1 class="footer__header">Links</h1>
      <p>
        <a
          href="https://colab.research.google.com/drive/1pilL-yA8I_EpQiuUMDdt-gHFJKOV6NsV?usp=sharing"
          >Google Colaboratory</a
        >
        <br />

        <a href="https://github.com/moritzjuergens/RES-Frontend">Frontend</a>
        <br />

        <a href="https://github.com/moritzjuergens/RES-Backend">Backend</a>
      </p>
    </div>
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
  align-items: center;
  justify-content: center;
  padding: 15px 50px;

  &__header {
    font-size: var(--txt-header-6);
  }
}
p {
  font-size: var(--txt-text-s);
}
a:visited,
a:active,
a:link,
a {
  color: var(--color-white-1);
  text-decoration: none;
}
a:hover {
  color: var(--highlight);
}
</style>
