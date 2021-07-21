<template>
<div class="de-flex">
    <div class="left-column">
        <ul class="tree-view">
            <li>Table of Contents</li>
            <li>What is web development?</li>
            <li>
                CSS
                <ul>
                <li>Selectors</li>
                <li>Specificity</li>
                <li>Properties</li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="right-column">
        <ul class="tree-view">
            <li>
                <details open>
                <summary>JavaScript</summary>
                <ul>
                    <li>Avoid at all costs</li>
                    <li>
                    <details>
                        <summary>Unless</summary>
                        <ul>
                        <li>Avoid</li>
                        <li>
                            <details>
                            <summary>At</summary>
                            <ul>
                                <li>Avoid</li>
                                <li>At</li>
                                <li>All</li>
                                <li>Cost</li>
                            </ul>
                            </details>
                        </li>
                        <li>All</li>
                        <li>Cost</li>
                        </ul>
                    </details>
                    </li>
                </ul>
                </details>
            </li>
            <li>HTML</li>
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
}

</style>