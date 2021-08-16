<template>
  <div class="navArround">
    <div class="hamberger" @click="toogleopen">
      <div class="line" ref="line1" id="line1"></div>
      <div class="line" ref="line2" id="line2"></div>
      <div class="line" ref="line3" id="line3"></div>
    </div>
    <div class="logoNavbar">
      <h3>reco gallery</h3>
    </div>
    <div class="imgLogo">
      <img src="../assets/slack.png" alt="">
    </div>
    <div class="navbar-list ">
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li> 
        <li>
          <router-link to="/shopping">Shopping</router-link>
        </li> 
        <li>
          <router-link to="/selling">Selling</router-link> 
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view/>
</template>

<script>

// window.onscroll = function(){myfuctin()}
// function myfuctin(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
//         document.querySelector('.navArround').classList.add('bg')
//     }else{
//         document.querySelector('.navArround').classList.remove('bg')
//     }
// }

export default {
  data() {
    return {

    }
  },
  methods:{
    toogleopen(){
        const links = document.querySelectorAll('.nav-list li');
        const lists =document.querySelector('.navbar-list');
        lists.classList.toggle('open');
        links.forEach(link =>{
            link.classList.toggle('fade')
        });
        this.$refs.line1.classList.toggle('retate')
        this.$refs.line3.classList.toggle('rotate2')
        this.$refs.line2.classList.toggle('hidden')
    },

    closeNavList(){
      const navlist = document.querySelector('.navArround');
      navlist.addEventListener('click' , (e)=>{
        e.stopPropagation()
      },false),

      navlist.style.display='none'
      
    }
  }
}
</script>

<style lang="scss">

.navArround{
  background-color: rgba(0,0,0,0.1);
  height: 16vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  &.bg{
    background-color: rgba(0,0,0,0.3);
  }
  &::before{
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    z-index: -1;
    
  }
  &::after{
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    z-index: -2;
    
  }
  &:hover::before{
    top: 50%;
    bottom: 50%;
    
  }
  &:hover::after{
    left: 50%;
    right: 50%;
    
  }
  .hamberger{
    position: absolute;
    right: 3%;
    top: 30%;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(0.95);
    }
   
    .line{
      width: 40px;
      margin: 8px;
      height: 2px;
      background-color: #fff;
      transition: all .5s ease-in;
      

      
    }
  }
  .navbar-list{
    width: 100%;
    background-color: rgb(189, 188, 188);
    text-align: right;
    height: 100vh;
    margin-left: auto;
    clip-path: circle(10px at 90% -25%);
    transition: all 0.5s ease-in-out;
    position: absolute;
    top: 0;
    
    
    &.open{
        clip-path: circle(500px at 110% -15%);
        }
    .nav-list{
      display: flex;
      flex-direction: column;
      margin-top: 115px;
      list-style: none;
      align-items: right;
      text-align: right;
      z-index: 3;
      
     
      li{
        margin:10px 10px;
        // transition: all 2s ease-in-out;
        opacity: 0;
        padding: 5px 10px;
        font-weight: 700;
        &.fade{
             opacity: 1;
             
             
             }

        
        &:nth-child(1){
          transition: all .5s ease-in .2s;
         background-color: rgb(179, 178, 178);
        }
        &:nth-child(2){
          transition: all .5s ease-in .8s;
          background-color: rgba(255, 196, 2, 0.8);
          
        }
        &:nth-child(3){
          transition: all .5s ease-in 1.2s;
           background-color: rgb(179, 178, 178);
        }
        &:nth-child(4){
          transition: all .5s ease-in 1.6s;
          background-color: rgb(179, 178, 178);
        }
          a{
              text-decoration: none;
              color: rgb(255, 255, 255);
              font-size: 18px;
              padding-top: 30px;
              letter-spacing: 2px;
              transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
              &:hover{
                color: rgb(22, 17, 17);
              }
          }
      } 


      
    }


   
    
}
.logoNavbar{
  position: absolute;
  top: 32%;
  left: 40%;
  z-index: 6;
  h3{
    font-size: 35px;
    letter-spacing: 5px;
    text-transform: capitalize;
    color: #fff;
    animation: headertext 5s ease-in infinite;
    position: relative;
    transition: all .5s ease-in-out;
    &::before{
      content: '';
      width: 100%;
      height: 1px;
      background-color: #fff;
      position: absolute;
      bottom: -12px;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all .5s ease-in-out;
    }
    &:hover::before{
      transform: scaleX(1);
    }
  }
}
.imgLogo{
  position: absolute;
  top: 30%;
  left: 2%;
  z-index: 5;
  img{
    width: 50px;
    
  }
}


}

.retate{
    transform: rotate(-30deg);
}
#line1{
  transform-origin: right;
}

#line3{
    transform-origin: right;
    &.rotate2{
        transform: rotate(30deg);
    }
}
#line2{
    opacity: 1;
    &.hidden{
        opacity: 0;
    }
}

@keyframes headertext{
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(8px);
  }
  100%{
    transform: translateX(0);
  }
}




@media screen and (max-width:850px){
.logoNavbar{
  display: none;
}

}


@media screen and (max-width:950px){
.navbar-list{
    width: 100%;
    background-color: rgb(230, 44, 44);
    text-align: right;
    height: 100vh;
    margin-left: auto;
    clip-path: circle(10px at 90% -25%);
    transition: all 0.5s ease-in-out;
    position: absolute;
    top: 0;
}

}
</style>
