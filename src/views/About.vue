<template>
  <div class="about">
    <div class="content-bg-0">
      <h1 class="content-bg-0__header">About us</h1>
      <p>
        For more detailed information regarding use and technologies, please
        take a look at our documentation
      </p>
    </div>
    <div class="content-bg-1--ng">
      <h1 class="content-bg-1__header">Technologies</h1>
      <div class="content__grid">
        <img
          :src="require('/src/assets/logo.png')"
          alt="Vue"
          class="card__img"
        />
        <img
          :src="require('/src/assets/python.png')"
          alt="Vue"
          class="card__img"
        />
        <img
          :src="require('/src/assets/flask-logo.png')"
          alt="Vue"
          class="card__img"
          id="flask"
        />
      </div>
    </div>
    <div class="content-bg-0"></div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss" scoped>
.about {
  // height: 100vh;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__img {
  width: 100px;
  height: auto;
  margin: 25px;
}
.invert {
  -webkit-filter: invert(1);
  filter: invert(1);
}
</style>
