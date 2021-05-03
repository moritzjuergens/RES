<template>
  <div class="home">
    <div class="landingpage">
      <h1>Welcome to RES</h1>
      <p>The Resumé Evaluation System</p>
    </div>
    <div class="grid" id="resume">
      <container class="jumbo">
        <h4>ADD YOUR RESUMÉ</h4>
        <span class="subtext">(PDF)</span>
      </container>
      <container class="score">
        <div class="content">
          <h4>Resumé Score:</h4>
        </div>
      </container>
      <container class="drop-in">
        <p>Click on the plus or drag your file here</p>
      </container>
    </div>
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
.grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 25px;
  margin: 25px;
}
.jumbo {
  background-image: linear-gradient(
    109.6deg,
    rgba(39, 142, 255, 1) 11.2%,
    rgba(98, 113, 255, 0.78) 100.2%
  );
  color: whitesmoke;
  flex-direction: column;
  h4 {
    margin: 10px;
  }
}
.score {
  grid-row: 1 / 3;
  grid-column: 2;
  display: block;
  height: 100%;
}
.subtext {
  font-size: 1rem;
}
.drop-in {
  color: lightskyblue;
  font-size: 1.4rem;
  transition: all 0.2s;
  background-image: linear-gradient(
    109.6deg,
    rgb(151, 201, 255) 0%,
    rgba(160, 169, 255, 0.78) 10.2%,
    white 100%
  );
  background-size: 600%;
  background-position: right;
  transition: 0.2s background-position ease;
  &:hover {
    color: whitesmoke;
    background-position: left;
  }
}
.content {
  height: 100%;
  width: 100%;
  margin: 50px;

  h4 {
    font-size: 2rem;
    float: left;
    margin: 0;
  }
}
</style>
