<template>
  <transition name="fade">
    <div v-if="showText" class="clippy">
      <p class="clippy-text">
        Você pode abrir o Portfolio<br />
        clicando no icone a esquerda
      </p>
      <img src="../../public/images/clippy.png" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "TextHelper",
  data() {
    return {                            
        showText: false, 
    };
  },
  created(){
      this.textHelp()
  },
  methods: {
    async textHelp() {
        await this.sleep(500)
        this.showText = true
        await this.sleep(4000)
        this.showText = false
        },
    sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
        },
    }
}
</script>

<style scoped>
.clippy {
  position: relative;
  width: 207px;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
}
.clippy-text {
  position: absolute;
  top: 3px;
  left: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
