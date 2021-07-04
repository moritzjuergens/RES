<template>
  <div class="about">
    <div class="content-bg-0">
      <h1 class="content-bg-0__header">About us</h1>
      <p>
        You haven't found the perfect job yet? You want to write a meaningful
        and visually appealing application, but you don't know how?
      </p>
      <p>
        To get closer to this goal, are you looking for an application service
        that will provide you with a professional and individual evaluation of
        your application documents? Then you are right with us!
      </p>
      <p>
        Sie haben den perfekten Job noch nicht gefunden? Sie wollen eine
        aussagekräftige und optisch ansprechende Bewerbung schreiben, aber
        wissen nicht wie?
      </p>
      <p>
        Um diesem Ziel näher zu kommen, suchen Sie einen Bewerbungsservice, der
        Ihnen eine professionelle und individuell Auswertung Ihrer
        Bewerbungsunterlagen zurückliefert? Dann sind Sie bei uns richtig!
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
    <div class="content-bg-0">
      <h1 class="content-bg-0__sub">Our Team</h1>
      <p>Mohammed Haidarah <br />Moritz Jürgens <br />Gökalp Yildiz</p>

      <h1 class="content-bg-0__sub">Our Code</h1>
      <p>
        Our KNN Proof of Concept at
        <a
          href="https://colab.research.google.com/drive/1pilL-yA8I_EpQiuUMDdt-gHFJKOV6NsV?usp=sharing"
          >Google Colaboratory</a
        >
        <br />
        Our
        <a href="https://github.com/moritzjuergens/RES-Frontend">Frontend</a>
        Repository<br />
        and our
        <a href="https://github.com/moritzjuergens/RES-Backend">Backend</a>
        Repository
      </p>
    </div>
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
  color: var(--body-background-txt);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__img {
  width: 100px;
  height: auto;
  margin: 25px;
}
p {
  width: 70ch;
  text-align: left;
}
a:link,
a:visited,
a {
  color: var(--color-info);
}
</style>
