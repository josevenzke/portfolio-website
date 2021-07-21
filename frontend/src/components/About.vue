<template>
          <div class="right-column bottom">
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text" id="titulo">About Me</div>
                <div class="title-bar-controls">
                </div>
              </div>
              <div class="window-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vero similique luptatum dignissimos adipisci m dignissimos adipisci m dignissimos adipisci?</p>
                <Skills />
              </div>
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
}
</style>