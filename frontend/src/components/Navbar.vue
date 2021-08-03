<template>
    <div class="navbar">
        <div class="botoes">
            <button id="button-iniciar"><img src="../../public/images/start-button.png"></button>
            <button class="button-portfolio" v-if="showButton" :class="{ ativo: active }" @click="openPortfolio()"><img src="../../public/images/portfolio.png"> <span>Portfolio - José Venzke</span></button>
        </div>
        <span class="right-content"><img src="../../public/images/sound-icon.png" id="sound-icon"><img src="../../public/images/calendar-icon.png" id="calendar-icon">{{time}} <div class="clock"><img src="../../public/images/clock-icon.png"></div> </span>
    </div>

</template>

<script>
export default {
    name: 'Navbar',
    props: ['showButton','activeButton'],
    data(){
        return{
            show: this.showButton,
            active: this.activeButton,
            time: '',
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
    display: flex;
}

button:focus{
    outline:none;
}
#button-iniciar{
    width: 70px !important;
    height: 21px !important;
    margin-left: 3px !important;
    margin-top: 2px !important;
    font-size: 12px;
    min-width: 0px !important;
    min-height: 0px !important;
}

.button-portfolio{
    display: flex;
    width: 220px !important;
    height: 21px !important;
    margin-left: 20px !important;
    margin-top: 2px !important;
    font-size: 12px;
    min-width: 0px !important;
    min-height: 0px !important;
}

.ativo{
    box-shadow: inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey;
}

.button-portfolio>img{
    height: 16px;
    margin-top:2px
}
.button-portfolio>span{
    margin-top:3px;
    margin-left: 15px;
    font-size: 14px;
}

.separador{
    height: 25;
}

.right-content{
    display: flex;
    padding: 2px 0 6px;
    border-top: 1px solid #000;
    height: 13px;
    width: 145px;
    margin: 1px 10px 0px 0px;
    border-left: 1px solid #000;
    box-shadow: inset 1px 1px grey;
    float: right;
    background-color: silver;
    vertical-align: middle;
    line-height: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
#calendar-icon{
    margin:1px 12px 0px 4px;
    height: 16px;
}
#sound-icon{
    margin:1px 4px 0px 8px;
    height:16px;
}
.clock{
    margin:1px 8px 0px 8px;
}

</style>