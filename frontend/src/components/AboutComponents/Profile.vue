<template>
    <div>
        <img src="images/profile-pic.jpg" id="profile_pic" alt="My photo">
        <h5 class="name-title">Jose Venzke</h5>
        <div id="settings-note">
          <p>josevenzkejr@gmail.com</p>
          <p>Porto Alegre, RS</p>
        </div>
        <div id="theme-options-wrapper">
            <div class="ico"><a href="https://www.linkedin.com/in/jos%C3%A9-venzke-66b046211/" target="_blank"><i class="fab sub-icon fa-linkedin"></i></a></div>
            <div class="ico"><a href="https://github.com/josevenzke" target="_blank"><i class="fab sub-icon fa-github-square"></i></a></div>
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
.ico:hover{
  cursor: url('../../../public/images/cursor/cursor-clickable.png'), auto;
}
.sub-icon{
  font-size: 35px;
}
.ico>a{
  color: #2c3e50;
}


#theme-options-wrapper{
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

#settings-note{
    font-size: 15px;
    margin-top: 15px;
}
#settings-note>p{
  margin: 5px;
}
</style>