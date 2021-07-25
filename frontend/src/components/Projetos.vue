<template>
    <div>
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text" id="titulo">Sorting Visualizer.exe</div>
            </div>
            <div class="window-body">
                <img src="images/logo.jpg" id="project-pic" alt="My photo">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae quis non ex aperiam facere optio unde provident aliquid nihil maxime sequi neque, facilis, exercitationem necessitatibus rerum labore, corporis officiis?</p>
                <div class="de-flex"><button>Github</button> <button>Demo</button></div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.window{
    width: 400px;
    margin-top:30px;
}
#project-pic{
    margin-top: 15px;
    width: 350px;
    height: 200px;
}
div>p{
    text-align: justify;
    margin: 15px;
}

.de-flex{
    display:flex;
}

</style>