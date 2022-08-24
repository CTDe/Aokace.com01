<template>
    <div class="list" @click="Shcmef">
        <div class="text">
            <h3>
                {{t("Shhscmeflis.h31")}}
            </h3>

            <p @click="copper" >
                &rarr;
            </p>
        </div>

        <div class="image">
              <img v-lazy="CMEFimg"  alt=""/>
        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
     

    export default {
        name:'ShcmsNliVue',
        props:{
            msg:String
        },
        data(){
            return{
                CMEFimg:require("@/assets/image/about/New/shcms.jpg")
            }
        },
        
        setup() {
            const { t} = useI18n( );
            return{
                t, 
              
            }
        },

        methods:{
            Shcmef(){
                this.$router.push({
                    path:'/Shcms',
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
            flex-direction: row-reverse;
        
            padding: 2.5vw;
            
            border-radius: 12px;

            

            

            .text{
                width: 27.5vw;
                
            
                h3{
                    font-size: 1.6vw;
                    letter-spacing: 1px;
                    font-family: Barld;
                    padding: 2.5vw 0 ;

                }

                p{
                    font-size: 2vw;
                    letter-spacing: 1px;
                    font-family: Barht;
                    cursor: pointer;
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
                cursor: pointer;
                img{
                    width: 35vw;
                }
            }
        }

        .list:hover{
           .text{
             
                color: #153692;
            
                h3{
                    font-size: 2vw;
                    padding: 0;
                }
                p{
                    font-size: 4vw;
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
