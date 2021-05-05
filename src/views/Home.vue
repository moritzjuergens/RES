<template>
  <div class="home">
    <div class="content-bg-0" style="padding-right: 20px">
      <div class="landing-page">
        <div class="text">
          <h1 class="page__header">Welcome to RES</h1>
          <p class="page__sub">The Resumé Evaluation System</p>
          <button class="action-button"><p>Get started here!</p></button>
        </div>
        <img
          :src="require('/src/assets/vector-creator.png')"
          alt="Woman on PC"
          class="img"
        />
      </div>
    </div>
    <div class="content-bg-1--ng" id="first"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.file-upload {
  color: var(--on-bg);
  width: 60%;
  height: 20vh;
  padding: 50px;
  border-radius: 12px;
  border: var(--on-bg) 2px solid;
  background: rgb(110, 185, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  p {
    font-size: 1.2rem;
  }
  &:hover {
    transform: scale(1.04);
  }
}
.action-button {
  height: 75px;
  width: fit-content;
  background: var(--bg);
  border-radius: 50px;
  border: none;
  margin: 5%;
  padding: 25px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color: var(--on-bg);
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  p {
    font-size: 1.5rem;
    margin: 0;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
    transform: scale(1.05);
  }
}
.text {
  height: 100%;
  width: 60%;
  text-align: left;
  h1 {
    font-size: 5.5rem;
  }
}
.img {
  padding-top: 40px;
}
.landing-page {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#first {
  &:before,
  &:after {
    transform-origin: left top;
    transform: skewY(5deg);
  }
  &:after {
    transform-origin: right bottom;
    transform: skewY(5deg);
  }
}
</style>
