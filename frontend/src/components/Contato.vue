<template>
    <div class="container-flex">
        <div class="contato-container">
            <form class="contato-form" method="post">
                <label for="nome">Nome:</label>
                <input type="text" name="nome">

                <label for="assunto">Assunto:</label>
                <input type="text" name="assunto">

                <label for="email">Email:</label>
                <input type="email" name="email">

                <label for="mensagem">Mensagem:</label>
                <textarea id="text-input" name="mensagem"></textarea>
            </form>

            <button id="button-email" type="submit" form="contact-form" value="Submit">Enviar</button>
        </div>
        <div class="image-container">
            <img id="side-image" src="images/pc_pic.png" alt="">
        </div>
    </div>              
</template>

<style scoped>
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

@media only screen and (max-width: 1050px) {
    .image-container{
        display: none;
    }
    .contato-container{
        width: 100%;
    }
}
</style>