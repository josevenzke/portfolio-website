<template>

  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text" id="titulo">About Me.txt</div>
      <div class="title-bar-controls">
      </div>
    </div>
    <div class="window-body">
      <p>{{ $t('aboutTab.description') }}</p>
      <Skills />
      <a :href="$t('aboutTab.resume-url')" download=""><button class="curriculo-download">{{ $t('aboutTab.resume') }} <i class="fas fa-download"></i></button></a>
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