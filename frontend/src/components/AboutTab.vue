<template>
    <div class="about-container">
        <div class="left-column">
            <Profile />
        </div>
        <div class="right-column">
            <About />
        </div>
    </div>
</template>

<script>
import Profile from './Profile.vue'
import About from './About.vue'

export default {
    name:'AboutTab',
    components:{
        Profile,
        About
    }
}
</script>

<style scoped>

.about-container{
  display: flex;
  justify-content: space-around;
}
.right-column{
  margin:50px 20px 40px 20px;
  width: 600px;
}

.left-column{
    margin: 50px 20px 20px 20px;
}



@media only screen and (max-width: 1000px) {
    .right-column{
      width: 300px;
    }
    .left-column{
      margin-top:auto;
      margin-bottom: auto;
    }
}

@media only screen and (max-width: 880px) {

  .about-container {
    flex-direction: column;
    width: 100%;
  }
  .left-column{
    margin-top:30px;
    margin-bottom: 30px;
  }
  .right-column{
    width: 360px;
    margin: auto;
    margin-bottom: 20px;
  }
}

</style>