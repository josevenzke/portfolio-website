<template>
    <div class="navbar">
        <div class="botoes">
            <button class="button-iniciar">Ico</button>
            <button v-if="show" @click="openPortfolio()">Portfolio</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Navbar',
    props: ['showButton'],
    data(){
        return{
            show: this.showButton
        }
    },
    methods:{
        openPortfolio(){
            this.$emit('clicked')
        }
    }

}
</script>

<style scoped>

.navbar {
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
  overflow: hidden;
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: silver;
}

.botoes{
    float: left;
    margin-top: 7.5px;
    margin-left: 10px;
}

.button-iniciar{
    width: 40px !important;
    min-width: 0px !important;
    margin-right: 20px;
}




</style>