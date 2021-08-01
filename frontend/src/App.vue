<template>
<div>
  <div class="icone" @dblclick="openWindow()">
    <img src="../public/images/portfolio.png" id="desktop-icon-image">
    <p id="desktop-icon-text">Portfolio</p>
  </div>
  <div class="main-container">
        <!-- Principal -->
        <div class="intro-wrapper">
          <!-- Barra de cima -->
          <transition name="fade">
            <div v-if="showPortfolio" class="nav-wrapper">
              <!-- Menu Nav -->
              <div class="window" style="width: 100%">
                <div class="title-bar">
                  <div class="title-bar-text"> Portfolio.exe</div>
                  <div class="title-bar-controls">
                    <button @click="minimizeWindow()" aria-label="Minimize" id="minimize"></button>
                    <button aria-label="Maximize" id="maximize"></button>
                    <button @click="closeWindow()" aria-label="Close"></button>
                  </div>
                </div>
                  <div class="tab">
                    <button @click="setActive('sobre'),updateRoute('/sobre')" :class="{ active: isActive('sobre')}">Sobre</button>
                    <button @click="setActive('projetos'),updateRoute('/projetos')" :class="{ active: isActive('projetos')}">Projetos</button>
                    <button @click="setActive('contato'),updateRoute('/contato')" :class="{ active: isActive('contato')}">Contato</button>
                    <div class="last"></div>
                  </div>
                <div class="window sub-window">
                  <div v-show="isActive('sobre')">
                    <AboutTab />
                  </div>
                  <div v-show="isActive('projetos')">
                    <Projetos />
                  </div>
                  <div v-show="isActive('contato')">
                    <Contato />
                  </div>
                </div>
              </div>
              <!-- Fim Botoes Windows  -->
            </div>
          </transition>
        </div>
      <!-- Fim Principal -->
      </div>
      <div class="navbar">
        <Navbar :showButton="showButton" :key="showButton" @clicked="maximizeWindow()" />
      </div>
</div>
</template>

<script>
import AboutTab from './components/AboutTab.vue'
import Projetos from './components/Projetos.vue'
import Contato from './components/Contato.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { 
    AboutTab,
    Projetos,
    Contato,
    Navbar
  },
  data(){
    return{
      activeTab:'sobre',
      showPortfolio: true,
      showButton: false,
    }
  },

  methods:{
    isActive(tab){
      if (tab == this.activeTab){
        return true
      }
      return false
    },
    openWindow(){
      this.showPortfolio = true
      this.showButton = false
    },
    closeWindow(){
      this.showPortfolio = false
    },
    minimizeWindow(){
      this.showPortfolio = false
      this.showButton = true
    },
    maximizeWindow(){
      this.showPortfolio = true
      this.showButton = false
    },
    setActive(tab){
      this.activeTab = tab
    },
    updateRoute (route) {
      this.$router.push({ path: route })
      console.log(this.$route)
      
    }
  }

}
</script>

<style>
@font-face {
  font-family: "MSGothic";
  src: local("MSGothic"),
   url(./fonts/MSGothic.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title-bar, .window, button, input, label, option, select, textarea, ul.tree-view{
  font-family: "MSGothic" !important;
}

body{
  margin: 0px;
  padding: 0px;
}

h1 {font-size: 56px;}
h2 {font-size: 36px;}
h3 {font-size: 28px;}
h4 {font-size: 24px;}
h5 {font-size: 20px;}
h6 {font-size: 16px;}

.s1 {
  background-color: #008081;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-container{
    margin: 200px auto 0px auto;
    max-width: 1200px;
    
}
.icone{
  position: absolute;
  top: 20px;
  left: 20px;
}

#desktop-icon-image{
  width: 50px;
  height: 50px;
  float: left;
}
#desktop-icon-text{
  padding-top: 45px !important;
  color: white;
  font-family: "MS Sans Serif",Arial !important;
  font-size: 13px !important;
}

.title-bar-text {
  font-size: 14px;
  margin-left: 5px;
}


@media only screen and (max-width: 1250px) {
  .main-container{
    margin-top: 200px;
    width: 1000px;
  }
}


@media only screen and (max-width: 1050px) {
  .main-container{
    margin-top: 50px;
    margin-bottom: 30px;
    width: 800px;
  }
  .navbar{
    display: none;
  }
  .icone{
    display: none;
  }
}

@media only screen and (max-width: 880px) {
  .main-container{
    margin-top: 50px;
    width: 600px;

  }
}

@media only screen and (max-width: 700px) {
  .main-container{
    margin-top: 50px;
    width: 500px;

  }
}

@media only screen and (max-width: 580px) {
  .main-container{
    margin-top: 50px  auto 0px auto;
    width: 450px;

  }
}



.sub-window{
  margin: 0px 15px 15px 15px;
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
  font-size: 12.5px;
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
