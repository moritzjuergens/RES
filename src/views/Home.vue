<template>
  <div class="home">
    <div class="landingpage">
      <h1>Welcome to RES</h1>
      <p>The Resumé Evaluation System</p>
    </div>
    <div class="content">
      <h4>Add your Resumé!</h4>
      <div class="file-upload">
        <p>Click the plus button or drag your file here</p>
      </div>
    </div>
    <div class="landingpage">
      <h3>Get your Resumé Score now!</h3>
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
.home {
  font-size: 3.5rem;
  color: whitesmoke;
}
.landingpage {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content {
  max-width: 100%;
  min-height: 60vh;
  height: fit-content;
  padding: 50px;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin: 0 0 50px 0;
    color: var(--on-bg);
  }
}
.file-upload {
  width: 60%;
  height: 20vh;
  padding: 50px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-radius: 12px;
  border: var(--on-bg) 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
  p {
    font-size: 1.2rem;
  }
}
</style>
