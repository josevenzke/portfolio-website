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
                <div class="title-bar-text"> Portfolio.exe</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize" id="minimize"></button>
                  <button aria-label="Maximize" id="maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
                <div class="tab">
                  <button class="active">Teste</button>
                  <button>Teste</button>
                  <button>Teste</button>
                  <div class="last"></div>
                </div>
              <div class="window sub-window">
                <div class="about-container">
                  <Profile />
                  <About />
                </div>
              </div>
            </div>
            <!-- Fim Botoes Windows  -->
          </div>

        </div>
      <!-- Fim Principal -->
      </div>
      <div class="navbar">
        <div class="window" style="width:100%;">
          <div class="window-body">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import About from './components/About.vue'
import Profile from './components/Profile.vue'

export default {
  components: { 
    About,
    Profile
  },
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

.main-container{
    margin-top: 200px;
}
@media only screen and (max-width: 900px) {
  .main-container{
    margin-top: 50px;
  }
  .about-container {
    flex-direction: column;
    width: 100%;

  }
}

.sub-window{
  margin: 0px 5px 5px 5px;
  padding: 0px;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 0px #fff, 
  inset -2px -2px grey, 
  inset 2px 0px #dfdfdf;
}

.tab{
  display:flex;
  margin: 10px 5px 0px 5px;
}


.tab>button{
  box-shadow: inset -1px 0px #0a0a0a, inset 1px 0px #fff, 
  inset -2px 0px grey, 
  inset 2px 2px #dfdfdf,inset -2px -2px #dfdfdf,  inset -1px -1px #fff;
  border-radius: 4px 4px 0px 0px;
}
.last{
  width: 100%;
  box-shadow: inset 0px -2px #dfdfdf,  inset 0px -1px #fff;
  
  border-radius: 4px 4px 0px 0px;
}
.active{
  box-shadow: inset -1px 0px #0a0a0a, inset 1px 0px #fff, 
  inset -2px 0px grey, 
  inset 2px 2px #dfdfdf !important;
}
</style>
