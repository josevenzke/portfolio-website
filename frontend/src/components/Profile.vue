<template>
    <div>
        <img src="images/logo.jpg" id="profile_pic" alt="My photo">
        <h5 class="name-title">Jose Venzke</h5>
        <p id="settings-note">Fullstack Software Developer</p>
        <div id="theme-options-wrapper">
            <div class="ico"><i class="fab sub-icon fa-linkedin"></i></div>
            <div class="ico"><i class="fab sub-icon fa-github-square"></i></div>
        </div>
    </div>        
</template>

<style scoped>

#profile_pic{
  display: block;
  margin: 0 auto;
  height:200px;
  width: 200px;
  object-fit: cover;
  border: 2px solid var(--borderColor);
}

.name-title{
  font-family: "Pixelated MS Sans Serif",Arial;
  text-align: center;
  line-height:0;
  margin-top:25px;
  margin-bottom: 15px;
}

.ico{
  margin-right: 6px;
}

.sub-icon{
  font-size: 35px;
}

#theme-options-wrapper{
  display: flex;
  justify-content: center;
}

#settings-note{
    font-size: 14px;
}
</style>