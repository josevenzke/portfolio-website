<template>

  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text" id="titulo">About Me.txt</div>
      <div class="title-bar-controls">
      </div>
    </div>
    <div class="window-body">
      <p> Desenvolvedor Web Fullstack, experencia com a linguagem de negocios e com o ciclo completo de desenvolvimento, de API's até ao web design. Apaixonado por algoritmos, estruturas de dados e projetos open source. Sempre a procura de novos desafios, tem alguma idea? entre em contato! </p>
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