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
                <div class="title-bar-text"><a href="index.html"><button disabled>Sobre</button></a> <a href="project.html"><button>Projetos</button></a> <a href="contato.html"><button>Contato</button></a></div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize" id="minimize"></button>
                  <button aria-label="Maximize" id="maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
            </div>
            <!-- Fim Botoes Windows  -->
          </div>
          <!-- Fim Barra de Cima -->

          <!-- Seção Esquerda -->
          <div class="left-column bottom" >
            <img src="images/logo.jpg" id="profile_pic" alt="My photo">
            <h5 class="name-title">José Venzke</h5>
            <p id="settings-note">Fullstack Software Developer</p>
            <div id="theme-options-wrapper">
              <div class="ico"><i class="fab sub-icon fa-linkedin"></i></div>
              <div class="ico"><i class="fab sub-icon fa-github-square"></i></div>
            </div>
            
          </div>
          <!-- Fim Seção Esquerda -->

          <!-- Seção Direita -->
          <div class="right-column bottom">
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text" id="titulo">About Me</div>
                <div class="title-bar-controls">
                </div>
              </div>
              <div class="window-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,sse</p>
              </div>
            </div>
          </div>
          <!-- Fim Seção Direita -->
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

export default {
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
