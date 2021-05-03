<template>
  <div class="home">
    <div class="landingpage">
      <h1>Welcome to RES</h1>
      <h4>The Resumé Evaluation System</h4>
    </div>
    <container>
      <h1>test</h1>
    </container>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
export default {
  name: "Home",
  components: {
    container: Container,
  },
};
</script>
<style lang="scss" scoped>
.home {
  font-size: 3.5rem;
  color: whitesmoke;
}
.landingpage {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
