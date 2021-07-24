<template>

            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text" id="titulo">About Me</div>
                <div class="title-bar-controls">
                </div>
              </div>
              <div class="window-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae quis non ex aperiam facere optio unde provident aliquid nihil maxime sequi neque, facilis, exercitationem necessitatibus rerum labore, corporis officiis?</p>
                <Skills />
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