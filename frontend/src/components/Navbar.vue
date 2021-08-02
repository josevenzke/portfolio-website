<template>
    <div class="navbar">
        <div class="botoes">
            <button class="button-iniciar"><img src="../../public/images/start-button.png"></button>
            <button v-if="show" @click="openPortfolio()">Portfolio</button>
        </div>
        <span class="right-content"><div class="icons"><img src="../../public/images/sound-icon.png"><img src="../../public/images/calendar-icon.png"></div>{{time}} <div class="clock"><img src="../../public/images/clock-icon.png"></div> </span>
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
            var ampm = hours >= 12 ? 'PM' : 'AM';
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
  height: 25px;
  padding: 2px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: silver;
}

.botoes{
    float: left;
}

.button-iniciar{
    width: 70px !important;
    height: 21px !important;
    margin-left: 3px !important;
    margin-top: 2px !important;
    font-size: 12px;
    min-width: 0px !important;
    min-height: 0px !important;
}

.separador{
    height: 25;
}

.right-content{
    display: flex;
    padding: 2px 0 6px;
    border-top: 1px solid #000;
    height: 13px;
    width: 130px;
    margin: 1px 10px 0px 0px;
    font-size: 12px;
    border-left: 1px solid #000;
    box-shadow: inset 1px 1px grey;
    float: right;
    background-color: silver;
    vertical-align: middle;
    line-height: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.icons{
    margin:1px 16px 0px 8px;
}
.clock{
    margin:1px 8px 0px 4px;
}

</style>