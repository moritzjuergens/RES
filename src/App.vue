<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style lang="scss">
:root {
  --bg: #f5f5f5;
  --on-bg: #24252a;
}
[data-theme="darkMode"] {
  --bg: #24252a;
  --on-bg: whitesmoke;
}
/*TODO: OS defined dark mode*/
html {
  background: var(--bg);
}
body {
  margin: 0;
  padding: 0;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
}
// }
// @media (prefers-color-scheme: dark) {
//   :root {
//     --bg: #24252a;
//     --on-bg: whitesmoke;
//   }
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--txt-color);
}
</style>
