<template>
<div class="de-flex">
    <div>
        <ul class="tree-view">
            <li>
                Conhecimentos:
                <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>HTML/CSS</li>
                <li>Docker</li>
                </ul>
            </li>
        </ul>
    </div>
    <div>
        <ul class="tree-view">
            <li>
                Outras Habilidades:
                <ul>
                <li>Django</li>
                <li>Vue JS</li>
                <li>Django RestFramework</li>
                <li>Selenium</li>
                <li>Linux</li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>
.de-flex{
    display: flex;
    justify-content: space-around;
}

ul{
    text-align: left;
    margin-bottom: 10px;
}
.tree-view{
    width: 200px;
}

@media only screen and (max-width: 1000px) {
  .tree-view{
      width: 150px;
  }
  .de-flex{
      display: block;
  }
  .de-flex>div>ul{
    margin:auto;
    margin-bottom: 10px;
  }
}

</style>