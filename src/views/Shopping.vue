<template>
<div class="container">
    <div class="content-shopping ">
        <div class="herderShopping">
            <h1>with reco <br>you can have <br> <strong class="text-warning">wonderful</strong> sofa</h1>
        </div>
        <div class="textShopping">
            <p>the making by the best quality</p>
        </div>
       
    </div>
   
</div>

<div class="btnShopping">
            <button @click="cheangbg1">material <img src="../assets/next.svg" alt=""></button>
            <button>lettering <img src="../assets/next.svg" alt=""></button>
            <button>ophlustory <img src="../assets/next.svg" alt=""></button>
            <button>wood <img src="../assets/next.svg" alt=""></button>
    </div>
</template>

<script>

export default {
    components:{
       
    },
    methods:{
        cheangbg1(){
            document.querySelector('.content-shopping').classList.toggle('reza')
        }
    }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');

.content-shopping{
    font-family: Roboto Mono ;
    margin-top: 110px;
    width: 100%;
    height: 90vh; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 10px;
    background-image: url(https://edge.thesofaandchair.co.uk/23/157517/2.jpg);
    opacity: .8;
    
    .reza{
    //    background-image: url(https://edge.thesofaandchair.co.uk/23/158196/2.jpg);
      opacity: 0;
       
     }
    .bg{
        position: relative;
        img{
            opacity: .8;
            overflow: hidden;
            
        }
        
    }
    .herderShopping{
        position: absolute;
        top: 16%;
        left: 10%;
        h1{
            padding: 20px;
            line-height: 50px;
            letter-spacing: 5px;
            text-transform: capitalize;
            box-shadow: 20px 10px 40px rgba(236, 240, 16, 0.99);
           


            strong{
                box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
                padding: 2px 5px;
            }
           
        }
    }
    .textShopping{
        position: absolute;
        top: 40%;
        left: 10%;
        p{
            padding: 20px;
            margin-left: 10px;
            text-transform: capitalize;
        }
        
    }
   
    
}
 .btnShopping{
        position: absolute;
        top: 50%;
        left: 22%;
        display: flex;
        
        flex-direction: column;
        width: 600px;
        
        button{
            width: 100%;
            border: none;
            margin: 10px;
            border-bottom: 1px solid #999;
            background-color: transparent;
            font-size: 20px;
            text-transform: capitalize;
            text-align: left;
            font-weight: 700;
            padding: 10px 20px;
            transition: all 0.3s ease-in-out;
            box-shadow: 1px 1px 10px rgba(236, 240, 16, 0.99);
            letter-spacing: 3px;
            &:hover{
                background-color: rgb(221, 221, 221);
            }
            
            img{
                width: 30px;
                margin-left: 25px;
                float: right;
                border-radius: 50%;
                transition: all 0.2s ease-in;
                &:hover{
                    background-color: rgb(230, 125, 6);
                   
                }
            }
            
        }
    }


@media screen and (max-width:1000px){
    
.content-shopping{
    font-family: Roboto Mono ;
    margin-top: 110px;
    width: 100%;
    height: 90vh; 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 10px;
    background-image: url(https://edge.thesofaandchair.co.uk/23/157517/2.jpg);
    opacity: .8;
    
    .reza{
    //    background-image: url(https://edge.thesofaandchair.co.uk/23/158196/2.jpg);
      opacity: 0;
       
     }
    .bg{
        position: relative;
        img{
            opacity: .8;
            overflow: hidden;
            
        }
        
    }
    .herderShopping{
        position: absolute;
        top: 16%;
        left: 15%;
        h1{
            padding: 20px;
            line-height: 50px;
            letter-spacing: 5px;
            text-transform: capitalize;
            box-shadow: 20px 10px 40px rgba(236, 240, 16, 0.99);
           


            strong{
                box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
                padding: 2px 5px;
            }
           
        }
    }
    .textShopping{
        position: absolute;
        top: 40%;
        left: 10%;
        p{
            padding: 20px;
            margin-left: 10px;
            text-transform: capitalize;
        }
        
    }
   
    
}
 .btnShopping{
        position: absolute;
        top: 50%;
        left: 15%;
        display: flex;
        
        flex-direction: column;
        width: 350px;
        
        button{
            width: 100%;
            border: none;
            margin: 20px;
            border-bottom: 1px solid #999;
            background-color: transparent;
            font-size: 15px;
            text-transform: capitalize;
            text-align: left;
            font-weight: 700;
            padding: 10px 20px;
            transition: all 0.3s ease-in-out;
            box-shadow: 1px 1px 10px rgba(236, 240, 16, 0.99);
            letter-spacing: 3px;
            &:hover{
                background-color: rgb(221, 221, 221);
            }
            
            img{
                width: 20px;
                margin-left: 25px;
                float: right;
                border-radius: 50%;
                transition: all 0.2s ease-in;
                &:hover{
                    background-color: rgb(230, 125, 6);
                   
                }
            }
            
        }
    }

}
</style>