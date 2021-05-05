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
  --bg: #583c72;
  --body: #ecdcca;
  --on-bg: whitesmoke;
  --on-body: #2b2e4a;
}
[data-theme="darkMode"] {
  --bg: #2b2e4a;
  --body: #9f5f80;
  --on-body: whitesmoke;
  --on-bg: whitesmoke;
}
/*TODO: OS defined dark mode*/
html {
  background: var(--bg);
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--body);
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
  color: var(--on-bg);
}
.page {
  &__header {
    margin: 1%;
    font-size: 5.5rem;
    color: var(--on-body);
  }
  &__sub {
    margin: 1%;
    font-size: 2rem;
    color: var(--on-body);
  }
}
.content,
.content-bg-0,
.content-bg-1,
.content-bg-1--ng {
  min-height: 40vh;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
}
.content {
  &__grid {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 10%;
    flex-wrap: wrap;
  }
}
.content-bg-0 {
  padding: 7%;
  &__header {
    font-size: 2.5rem;
  }
}
.content-bg-1 {
  padding: 50px;
  background-color: var(--bg);
  &__header {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 50px 0;
    color: var(--on-bg);
  }
}
.content-bg-1--ng {
  z-index: 1;
  position: relative;
  padding: 50px;
  margin: 5% 0;
  background-color: var(--bg);
  overflow: visible;
  &:before,
  &:after {
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
  &:after {
    transform-origin: right bottom;
    transform: skewY(-3deg);
  }
}
</style>
