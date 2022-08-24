
<template>
    <div class="home" >
        <div class="bannerdex">
            <BannerVue msg="" />
        </div>
        <div class="serve" ref="target">
            <ServeVue msg="" />
        </div>

        <div class="product" ref="target"> 
            <IndexproVue msg="" />
        </div>

        <div class="abouteom" ref="target">
            <CusVue msg="" />
        </div>

        <div class="new" ref="target">
            <NewVue msg="" />
        </div>

        <div class="bottoms" >

        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import BannerVue from './index/banner.vue'
    import ServeVue from './index/serve.vue'
    import CusVue from './index/cus.vue'
    import IndexproVue from './index/index_pro.vue'
    import NewVue  from './index/New.vue'

   
   
   
   
   


    export default {
        name: 'HomeVue',
        components: {
          
            BannerVue,
            ServeVue,
            CusVue,
            IndexproVue,
            NewVue 
          
        },

        

        setup () {
            
           
        
            return{
           
                
              
             
            }


            
        
        }

    
    }
</script>

<style lang="scss" scoped>

  


    @media screen and (min-width:1201px)  {
        .home {
            padding: 0;
            position: relative;

            .bannerdex {
                padding: 0;
            }

            .serve {
                display: flex;
                justify-content: center;
                background-color: #f8f8f8;
                padding: 0 10vw 1vw;
            }

            .product {
                padding: 2.5vw 0;
            }

            .abouteom {
                padding: 0 10vw;
                margin: 5vw 0;
                background-color: #f8f8f8;
            }

            .new {
                padding: 5vw 10vw;
            }
        }
    }

    @media screen and (max-width:1201px) {
        .home {
            padding: 0;
            position: relative;

            .bannerdex {
                padding: 92px 0 0;
            }
        }

        .abouteom {
            padding: 5vw 0;
            overflow: hidden;
        }

        .bottoms {
            padding: 2.5vw 0 0;
        }
    }
</style>
