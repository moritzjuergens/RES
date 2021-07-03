<template>
  <nav class="navbar">
    <h1 class="navbar__brand"><router-link to="/">RES</router-link></h1>
    <ul class="navbar__links">
      <li>
        <router-link to="/get-started">Get started</router-link>
      </li>
      <li><router-link to="/">Documentation</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <ul class="navbar__links">
      <li>
        <button
          class="navbar__icon"
          @click="toggleTheme"
          aria-label="Toggle themes"
        >
          <dark-mode />
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import DarkMode from "vue-material-design-icons/Brightness6.vue";
export default {
  name: "NavBar",
  components: {
    "dark-mode": DarkMode,
  },
  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },
  methods: {
    toggleTheme: function () {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
      // document.getElementById("flask").classList.toggle("invert");
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2% 0 5%;
  background: var(--color-brand);
  box-shadow: #00000030 0 0 10px;
  user-select: none;
  color: var(--color-white-1);

  &__brand {
    font-size: 2.6rem;
    margin: 0;
    a:visited,
    a:link {
      text-decoration: none;
      color: var(--color-white-1);
    }
  }
  &__links {
    list-style: none;
    font-size: 1.4rem;
    margin: 0.5%;

    li {
      display: inline-block;
      padding: 22px 30px;

      a:link,
      a:visited {
        text-decoration: none;
        color: var(--color-white-1);
      }
    }
  }
  &__icon {
    outline: none;
    border: none;
    background: none;
    color: var(--color-white-1);
    cursor: pointer;
  }
  &__icon:hover {
    animation: shake 0.5s;
    animation-iteration-count: 1;
  }
}

#dark_mode {
  display: none;
}

@keyframes shake {
  0% {
    transform: rotate(15deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
</style>
