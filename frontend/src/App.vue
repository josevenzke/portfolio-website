<template>
<div>
  <div class="icone" @dblclick="openWindow()">
    <img src="../public/images/portfolio-icon.png" id="desktop-icon-image">
    <p id="desktop-icon-text" tabindex="0">Portfolio</p>
  </div>
  <div v-if="!mobile && showHelper">
    <TextHelper/>
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
                  <div v-if="!mobile" class="title-bar-controls">
                    <button @click="minimizeWindow()" aria-label="Minimize" id="minimize"></button>
                    <button aria-label="Maximize" id="maximize"></button>
                    <button @click="closeWindow()" aria-label="Close" id="close"></button>
                  </div>
                </div>
                  <div class="tab">
                    <button @click="setActive('sobre')" :class="{ active: isActive('sobre')}">{{ $t('tabs.sobre') }}</button>
                    <button @click="setActive('projetos')" :class="{ active: isActive('projetos')}">{{ $t('tabs.projetos') }}</button>
                    <button @click="setActive('contato')" :class="{ active: isActive('contato')}">{{ $t('tabs.contato') }}</button>
                    <div class="last"></div>
                  </div>
                <div class="window sub-window">
                  <div v-show="isActive('sobre')">
                    <AboutTab />
                  </div>
                  <div v-show="isActive('projetos')">
                    <ProjetosTab />
                  </div>
                  <div v-show="isActive('contato')">
                    <ContatoTab />
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
        <Navbar :showButton="showButton" :activeButton="activeButton" :key="attButton" @clicked="maximizeWindow()" />
      </div>
</div>
</template>

<script>
import AboutTab from './components/AboutTab.vue'
import ProjetosTab from './components/ProjetosTab.vue'
import ContatoTab from './components/ContatoTab.vue'
import Navbar from './components/GeneralComponents/Navbar.vue'
import TextHelper from './components/GeneralComponents/TextHelper.vue'

export default {
  name: 'App',
  components: { 
    AboutTab,
    ProjetosTab,
    ContatoTab,
    Navbar,
    TextHelper,
  },
  data(){
    return{
      activeTab:'sobre',
      attButton:0,
      showPortfolio: false,
      showButton: false,
      activeButton: false,
      showHelper: true,
      mobile: false,
    }
  },
  created(){
    this.isMobile()
    window.addEventListener("resize", this.isResized)
  },
  methods:{
    isMobile(){
      if(window.innerWidth < 1050) {
          this.mobile = true
          this.showPortfolio = true
      }
    },
    isResized(){
      if(window.innerWidth < 1050) {
          this.mobile = true
          this.showPortfolio = true
      }else {
          this.mobile = false
          this.showHelper = true
          this.showButton = false
          this.activeButton = false
          this.showPortfolio = false
          this.attButton +=1

      }
    },
    isActive(tab){
      if (tab == this.activeTab){
        return true
      }
      return false
    },
    openWindow(){
      this.showPortfolio = true
      this.showButton = true
      this.activeButton = true
      this.showHelper = false
      this.attButton +=1
    },
    closeWindow(){
      this.showPortfolio = false
      this.showButton = false
      this.activeButton = false
      this.activeTab ='sobre'
      this.attButton +=1
    },
    minimizeWindow(){
      this.showPortfolio = false
      this.showButton = true
      this.activeButton = false
      this.attButton +=1
    },
    maximizeWindow(){
      this.showPortfolio = !this.showPortfolio
      this.showButton = true
      this.activeButton = !this.activeButton
      this.attButton +=1
    },
    setActive(tab){
      this.activeTab = tab
    },
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
  cursor: url('../public/images/cursor/cursor-padrao.png'), auto !important;
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
  height: 80px;
  top: 20px;
  left: 20px;
  padding: 5px 10px 0px 10px;
}
.icone:hover{
  cursor: url('../public/images/cursor/cursor-clickable.png'), auto;
}

#desktop-icon-image{
  width: 50px;
  height: 50px;
  float: left;
}

#desktop-icon-text{
  margin-top: 58px !important;
  color: white;
  font-family: "MS Sans Serif",Arial !important;
  font-size: 13px !important;
}

.title-bar-text {
  font-size: 14px;
  margin-left: 5px;
}
button:hover{
  cursor: url('../public/images/cursor/cursor-clickable.png'), auto;
}

#maximize{
  margin-left: 2px;
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
    width: 300px;

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
