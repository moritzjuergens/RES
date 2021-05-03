<template>
  <nav class="navbar">
    <h1 class="navbar__brand">RES</h1>
    <ul class="navbar__links">
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5% 0 5%;
  background: var(--bg);
  box-shadow: #00000030 0 0 10px;
  user-select: none;
  color: var(--on-bg);
}
.navbar__brand {
  font-size: 2.2rem;
}
.navbar__links {
  list-style: none;
  font-size: 1.4rem;
  margin: 0.5%;

  li {
    display: inline-block;
    padding: 22px 30px;

    a:link,
    a:visited {
      text-decoration: none;
      color: var(--on-bg);
    }
  }
}
</style>
