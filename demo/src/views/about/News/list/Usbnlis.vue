<template>
    <div class="list" @click="usbnew">
        <div class="text">
            <h3>
                {{t("USBNlits.h31")}}
            </h3>

            <p>
                {{t("USBNlits.p1")}}
            </p>
        </div>

        <div class="image">
              <img v-lazy="imgUrl"  alt=""/>
        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
     

    export default {
        name:'USBNliVue',
        props:{
            msg:String
        },

        data(){
            return{
                imgUrl:require("@/assets/image/about/New/newlist.jpg"),
                
            }
        },
        
        setup() {
            const { t} = useI18n( );
            return{
                t, 
              
            }
        },

        methods:{
            usbnew(){
                this.$router.push({
                    path: '/Usbpe'
                });
            }
        },

       

       

        

        
    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 1201px){
        .list{
            display: flex;
            justify-content: space-between;
        
            padding: 2.5vw;
           
            border-radius: 12px;

           

            cursor: pointer;

            .text{
                width: 27.5vw;
            
                h3{
                    font-size: 1.6vw;
                    letter-spacing: 1px;
                    font-family: Barld;
                    padding: 2.5vw 0 ;

                }

                p{
                    font-size: 1.1vw;
                    letter-spacing: 1px;
                    font-family: Barht;
                }

            }

            .image{
                width: 32.5vw;
                height: 16.25vw;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ccc;
                overflow: hidden;
                border-radius: 12px;
                img{
                    width: 35vw;
                }
            }
        }

        .list:hover{
           .text{
             h3{
                color: #153692;
             }
           }
        }
    }

    @media screen and (max-width: 1201px){
        .list{
            display: flex;
            flex-direction: column-reverse;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 0 15px 0 #ddd;

            .text{
                padding: 5vw;
                background-color: #fff;
                p{
                    display: none;
                }

                h3{
                    font-size: 32px;
                }
            }

            .image{
                width: 85vw;
                height: 42.5vw;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 85vw;
                }
                
            }
        }
    }
</style>
