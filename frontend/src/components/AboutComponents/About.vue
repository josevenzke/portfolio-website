<template>

  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text" id="titulo">About Me.txt</div>
      <div class="title-bar-controls">
      </div>
    </div>
    <div class="window-body">
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed voluptatibus optio quidem mollitia amet omnis! Velit aperiam itaque culpa tempora sequi error ipsum illum mollitia cupiditate labore, eum aspernatur. </p>
      <Skills />
      <a href="files/CV - José Venzke.pdf" download=""><button class="curriculo-download">Curriculo <i class="fas fa-download"></i></button></a>
    </div>
  </div>

</template>

<script>
import Skills from './Skills.vue'

export default {
  name:'About',
  components:{
    Skills,
  }
}
</script>


<style scoped>
.window-body>p{
  text-align: justify;
  letter-spacing: -0.5px;
  font-size: 16px;
}
.curriculo-download{
  width: 170px;
  font-size: 14px;
}
</style>