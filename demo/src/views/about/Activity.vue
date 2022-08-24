<template>
  <div class="News">
  <!--    
        <div class="list" @click="Japmat">
            <div class="text">
                <h3>
                    {{t("JapmatNl.h31")}}
                </h3>
       
                
            </div>

            <div class="image">
                <img v-lazy="Japimg"  alt=""/>
            </div>
        </div>


  -->
        

        <div class="list" @click="Shcmef">
            <div class="text">
                <h3>
                    {{t("Shhscmeflis.h31")}}
                </h3>

            
            </div>

            <div class="image">
                <img v-lazy="CMEFimg"  alt=""/>
            </div>
        </div>

        <div class="list" @click="Coppers">
            <div class="text">
                <h3>
                    {{t("Copperlis.h31")}}
                </h3>

      
            </div>

            <div class="image">
                <img v-lazy="cpUrl"  alt=""/>
            </div>
        </div>

        <div class="list" @click="usbnew">
            <div class="text">
                <h3>
                    {{t("USBNlits.h31")}}
                </h3>

       
            </div>

            <div class="image">
                <img v-lazy="usimgUrl"  alt=""/>
            </div>
        </div>

        <div class="list" @click="Shenzed">
            <div class="text">
                <h3>
                    {{t("Shenzedl.h31")}}
                </h3>

       
            </div>

            <div class="image">
                <img v-lazy="SHEDimg"  alt=""/>
            </div>
        </div>

        <div class="list" @click="Shenzef">
            <div class="text">
                <h3>
                    {{t("Shenzefsl.h31")}}
                </h3>

    
            </div>

            <div class="image">
                <img v-lazy="SHEDiimg"  alt=""/>
            </div>
        </div>

        <div class="list" @click="cmef84">
            <div class="text">
                <h3>
                    {{t("cmef84l.h31")}}
                </h3>

        
            </div>

            <div class="image">
                <img v-lazy="cmef84img"  alt=""/>
            </div>
        </div>

       
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"
export default {
    name:'ActivityVue',
    props: {
            msg: String
        },
        data(){
            return{
                Japimg:require("@/assets/image/about/New/jap.jpg"),
                CMEFimg:require("@/assets/image/about/New/shcms.jpg"),
                cpUrl:require("@/assets/image/about/New/copper.jpg"),
                usimgUrl:require("@/assets/image/about/New/newlist.jpg"),
                SHEDimg:require("@/assets/image/about/New/szcmefs.jpg"),
                SHEDiimg:require("@/assets/image/about/New/szcmefsd.jpg"),
                cmef84img:require("@/assets/image/about/New/szcmefss.jpg"),
            }
        },
        setup() {
            const { t } = useI18n();
            return {
                t,
            }
        },

        methods:{
            Japmat(){
                this.$router.push({
                    path:'/Japmat',
                });
            },
            Shcmef(){
                this.$router.push({
                    path:'/Shcms',
                });
            },

            Coppers(){
                this.$router.push({
                    path:'/copper',
                });
            },
            usbnew(){
                this.$router.push({
                    path: '/Usbpe'
                });
            },
            Shenzed(){
                this.$router.push({
                    path:'/Shenzed',
                });
            },

            Shenzef(){
                this.$router.push({
                    path:'/Shenzef',
                });
            },
            cmef84(){
                this.$router.push({
                    path:'/cmef84',
                });
            },
           
        },


}
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 1201px) {
        .News{
            padding: 80px 10VW 0;
            .list{
                display: flex;
                justify-content: space-between;
                flex-direction: row;
            
                padding: 2.5vw 5vw;
                margin: 1.5vw 0;
            
                border-radius: 12px;
              

            

                .text{
                    width: 27.5vw;
                    cursor: pointer;
                
                    h3{
                        font-size: 2vw;
                        
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
                    img{
                        width: 35vw;
                    }
                }
            }

            .list:hover{
                box-shadow: 0 0 20px 0 #f1f1f1;
                .text{
                    overflow: hidden;
                        color: #153692;
                    
                      
                        p{
                            font-size: 4vw;
                        }
                }
            }

            .list:nth-child(2n){
                flex-direction: row-reverse  ;
            }
        }
    }
    @media screen and (max-width: 1201px){
        .News{
            padding: 48px 7.5vw 0;
            .list{
                display: flex;
                flex-direction: column-reverse;
                border-radius: 18px;
                overflow: hidden;
                box-shadow: 0 0 15px 0 #ddd;
                margin: 0 0 48px;

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
    }
</style>