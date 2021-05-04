<template>
  <div class="page">
    <div class="content-bg-1">
      <h4 class="content-bg-1__header">Add your Resumé!</h4>
      <div class="file-upload">
        <p>Click the plus button or drag your file here</p>
      </div>
    </div>
    <div class="content-bg-0">
      <h3>Resumé Score:</h3>
      <p>73%</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Get Started",
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
</style>
