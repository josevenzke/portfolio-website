<template>
    <div class="navbar">
        <div class="botoes">
            <button class="button-iniciar">Start</button>
            <button v-if="show" @click="openPortfolio()">Portfolio</button>
        </div>
        <div class="right-content">{{time}}</div>
    </div>

</template>

<script>
export default {
    name: 'Navbar',
    props: ['showButton'],
    data(){
        return{
            show: this.showButton,
            time: 'as',
        }
    },
    created(){
        this.getTime()
    },
    mounted(){
        setInterval(() => { this.getTime() }, 10000)
    },
    methods:{
        openPortfolio(){
            this.$emit('clicked')
        },
        getTime(){
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            this.time = strTime;
        }
    }

}
</script>

<style scoped>

.navbar {
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
  overflow: hidden;
  height: 35px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: silver;
}

.botoes{
    float: left;
    margin-top: 5px;
    margin-left: 10px;
}

.button-iniciar{
    width: 80px !important;
    height: 25px !important;
    min-width: 0px !important;
    margin-right: 20px;

}

.separador{
    height: 25;
}

.right-content{
    float: right;
    margin-right: 30px;
    margin-top:10px
}

</style>