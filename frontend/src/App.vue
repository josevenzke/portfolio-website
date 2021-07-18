<template>
<div>
  <div class="main-container">
        <!-- Principal -->

        <div class="intro-wrapper">
          <!-- Barra de cima -->
          <div class="nav-wrapper">
            <!-- Menu Nav -->
            <div class="window" style="width: 100%">
              <div class="title-bar">
                <div class="title-bar-text"></div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize" id="minimize"></button>
                  <button aria-label="Maximize" id="maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
            </div>
            <!-- Fim Botoes Windows  -->
          </div>
            <About />
          </div>
      <!-- Fim Principal -->
      </div>
      <div class="navbar">
        <div class="window" style="width:100%;">
          <div class="window-body">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
       </div>
      </div>
</div>
</template>

<script>
import About from './components/About.vue'

export default {
  components: { About },
  name: 'App',
  metaInfo:{
    title: 'Default Title',
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
