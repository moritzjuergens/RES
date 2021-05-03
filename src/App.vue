<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
body {
  --bg: whitesmoke;
  --bg2: white;
  --on-bg: #24252a;
  --txt-color2: #6f6f6f;
  --txt-color: #222328;

  margin: 0;
  padding: 0;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media (prefers-color-scheme: dark) {
  body {
    --bg: #24252a;
    --on-bg: whitesmoke;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--txt-color);
}
</style>
