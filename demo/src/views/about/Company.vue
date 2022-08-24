<template>
    <div class="Company">
        <div class="about_us">
            <h3>
                {{t("Companys.H3")}}
            </h3>
            <p>
                {{t("Companys.p0")}}

            </p>
            <p>
                {{t("Companys.p1")}}


            </p>
            <p>
                {{t("Companys.p2")}}

            </p>

             <p>
                {{t("Companys.p3")}}

            </p>
        </div>

        <div class="video">
            <VideoVue msg="" />
        </div>
        
        <div class="history">
            <div class="title">
                 {{t("Companys.history")}}
            </div>

            <div class="contxt">
                <div class="txtl">
                    <ul class="text">
                        <li>
                            <h3>
                                {{t("Companys.h34")}}
                            </h3>
                            <p>
                                {{t("Companys.p4")}}
                            </p>
                        </li>
                        
                        <li>
                            <h3>
                                {{t("Companys.h35")}}
                            </h3>
                            <p>
                                {{t("Companys.p5")}}
                            </p>
                        </li>

                        <li>
                            <h3>
                                {{t("Companys.h36")}}
                            </h3>
                            <p>
                                {{t("Companys.p6")}}
                            </p>
                        </li>
                        
                            
                    </ul>

                    <div class="image">
                        <img v-lazy="historyUrl"/>
                    </div>
                </div>

                <div class="txtr">

                    <ul class="text">
                        
                        

                        <li>
                            <h3>
                                {{t("Companys.h37")}}
                            </h3>
                            <p>
                                {{t("Companys.p7")}}
                            </p>
                        </li>

                       

                        <li>
                            <h3>
                                {{t("Companys.h38")}}
                            </h3>
                            <p>
                                {{t("Companys.p8")}}
                            </p>
                        </li>

                        

                        <li>
                            <h3>
                                {{t("Companys.h39")}}
                            </h3>
                            <p>
                                {{t("Companys.p9")}}
                            </p>
                        </li>

                        

                        <li>
                            <h3>
                                {{t("Companys.h310")}}
                            </h3>
                            <p>
                                {{t("Companys.p10")}}
                            </p>
                        </li>

                        
                        <li>
                            <h3>
                            {{t("Companys.h311")}}
                            </h3>
                            <p>
                                {{t("Companys.p11")}}
                            </p>
                        </li>

                        

                       
                    </ul>

                    
                </div>
            </div>
        </div>

        <div class="Partner">
            <PartnerVue/>
        </div>

    </div>
</template>

<script>
    import VideoVue from './components/video.vue'
    import PartnerVue from './components/Partner.vue'
    import { useI18n } from "vue-i18n"

    export default {
        name: "CompanyVue",
        props: {
            msg: String,
        },
        components: {
            VideoVue,
            PartnerVue
        },

        data(){
            return{
                historyUrl:require("@/assets/image/about/comp.png")
            }
        },
        setup() {
            const { t } = useI18n();
            return {
                t,
            }
        },
    };
</script>

<style lang="scss" scoped>
    @media screen and (min-width:1201px) {
        .Company {
            padding: 0;

            .about_us {
                padding: 5vw 15vw;


                h3 {
                    text-align: center;
                    padding: 0 0 1.5vw;
                    font-size: 2vw;
                    font-family: Barum;
                    letter-spacing: 6px;
                }

                p {
                    font-size: 1.2vw;
                    font-family: Barar;
                    line-height: 1.5;
                }
            }

            .video {
                background-color: #f8f8f8;
                padding: 2.5vw 0;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;

                
            }

            .history{
                padding: 5vw 12.5vw;

                .title{
                    text-align: center;
                    padding: 0 0 2.5vw;
                    font-size: 2.2vw;
                    font-family: Barld;
                    letter-spacing: 4px;
                }

                .contxt{
                   padding: 1.5vw 0 0;
                   display: flex; 
                   justify-content: space-between;
                   align-items: flex-start;

                   p{
                    padding: 0 0 .5vw;

                     font-size: 1.1vw;
                    font-family: Barar;
                    line-height: 1.5;
                   }

                   H3{
                    font-size: 1.6vw;
                    padding: 0 0 .5vw ;
                   }

                   .text{
                       
                        background-color: #f8f8f8;
                        padding: 2vw ;
                        }
                  
                    li{
                        padding: 1vw;
                    }
                    li:hover{
                        background-color: #fff;
                        
                    }

                   .txtl{
                        width: 35vw;
                        display: flex;
                        flex-direction: column-reverse;

                        

                        .image{
                            width: 35vw;
                            height: 17.5vw;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            border-radius: 12px;
                            margin-bottom: 1.5VW;

                            img{
                                width: 100%;
                            }
                        }
                   }

                   .txtr{
                        width: 35vw;
                       
                   }

                }

            }

            .Partner{
                background-color: #f8f8f8;
                padding: 1.5vw 0 0;
            }

            
        }
    }

    @media screen and (max-width:1201px) {
        .Company {
            padding: 36px 0 0;
            overflow: hidden;

            .about_us {
                padding: 5vw 10vw;
                background-color: #fff;

                h3 {
                    text-align: center;
                    padding: 0 0 2.5vw;
                    font-size: 36px;
                    font-family: Barum;
                    letter-spacing: 2px;
                }

                p {
                    font-size: 16px;
                    font-family: Barar;
                    line-height: 1.5;
                }
            }

            .video {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f8f8f8;
                padding: 5vw 0;
                overflow: hidden;
            }

            .history{
                padding: 10vw 5vw;

                .title{
                    text-align: center;
                    padding: 48px 0 36px;
                    font-size: 36px;

                }

                .contxt{
                    .txtl{
                        display: flex;
                        flex-direction: column-reverse;
                        .text{
                            padding: 36px 24px 0;
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                           li{
                            width: 35vw;
                           }

                           li:last-child{
                                width: 80vw;
                           }

                        }
                    }


        
                    h3{
                        padding: 0 0 12px;

                        font-size: 28px;
                    }

                    p{
                        padding: 0 0 32px;
                    }

                   li{
                    padding: 1.5vw;
                   
                   }


                    .image{
                        width: 90vw;
                        height: 45vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 18px;
                        overflow: hidden;

                        img{
                            width: 100%;
                        }
                    }

                    .txtr{
                        padding: 0 24px 0;

                        .text{
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                           li{
                            width: 35vw;
                           }

                           li:last-child{
                                width: 80vw;
                           }
                           
                            
                        }
                    }

                }


            }

            .Partner{
                background-color: #f8f8f8;
                padding: 48px 0 ;
            }
        }
    }
</style>
