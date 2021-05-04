<template>
  <div class="home">
    <div class="landingpage">
      <h1>Welcome to RES</h1>
      <p>The Resumé Evaluation System</p>
      <button class="action-button"><p>Get started here!</p></button>
    </div>
    <div class="content">
      <h4>Add your Resumé!</h4>
      <div class="file-upload">
        <p>Click the plus button or drag your file here</p>
      </div>
    </div>
    <div class="landingpage">
      <h3>Resumé Score:</h3>
      <p>73%</p>
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
  p {
    font-size: 2rem;
    margin: 1%;
  }
  h1 {
    margin: 1%;
  }
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
