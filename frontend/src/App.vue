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
                  <button @click="setActive('sobre')" :class="{ active: isActive('sobre')}">Sobre</button>
                  <button @click="setActive('projetos')" :class="{ active: isActive('projetos')}">Projeto</button>
                  <button @click="setActive('contato')" :class="{ active: isActive('contato')}">Contato</button>
                  <div class="last"></div>
                </div>
              <div class="window sub-window">
                <div v-show="isActive('sobre')">
                  <AboutTab />
                </div>
                <div v-show="isActive('projetos')">
                  <Projetos />
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
import AboutTab from './components/AboutTab.vue'
import Projetos from './components/Projetos.vue'

export default {
  name: 'App',
  components: { 
    AboutTab,
    Projetos
  },
  data(){
    return{
      activeTab: 'sobre',
    }
  },
  methods:{
    isActive(tab){
      if (tab == this.activeTab){
        return true
      }
      return false
    },
    setActive(tab){
      this.activeTab = tab
    }
  }

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
    margin: 200px auto 0px auto;
    max-width: 1200px;
    
}

@media only screen and (max-width: 1250px) {
  .main-container{
    margin: 200px  auto 0px auto;
    width: 1000px;
  }
}


@media only screen and (max-width: 1050px) {
  .main-container{
    margin: 50px  auto 0px auto;
    width: 800px;

  }
}

@media only screen and (max-width: 880px) {
  .main-container{
    margin: 50px  auto 0px auto;
    width: 600px;

  }
}

@media only screen and (max-width: 700px) {
  .main-container{
    margin: 50px  auto 0px auto;
    width: 500px;

  }
}

@media only screen and (max-width: 580px) {
  .main-container{
    margin: 50px  auto 0px auto;
    width: 450px;

  }
}



.sub-window{
  margin: 0px 15px 15px 15px;
  padding: 0px;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 0px #fff, 
  inset -2px -2px grey, 
  inset 2px 0px #dfdfdf;
}

.tab{
  display:flex;
  margin: 10px 15px 0px 15px;
}


.tab>button{
  box-shadow: inset -1px 0px #0a0a0a, inset 1px 0px #fff, 
  inset -2px 0px grey, 
  inset 2px 2px #dfdfdf,inset -2px -2px #dfdfdf,  inset -1px -1px #fff;
  border-radius: 4px 4px 0px 0px;
}
.tab>button:focus{
  border: 0px;
  outline:none;
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
