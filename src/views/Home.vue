<template>
  <div class="container-fluid homeDesign">
    <div class="contentHome">
      <h3><span>reco</span> gallery <span id="slash">/</span> <span>reco</span> luxury</h3>
      <div class="callnow">
        <h6>enjoy sitting with us, you can have pich phone and  </h6>
        <div class="pcall">
          <p>call now</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid p-0">
    <div class="badgeNva">
      <h1>choose the best <span><img src="../assets/right-arrow.png" alt=""></span> sofa</h1>
    </div>
    <div class="imgContent">
      <div class="img">
        <img src="../assets/redsofa.jpg" alt="">
      </div>
    </div>
    <!-- <div class="imageAlert">
      <img src="../assets/redsofa.jpg" alt="">
    </div> -->

   <div class="borderAll d-none d-lg-block">
      <div class="searchbox">
        <div class="selectCity">
          <img src="../assets/zoom.png" alt="">
          <input type="text" placeholder="select city">
        </div>
     
        <div class="cheach">
          <button><img src="../assets/calendar.png" alt="">check-in <span><img src="../assets/right-arrow.png" alt=""></span> check-out</button>
        </div>
     
        <div class="guests">
          <img src="../assets/customer.png" alt="">
          <p>guests</p>
          <button @click="minus"> - </button>
          <h6>{{num}}</h6>
          <button class="pb-1" @click="add"> + </button>
        </div>
        <div class="search">
          <button>search</button>
        </div>
      </div>
   </div>
  </div>

  <div class="container-fluid mt-5">
    <div class="headerTextMain">
      <h1>A world of <span><img src="../assets/right-arrow.png" alt=""></span> choice</h1>
    </div>
    <div class="row justify-content-around">
      <div class="col-12 col-md-3">
        <div class="cardProducto">
          <div class="imgProductio">
            <img src="../assets/col-md-4.jpg"  alt="">
          </div>
          <div class="textProductio">
            <p>4 neghborhoods</p>
            <h1>miami</h1>
          </div>
          <div class="btnProductio"></div>
        </div>
        <div class="cardProducto">
          <div class="imgProductio">
            <img src="../assets/col-md-4-2.jpg"  alt="">
          </div>
          <div class="textProductio">
            <p>6 neghborhoods</p>
            <h1>chicago</h1>
          </div>
          <div class="btnProductio"></div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="cardPc">
          <div class="imgPc">
            <img src="../assets/col-md-6.jpg" alt="">
          </div>
          <div class="textProductio m-2 " >
            <p>14 neghborhoods</p>
            <h1 >london</h1>
          </div>
          <div class="btnProductio"></div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="cardProducto">
          <div class="imgProductio">
            <img src="../assets/col-md-4-r1.jpg"  alt="">
          </div>
          <div class="textProductio">
            <p>10 neghborhoods</p>
            <h1>new orleans</h1>
          </div>
          <div class="btnProductio"></div>
        </div>
        <div class="cardProducto">
          <div class="imgProductio">
            <img src="../assets/col-md-4-r2.jpg"  alt="">
          </div>
          <div class="textProductio">
            <p>6 neghborhoods</p>
            <h1>chicago</h1>
          </div>
          <div class="btnProductio"></div>
        </div>
      </div>
    </div>
    <div class="btnAllProduct">
      <button>view all +30 cities</button>
    </div>
  </div>
</template>



<script>


window.onscroll = function(){myFunction()}
function myFunction(){
  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.querySelector('.borderAll').classList.add('animarez')
  }else{
    document.querySelector('.borderAll').classList.remove('animarez')
  }
  if(document.body.scrollTop > 360 || document.documentElement.scrollTop > 360){
    document.querySelector('.search').classList.add('animarez2')
  }else{
    document.querySelector('.search').classList.remove('animarez2')
  }
}


import { mapState } from 'vuex'
export default {
  data() {
    return {
      num:0,
    
    }
  },
  methods:{
    minus(){
      if(this.num > 0){
        this.num --
      }
    },
    add(){
      if(this.num < 20){
        this.num ++
      }
    }
  },
  computed:{
    ...mapState([
      'users'
      
    ])
  }

  

}
</script>

<style lang="scss">
.animarez{
  animation: reza 5s ease-in ;
}
@keyframes reza {
  0%{
    transform: translatey(150px);
  }
  25%{
    transform: translatex(0);
  }
  50%{
    transform: scale(.94);
    
  }
  75%{
    transform: translatex(10px);
    
  }
  100%{
    transform: translatex(0);
     
  }
  
}
.animarez2{
  animation: reza2 5s ease-in ;
}
@keyframes reza2 {
  0%{
    transform: translatey(0);
  }
  25%{
   transform: scale(1.1);
  }
  50%{
    transform: scale(.94);
    
  }
  75%{
    transform: translateX(8px);
    
  }
  100%{
    transform: translatex(0);
     
  }
  
}

.homeDesign{
  width: 100%;
  height: 40vh;
  background-color: #fff;
  position: relative;
  z-index: -1;
  transition: all 0.5s ease;
  .contentHome{
    text-align: left;
    position: absolute;
    bottom: 20px;
    left: 20px;
    .callnow{
      display: flex;
      h6{
      text-transform: capitalize;
      #slash2{
        color: rgb(0, 0, 0);
        
      }
      
    }
    .pcall{
      cursor: pointer;
      width: 100px;
      background-color: rgb(219, 66, 66);
      
      position: absolute;
      bottom: -5px;
      left:390px;
      

      
      p{
        color: red;
        animation: now 2s ease infinite;
        margin-left: 10px;
        text-transform: capitalize;
        letter-spacing: 2px;
        font-weight: 700;
        
        
       
      }
    }
    

  }
      
    }
    h3{
      text-transform: capitalize;
      letter-spacing: 2px;
      
      #slash{
        color: red;
      }
      
      span{
        color: red;
        font-weight: 700;
      }
    }
    
  
  
}
// .imageAlert{
//   position: absolute;
//   top: 100%;
//   right: 0%;
//   animation: imgAlert 5s ease-in;
  
//   img{
//     width: 250px;
//     height: 160px;
//   }
// }


@keyframes imgAlert{
  0%{
    transform: translatex(0px);
  }
  50%{
    transform: translatex(-400px);
  }
  100%{
    
    transform: rotate(180deg);
  }
  
}
@keyframes now{
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translateY(-2px);
  }
  50%{
    transform: rotatex(180deg);
  }
  75%{
    transform: translateY(-20px);
  }
  100%{
    transform: scale(1);
  }
}
.badgeNva{
  background-color: #444;
  color: #fff;
  position: sticky;
  top: 40px;
  left: 90px;
  width: max-content;
  border-radius: 30px;
  z-index: 20;
  float: left;
  margin-top: 20px;
  animation: badge 2s ease infinite;
 
  
  h1{
    padding: 1px 10px;
    font-size: 22px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    span{
      margin:0 10px;
      img{
        width: 30px;
      }
    }
  }
}
.imgContent{
  background-color: red;
  width: 100%;
  height: 70vh;
  position: relative;
  z-index: -1;
  overflow: hidden;
  img{
    position: absolute;
    width: 110%;
    height: 115%;
    top: 0;
    left: 0;
    animation: runtopDown2 20s ease infinite;
  }

}

.cardProducto{
  width: 100%;
  height: 300px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px ;
  .imgProductio{
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
      height: 200px;
      transition: all 0.5s ease-in-out;
      position: relative;
      cursor: pointer;
      
      &::before{
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: red;
        z-index: 100;
      }
      &:hover::before{
        top: 50%;
        bottom: 50%;
      }
      &::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: red;
        z-index: 2;
      }
      &:hover{
        transform: scale(1.2);
      }
    }
  }
  .textProductio{
    padding: 10px;
    p{
      text-transform: capitalize;
      margin-bottom: 0;
    }
    h1{
      text-transform: capitalize;
      font-size: 22px;
    }
  }
}

.cardPc{
  margin-top: 20px ;
  width: 100%;
  
  
  .imgPc{
    border-top-right-radius: 50px;
    overflow: hidden;
    img{
      width: 150%;
      height: 520px;
      overflow: hidden;
      border-top-right-radius: 100px;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      animation: runtopDown 20s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
      
      &:hover{
        transform: scale(1.2);
      }
    }
  }
}

@keyframes runtopDown{
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translatex(-150px);
  }
  50%{
    transform: translatex(0);
  }
  75%{
    transform: translatex(-150px);
  }
  100%{
    transform: translatex(0);
  }
}
@keyframes runtopDown2{
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translatex(-100px);
  }
  50%{
    transform: translatex(0);
  }
  75%{
    transform: translatey(-70px);
  }
  100%{
    transform: translatex(0);
  }
}

.btnAllProduct{
  text-align: center;
  margin: 20px;
  button{
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: rgba(228, 33, 33,0.9);
    color: #fff;
    position: relative;
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: .2;
      position: absolute;
      top: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s ease-in-out;

    }
    &:hover::before{
      transform: scaleX(1);
    }
  }
}
.headerTextMain{
  background-color: #444;
  color: #fff;
  position: sticky;
  top: 40px;
  left: 90px;
  width: max-content;
  border-radius: 30px;
  z-index: 20;
  animation: badge 2s ease infinite;
  h1{
    padding: 5px 10px;
    font-size: 22px;
    text-transform: capitalize;
    span{
      img{
        width: 32px;
        margin: 0 10px;
      }
    }

  }
}

.borderAll{
  border: 20px solid rgb(255, 255, 255);
  border-radius: 200px;
  border-bottom: 0;
  margin: -20px 80px;
  box-shadow: 5px 5px 10px rg(0,0,0,.5);
  
.searchbox{
  border: 1px solid #999;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  // margin: 20px;
  
  
  .selectCity{
   
    width: 350px;
    text-align: center;
    border-right: 1px solid #999;
    
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    &:hover{
      background-color: rgb(235, 235, 235);
    }
   
    img{
      width: 30px;
      
    }
    input{
      text-transform: capitalize;
      border: none;
      margin-left: 10px;
      padding: 5px 10px;
      margin-top: 30px;
      background-color: transparent;
      &:active{
        outline: none;
      }
      &:focus{
        outline: none;
      }
     
    }
  }
  .cheach{
   
    width: 350px;
    text-align: center;
    margin-right: 5px;
      border-right: 1px solid #999;
    &:hover button{
       background-color: rgb(235, 235, 235);
    }
    &:hover {
      background-color: rgb(235, 235, 235);
    }
    button{

      padding:30px 10px;
      border: none;
      background-color: #fff;
      font-size: 22px;
      &:hover{
      
    }
      
      span{
        img{
          width:20px;
          margin-left: 5px;
        }
      }
      img{
        width: 35px;
        margin-right: 10px;
      }
    }
  }
  .guests{
    
    width: 400px;
    padding: 20px;
    display: flex;
    img{
      width: 40px;
      height: 40px;
      margin: 10px ;
    }
    p{
      margin: 15px 10px;
      font-size: 18px;
      text-transform: capitalize;
    }
    button{
      border: none;
      background-color: #fff;
      margin: 0 20px;
      font-size: 25px;
      padding-left: 10px;
      border-radius: 50%;
      &:hover{
        background-color: rgba(238, 161, 17,.1);
      }

    }
    h6{
      margin-top: 15px;
      font-size: 22px;
    }
  }
  .search{
    width: 100px;
    margin: 20px 50px 0 0 ;
    
    button{
      padding:15px 35px;
      border-radius: 30px;
      font-size: 23px;
      text-transform: capitalize;
      border: none;
      background-color: rgb(219, 45, 45);
       color: #fff;
       box-shadow: 5px 5px 10px rgba(0,0,0,.5);
      &:hover{
        background-color: rgb(228, 64, 64);
        color: #999;
      }
    }
  }
}
}

@keyframes badge{
  0%{
    transform: translateX(0);
  }
  
  50%{
    transform: translateX(10px);
  }
  
  100%{
    transform: translateX(0);
  }
}
// -----------shearch box---------------

@media screen and (min-width:990px){
  
.borderAll{
  border: 20px solid rgb(255, 255, 255);
  border-radius: 200px;
  border-bottom: 0;
  margin: -20px 80px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.5);
  
  
.searchbox{
  border: 1px solid #999;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  // margin: 20px;
  
  
  .selectCity{
   
    width: 400px;
    
    text-align: center;
    border-right: 1px solid #999;
    padding: 20px 10px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    &:hover{
      background-color: rgb(235, 235, 235);
    }
   
    img{
      width: 25px;
      
    }
    input{
      text-transform: capitalize;
      border: none;
      margin-left: 10px;
      padding: 5px 1px;
      margin-top: 10px;
      background-color: transparent;
      letter-spacing: 5px;
      &:active{
        outline: none;
      }
      &:focus{
        outline: none;
      }
     
    }
  }
  .cheach{
   
    width: 200px;
    height: 109px;
    text-align: center;
    margin-right: 5px;
      border-right: 1px solid #999;
    &:hover button{
       background-color: rgb(235, 235, 235);
    }
    &:hover {
      background-color: rgb(235, 235, 235);
    }
    button{

      padding:30px 1px;
      border: none;
      background-color: #fff;
      font-size: 15px;
      &:hover{
      
    }
      
      span{
        img{
          width:10px;
          
        }
      }
      img{
        width: 25px;
        
      }
    }
  }
  .guests{
    
    width: 300px;
    height: 80px;
    padding: 20px;
    display: flex;
    img{
      width: 30px;
      height: 30px;
      margin: 10px ;
    }
    p{
      margin: 13px 5px;
      font-size: 18px;
      text-transform: capitalize;
    }
    button{
      border: none;
      background-color: #fff;
      margin: 0 10px;
      font-size: 25px;
      padding-left: 10px;
      border-radius: 50%;
      &:hover{
        background-color: rgba(238, 161, 17,.1);
      }

    }
    h6{
      margin-top: 10px;
      font-size: 20px;
    }
  }
  .search{
    width: 100px;
    margin: 20px 50px 0 0 ;
    
    button{
      padding:15px 35px;
      border-radius: 30px;
      font-size: 23px;
      text-transform: capitalize;
      border: none;
      background-color: rgb(219, 45, 45);
       color: #fff;
       box-shadow: 5px 5px 10px rgba(0,0,0,.5);
      &:hover{
        background-color: rgb(228, 64, 64);
        color: #999;
      }
    }
  }
}
}
}


@media screen and (max-width:880px){
.imgContent{
  background-color: red;
  width: 100%;
  height: 50vh;
  position: relative;
  z-index: -1;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

}

}
@media screen and (max-width:768px){
.cardPc{
  margin-top: 20px ;
  .imgPc{
    border-top-right-radius: 50px;
    overflow: hidden;
   
    img{
      width: 100%;
      height: 520px;
      border-top-right-radius: 100px;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      
      &:hover{
        transform: scale(1.2);
      }
    }
  }
}

.cardProducto{
  width: 100%;
  height: 400px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px ;
  .imgProductio{
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
      height: 300px;
      transition: all 0.5s ease-in-out;
      position: relative;
      cursor: pointer;
      
      &::before{
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: red;
        z-index: 100;
      }
      &:hover::before{
        top: 50%;
        bottom: 50%;
      }
      &::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: red;
        z-index: 2;
      }
      &:hover{
        transform: scale(1.2);
      }
    }
  }
  .textProductio{
    padding: 10px;
    p{
      text-transform: capitalize;
      margin-bottom: 0;
    }
    h1{
      text-transform: capitalize;
      font-size: 22px;
    }
  }
}
}

@media screen and (max-width:900px){
  
.cardPc{
  margin-top: 20px ;
  width: 100%;
  
  
  .imgPc{
    border-top-right-radius: 50px;
    overflow: hidden;
    img{
      width: 150%;
      height: 520px;
      overflow: hidden;
      border-top-right-radius: 100px;
      transition: all 0.8s ease-in-out;
      cursor: pointer;
      animation: runtopDown  cubic-bezier(0.95, 0.05, 0.795, 0.035) ;
      
      &:hover{
        transform: scale(1.2);
      }
    }
  }
}

}

@media screen and (min-width:1300px){
  
.borderAll{
  border: 20px solid rgb(255, 255, 255);
  border-radius: 200px;
  border-bottom: 0;
  margin: -20px 80px;
   box-shadow: 5px 5px 10px rgba(0,0,0,.5);
  
.searchbox{
  border: 1px solid #999;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  // margin: 20px;
  
  
  .selectCity{
   
    width: 350px;
    text-align: center;
    border-right: 1px solid #999;
    padding-bottom: 20px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    &:hover{
      background-color: rgb(235, 235, 235);
    }
   
    img{
      width: 30px;
      
    }
    input{
      text-transform: capitalize;
      border: none;
      margin-left: 10px;
      padding: 5px 10px 5px 10px;
      margin-top: 10px;
      background-color: transparent;
      letter-spacing: 2px;
      
      &:active{
        outline: none;
      }
      &:focus{
        outline: none;
      }
     
    }
  }
  .cheach{
   
    width: 350px;
    text-align: center;
    margin-right: 5px;
      border-right: 1px solid #999;
    &:hover button{
       background-color: rgb(235, 235, 235);
    }
    &:hover {
      background-color: rgb(235, 235, 235);
    }
    button{

      padding:30px 10px;
      border: none;
      background-color: #fff;
      font-size: 22px;
      &:hover{
      
    }
      
      span{
        img{
          width:20px;
          margin-left: 5px;
        }
      }
      img{
        width: 35px;
        margin-right: 10px;
      }
    }
  }
  .guests{
    
    width: 400px;
    padding: 20px;
    display: flex;
    img{
      width: 40px;
      height: 40px;
      margin: 10px ;
    }
    p{
      margin: 15px 10px;
      font-size: 18px;
      text-transform: capitalize;
    }
    button{
      border: none;
      background-color: #fff;
      margin: 0 20px;
      font-size: 25px;
      padding-left: 10px;
      border-radius: 50%;
      margin-top: 5px;
      
      &:hover{
        background-color: rgba(238, 161, 17,.1);
      }

    }
    h6{
      margin-top: 15px;
      font-size: 22px;
    }
  }
  .search{
    width: 100px;
    margin: 20px 50px 0 0 ;
    
    button{
      padding:15px 35px;
      border-radius: 30px;
      font-size: 23px;
      text-transform: capitalize;
      border: none;
       background-color: rgb(219, 45, 45);
       color: #fff;
       box-shadow: 5px 5px 10px rgba(0,0,0,.5);
      &:hover{
        background-color: rgb(228, 64, 64);
        color: #999;
      }
    }
  }
}
}
}


</style>
