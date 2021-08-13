<template>

  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text" id="titulo">About Me.txt</div>
      <div class="title-bar-controls">
      </div>
    </div>
    <div class="window-body">
      <p>Sou um desenvolvedor de software de 22 anos, atualmente cursando o ultimo semestre do curso de Ciência da Computação, apaixonado por novas tecnologias, auto-didata e com sede de conhecimento. </p>
      <Skills />
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

</style>