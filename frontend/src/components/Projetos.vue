<template>

<div class="projetos-tab">
    <div class="window teste sortvisu">
        <div class="title-bar">
            <div class="title-bar-text" id="titulo">Sorting Visualizer.exe</div>
                <div class="title-bar-controls">
                </div>
            </div>
        <div class="window-body">
            <img src="../assets/sortvisualizer.gif" class="projeto-imagem">
            <p>Projeto feito para a visualização de algoritmos de ordenação, implementa bubblesort, mergesort e quicksort, usando conceitos de design patterns e a biblioteca Tkinter </p>
            <div class="projeto-botoes">
                <a href="https://github.com/josevenzke/sort-visualizer"><button id="github">Github</button></a>
                <button>Demo</button>
            </div>
        </div>
    </div>

    <div class="window teste chess">
        <div class="title-bar">
            <div class="title-bar-text" id="titulo">Chess Engine.exe</div>
                <div class="title-bar-controls">
                </div>
            </div>
        <div class="window-body">
            <img src="../assets/chess.gif" class="projeto-imagem">
            <p>Engine e jogo de xadrez, capaz de fazer movimentos, inclusive de casos especiais, calcular posições e salvar historico, feito usando pygame em multi-trheading </p>
            <div class="projeto-botoes">
                <a href="https://github.com/josevenzke/chess-engine"><button id="github">Github</button></a>
                <button>Demo</button>
            </div>
        </div>
    </div>

    <div class="window teste something">
        <div class="title-bar">
            <div class="title-bar-text" id="titulo">Sorting Visualizer.exe</div>
                <div class="title-bar-controls">
                </div>
            </div>
        <div class="window-body">
            <img src="../assets/logo.png" class="projeto-imagem">
            <p>Programador, cristao e pai de familia, melhor speedrunner de minecraft da região, bi-campeão de pebolim nas olimpiadas escolares da Escola de Ensino Médio Tuiuti </p>
            <div class="projeto-botoes">
                <a href="https://github.com/josevenzke/sort-visualizer"><button id="github">Github</button></a>
                <button>Demo</button>
            </div>
        </div>
    </div>

</div>

</template>

<style scoped>

.projetos-tab{
    display: flex;
}

@media only screen and (max-width: 1050px) {
  .projetos-tab{
    flex-direction: column;
  }
  .teste{
      margin:auto !important;
      margin-top: 20px !important;
  }
}

.projeto-imagem{
    margin-top: 10px;
    width: 250px;
    height: 120px;
    border: 2px solid grey;
}
.projeto-botoes{
    display: flex;
    flex-direction: row-reverse;
}

div>p{
    text-align: justify;
    margin: 15px;
}

.de-flex{
    display:flex;
}

.teste{
    margin: 20px;
    width: 350px;
}

#github{
    margin-right: 10px;
}

</style>