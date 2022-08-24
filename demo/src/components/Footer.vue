<!--底部组件-->
<template>
<div class="bottom">
    <div class="router">
        <div class="content">
            <router-link to="/">{{t("Footer.Home")}}</router-link>
             <router-link to="/Products">{{t("Footer.Products")}}</router-link>
            <router-link to="/knowlege">{{t("Footer.knowlege")}}</router-link>
            <router-link to="/About">{{t("Footer.About")}}</router-link>
           
            
        </div>
        <div class="cn">
            <a href="http://www.aokace.com.cn">
                {{ t("Footer.cna")}}
               
            </a>

            <a href="http://www.coppercn.com"> {{t("Footer.cnac")}}</a>
        </div>
        <div class="copyright">
            {{t("Footer.cnact")}}
            
        </div>
    </div>
    <div class="images">
        <div class="list">
            <div class="text">
            {{t("Footer.WeChat")}}
                
            </div>
            <div class="image">
               <img v-lazy="imgUrl1" alt="微信" />
            </div>
        </div>

        <div class="list">
            <div class="text">
            {{t("Footer.YouTube")}}
                
            </div>
            <div class="image">
                <img v-lazy="imgUrl2" alt="微信" />
            </div>
        </div>

    </div>
</div>

</template>

<script>
import {useI18n} from "vue-i18n"
export default {
    name: 'FooterVue',
    props: {
        msg: String
    },

    data(){
            return {
                imgUrl1:require("@/assets/image/qr_code.png"),
                imgUrl2:require("@/assets/image/youtube.png")
            }
        },

    setup(){
        const { t} = useI18n( );
         return{
              t,  
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:1201px) {
    .bottom {

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        padding: 2.5vw 10vw;
        background-color: #f8f8f8;

        .router {
            text-align: center;

            .content {
                display: flex;

                a {
                    border: 0;
                    background: none;
                    padding: 1.5vw;

                    font-family: Barld;
                    font-size: 1vw;

                    color: #333;

                }

            }

            .cn {

                padding: 1.5vw;
                a {
                    font-family: Barld;
                    font-size: 1.2vw;
                    letter-spacing: 2px;
                 
                    color: #333;
                    padding: 0 .5vw;
                }
            }

            .copyright {
                font-family: Barar;
                font-size: 1vw;
                padding: 0 1.5vw;
            }
        }

        .images {
            display: flex;
            justify-content: space-between;

            .list {
                padding: 1.5vw 0;
                margin-left: 5vw;

                .text {
                    text-align: center;
                    padding: 0 0 1.5vw;
                    font-size: 1vw;
                    letter-spacing: 2px;
                }

                .image {
                    width: 7.5vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }
            }
        }

    }
}

@media screen and (max-width:1201px) {
    .bottom {

        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f8f8f8;
        padding: 15vw 5vw 5vw;

        .router {

            .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;

                a {
                    border: 0;
                    background: none;
                    padding: 3.5vw 0;
                    font-size: 22PX;

                    font-family: Barld;
                    text-align: center;

                    color: #333;
                    width: 41.5VW;
                    background-color: #fff;
                    margin-bottom: 5vw;

                    box-shadow: 0 0 6px 0 #ddd;
                    border-radius: 8px;

                }

            }

             .cn {
               
                text-align: center;
                padding: 2.5vw 0 ;
                display: flex;
                flex-direction: column;
                a {
                    font-family: Barld;
                    font-size: 28px;
                    letter-spacing: 2px;
                 
                    color: #333;
                    padding: 2.5vw 5vw;
                  
                    
                }
            }

            .copyright {
                font-family: Barar;
                font-size: 18px;
                letter-spacing: 1px;
                padding: 2.5vw 0;
                text-align: center;
            }
        }

        .images {
            padding: 5vw;
            overflow: hidden;
            margin-top: 5vw;

            display: flex;
            justify-content: space-between;

            .list {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .text {
                    padding: 2.5vw;
                    font-size: 20px;
                }

                .image {
                    width: 36vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    img {
                        width: 60%;
                    }
                }
            }
        }
    }
}
</style>
