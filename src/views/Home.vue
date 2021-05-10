<template>
  <div class="home">
    <div class="content-bg-0">
      <div class="flex">
        <div class="landing-page">
          <div class="text">
            <h1 class="page__header">Welcome to RES</h1>
            <p class="page__sub">The Resumé Evaluation System</p>
            <button class="action-button"><p>Get started here!</p></button>
          </div>
          <img
            :src="require('/src/assets/vector-creator.png')"
            alt="Woman on PC"
            id="img"
          />
        </div>
      </div>
    </div>
    <div class="content-bg-1--ng" id="first">
      <div class="container">
        <div class="container__item">
          <h5 class="container__item__header">Rate your candidates</h5>
          <p class="container__item__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            nostrum eum explicabo eveniet natus! Quis commodi nam et illo magnam
            voluptates aliquam, neque voluptatibus dolores eius incidunt labore
            illum quo!
          </p>
        </div>
        <div class="container__item">
          <h5 class="container__item__header">Check your Resumé</h5>
          <p class="container__item__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            nostrum eum explicabo eveniet natus! Quis commodi nam et illo magnam
            voluptates aliquam, neque voluptatibus dolores eius incidunt labore
            illum quo!
          </p>
        </div>
        <div class="container__item">
          <h5 class="container__item__header">All in one place</h5>
          <p class="container__item__body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            nostrum eum explicabo eveniet natus! Quis commodi nam et illo magnam
            voluptates aliquam, neque voluptatibus dolores eius incidunt labore
            illum quo!
          </p>
        </div>
      </div>
    </div>
    <div class="content-bg-0" id="second">
      <div class="left">
        <h1 class="page__sub">Using the latest NLP Technologies</h1>
      </div>
      <div class="flex">
        <div class="landing-page">
          <img
            :src="require('/src/assets/vector-creator (3).png')"
            alt="Woman on PC"
            id="img2"
          />
          <p class="test">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            magnam beatae in hic facere dolores fuga rerum provident,
            reprehenderit alias consectetur culpa nesciunt. Eius quo maiores
            tenetur explicabo provident velit?
          </p>
        </div>
      </div>
    </div>
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
  border-radius: 10px;
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
  width: 100%;
  text-align: left;
  // h1 {
  //   font-size: 7rem;
  // }
}
#img {
  padding-top: 40px;
  width: 100%;
  height: auto;
}
.landing-page {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
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

.container {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 50px;

  &__item {
    width: 250px;
    height: 250px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    box-shadow: 0 0 5px rgba($color: #1d1d1d, $alpha: 0.2);
    border-radius: 10px;
    transition: all 0.2s ease;

    &__header {
      font-size: 1.5rem;
      margin: 0px 0 20px 0px;
    }
    &:hover {
      box-shadow: 0 0 10px rgba($color: #1d1d1d, $alpha: 0.2);
      transform: scale(1.05);
    }
  }
}
.left {
  width: 100%;
  text-align: left;
  margin-bottom: 100px;
}
#img2 {
  width: 700px;
}
.test {
  font-size: var(--p);
  color: var(--on-body);
  width: 40ch;
}
</style>
