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
  /*Colors*/

  --color-brand: #3082ff;

  /*Black Colors*/
  --color-white-1: white;
  --color-white-2: whitesmoke;
  --color-black-1: #000000;
  --color-black-2: #1d1d1d;
  --color-black-3: #24252a;

  /*Gray Colors*/
  --color-gray-1: #333333;
  --color-gray-2: #4f4f4f;
  --color-gray-3: #828282;
  --color-gray-4: #bdbdbd;
  --color-gray-5: #e0e0e0;

  /*State Colors*/
  --color-info: #4eb4ff;
  --color-success: #17c33d;
  --color-warning: #ffcb46;
  --color-error: #e42020;

  /*Typography*/

  /* Headers */
  --txt-header-1: 56px;
  --txt-header-2: 48px;
  --txt-header-3: 40px;
  --txt-header-4: 32px;
  --txt-header-5: 24px;
  --txt-header-6: 20px;
  /* Text */
  --txt-text-l: 20px;
  --txt-text-m: 18px;
  --txt-text-n: 16px;
  --txt-text-s: 14px;

  --object-background: var(--color-brand);
  --object-background-2: var(--color-white-1);
  --body-background: var(--color-white-1);
  --object-background-txt: var(--color-white-2);
  --body-background-txt: var(--color-black-3);
  --highlight: rgb(212, 230, 248);
}
[data-theme="darkMode"] {
  --object-background: #2b2e4a;
  --object-background-2: var(--object-background);
  --body-background: #363864;
  --body-background-txt: var(--color-white-2);
  --object-background-txt: var(--color-white-1);
  --highlight: #4f5064;
}
html {
  background: var(--object-background);
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--body-background);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--object-background-txt);
}
.page {
  &__header {
    margin: 1%;
    font-size: var(--txt-header-1);
    color: var(--body-background-txt);
  }
  &__sub {
    margin: 1%;
    font-size: var(--txt-header-3);
    color: var(--body-background-txt);
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
  padding: 5%;
  &__header {
    font-size: 3rem;
    color: var(--body-background-txt);
    &--2 {
      font-size: 1.5rem;
      color: var(--body-background-txt);
    }
  }
}
.content-bg-1 {
  padding: 50px;
  background-color: var(--object-background);
  &__header {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 50px 0;
    color: var(--object-background-txt);
  }
}
.content-bg-1--ng {
  z-index: 1;
  position: relative;
  padding: 50px;
  margin: 5% 0;
  background-color: var(--object-background);
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

/* =================
     Media-Queries
===================== */

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  :root {
    --header: 5.5rem;
    --sub: 3rem;
    --p: 1.5rem;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  :root {
    --header: 5rem;
    --sub: 2.5rem;
    --p: 1.5rem;
  }
}
@media (min-width: 2500px) {
  :root {
    --header: 8rem;
    --sub: 4rem;
    --p: 2.5rem;
  }
}
</style>
