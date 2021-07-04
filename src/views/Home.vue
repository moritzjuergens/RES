<template>
  <div class="home">
    <div class="content-bg-0" style="height: 70vh">
      <div class="flex">
        <div class="landing-page">
          <div class="text">
            <h1 class="page__header">Welcome to RES</h1>
            <p class="page__sub">The Resumé Evaluation System</p>
            <router-link class="action-button" to="/get-started">
              Get started here!
            </router-link>
          </div>
          <div class="img-container">
            <img
              :src="require('/src/assets/undraw_Updated_resume_re_q1or.svg')"
              alt="Woman on PC"
              id="img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content-bg-1--ng" id="first">
      <div class="container">
        <div class="container__item">
          <h5 class="container__item__header" style="margin: 0">
            What's behind the curtain
          </h5>
          <p class="container__item__body">
            K-nearest neighbor algorithm is a classification method in which a
            class assignment is carried out taking into account its nearest
            neighbor. The learning part of things consist of sharing training
            examples with our algorithm and getting predictions in return.
          </p>
        </div>
        <div class="container__item">
          <h5 class="container__item__header">How we operate</h5>
          <p class="container__item__body">
            Our front-end website runs on the latest installment of Vue.js to
            create an appealing and user friendly visual look. We developed our
            backend with phyton using Flask as the framework of choice and
            created a PoC via Google Colaboratory Notebook.
          </p>
        </div>
        <div class="container__item">
          <h5 class="container__item__header">All in one place</h5>
          <p class="container__item__body">
            Just upload your Resume in PDF format on the 'get started' screen
            and receive a job recommendation right away! Not only can you see,
            which job might fit best to you, but you also get an overview of
            jobs in your area in one click!
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
            :src="require('/src/assets/undraw_file_analysis_8k9b.svg')"
            alt="Woman on PC"
            id="img2"
          />
          <p class="test">
            In the context of natural language processing, unstructured language
            data is converted into a structured data format. This should enable
            machines to identify and understand language and text in order to
            subsequently generate relevant answers.
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
.action-button {
  text-decoration: none;
  height: 50px;
  width: fit-content;
  background: var(--color-brand);
  border-radius: 20px;
  border: none;
  margin: 5%;
  padding: 10px 25px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color: var(--color-white-1);
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
}
#img {
  padding-top: 40px;
  width: 100%;
  height: auto;
}
.landing-page {
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 15px;
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
  width: 60%;
}
.test {
  font-size: var(--p);
  color: var(--body-background-txt);
  width: 40ch;
  text-align: left;
}

.img-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
