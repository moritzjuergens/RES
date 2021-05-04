<template>
  <div class="home page">
    <div class="content-bg-0">
      <h1 class="page__header">Welcome to RES</h1>
      <p class="page__sub">The Resumé Evaluation System</p>
      <button class="action-button"><p>Get started here!</p></button>
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
  border-radius: 50px;
  border: none;
  margin: 5%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color: var(--on-bg);
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  p {
    font-size: 2rem;
    background: linear-gradient(67deg, #0897ea 0%, #59ff18 100%);
    background-size: 300%;
    background-position: left;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    transition: all 0.2s ease;
  }
  &:hover {
    transform: scale(1.05);
    p {
      background-position: right;
    }
  }
  &:focus {
    outline: none;
    transform: scale(1.05);
    p {
      background-position: right;
    }
  }
}
</style>
