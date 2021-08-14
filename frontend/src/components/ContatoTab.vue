<template>
    <div class="container-flex">
        <div class="contato-container">
            <form v-if="showForm" class="contato-form" @submit.prevent="sendEmail">
                <label for="nome">Nome:</label>
                <input type="text" v-model="nome" name="name">

                <label for="assunto">Assunto:</label>
                <input type="text" v-model="assunto" name="subject">

                <label for="email">Email:</label>
                <input type="email" v-model="email" name="email">

                <label for="mensagem">Mensagem:</label>
                <textarea id="text-input" v-model="mensagem" name="message"></textarea>

                <button id="button-email" type="submit">Enviar</button>
            </form>
            <div class="loader-container" v-else>
                <div class="container">
                    <div class="shape shape-1"></div>
                    <div class="shape shape-2"></div>
                    <div class="shape shape-3"></div>
                    <div class="shape shape-4"></div>
                </div>
            </div>       
        </div>
        <div class="image-container">
            <img id="side-image" src="images/contato-pc.png" alt="">
        </div>
    </div>              
</template>

<script>
import emailjs from "emailjs-com";

export default {
    name:'Contato',
    data(){
        return{
            nome: '',
            assunto: '',
            email: '',
            mensagem:'',
            showForm:true,
        }
    },
    methods:{
        async sendEmail(e){

            try {
                this.showForm = false
                emailjs.sendForm('service_p8k8o66', 'template_dymoewm', e.target, 'user_vwfDKiHRiSlppEsb2rCF2', {
                name: this.nome,
                email: this.email,
                message: this.mensagem,
                subject: this.assunto,
                })
                console.log(this.showForm)
                this.resetForm()
                await this.sleep(3000)
                this.showForm = true
            } catch (error) {
                console.log({error})
                }
            },
        resetForm(){
            this.nome = ''
            this.email = ''
            this.mensagem = ''
            this.assunto = ''
        },
        sleep(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        },
  }
}

</script>


<style scoped>
@import '/css/loader.css';

.container-flex{
    display: flex;
}
.contato-form>label{
    font-size: 16px;
    float: left;
    margin: 7px 0px 7px 0px
}

.contato-form>input{
    display: block;
    width: 100%;
    font-size:16px
}

.contato-container{
    width: 50%;
    margin: 15px 20px 20px 20px;
    font-size: 16px;
}

#text-input{
    width: 100%;
    height: 80px;
    font-size: 16px;
}

#button-email{
    margin-top: 10px;
    width: 300px !important;
    font-size: 16px;
    padding: 6px !important;
}
.image-container{
    margin: auto;
}
#side-image{
    border: 2px solid black;
    width: 350px;
    height: 280px;
    margin-top: 30px 10px 30px 10px;
    background-position: no-repeat;
}

.loader-container{
    height: 200px;
}


@media only screen and (max-width: 1050px) {
    .image-container{
        display: none;
    }
    .contato-container{
        width: 100%;
    }
}
</style>