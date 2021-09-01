<template>
<div class="de-flex">
    <div>
        <ul class="tree-view">
            <li>
                {{ $t('aboutTab.skills.programming') }}
                <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>SQL</li>
                <li>VueJS</li>
                <li>Django</li>
                <li>HTML/CSS</li>
                </ul>
            </li>
        </ul>
    </div>
    <div>
        <ul class="tree-view">
            <li>
                {{ $t('aboutTab.skills.others') }}
                <ul>
                <li>Linux</li>
                <li>Docker</li>
                <li>Web Scrapping</li>
                </ul>
            </li>
            <li>
                {{ $t('aboutTab.skills.languages') }}
                <ul>
                <li> {{ $t('aboutTab.skills.portuguese') }}</li>
                <li> {{ $t('aboutTab.skills.english') }}</li>
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
    font-size: 14px;
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