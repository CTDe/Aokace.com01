<template>
  <div class="Partner">
        <div class="title">
            
                {{t("Companys.Partner")}}
            
        </div>

        <div class="content">
            <div class="list">
                <div class="image">
                    <img v-lazy="ImgUrl1" alt=""/>
                </div>
                <div class="lists">
                    <div class="images">
                        <img v-lazy="ImgUrl3" alt=""/>
                    </div>
                    <div class="images">
                        <img v-lazy="ImgUrl4" alt=""/>
                    </div>
                </div>
            </div>

            <div class="list">
                <div class="image">
                    <img v-lazy="ImgUrl2" alt=""/>
                </div>
                <div class="lists">
                    <div class="images">
                        <img v-lazy="ImgUrl5" alt=""/>
                    </div>
                    <div class="images">
                        <img v-lazy="ImgUrl6" alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
  </div>
</template>

<script>
    import { useI18n } from "vue-i18n"

export default {
    name:'PartnerVue',
    props: {
            msg: String
        },

    data(){
            return{
                ImgUrl1:require("@/assets/image/about/Partner/Partner_01.png"),
                ImgUrl2:require("@/assets/image/about/Partner/Partner_02.png"),
                ImgUrl3:require("@/assets/image/about/Partner/Partner_03.png"),
                ImgUrl4:require("@/assets/image/about/Partner/Partner_04.png"),
                ImgUrl5:require("@/assets/image/about/Partner/Partner_05.png"),
                ImgUrl6:require("@/assets/image/about/Partner/Partner_06.png"),
           
               
            }
        },

    setup(){
        


         const { t } = useI18n({ useScope: 'global' });

         return {
                t,
             
                


            }
    }
}
</script>

<style lang="scss" scoped>
    @media screen and (min-width:1201px) {
        .Partner {
            
            background: none;
            .title{
                padding: 5vw 10vw 2.5vw;

               
                    text-align: center;
                    
                    font-size: 2.2vw;
                    font-family: Barld;
                    letter-spacing: 4px;
                
            }

            .content{
                padding: 0 10vw 5vw;
                column-count: 2;
                

                .list{
                    padding: 2.5vw;
                    
                    .image{
                        width: 35vw;
                        height: 17.5vw;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 18px;
                        img{
                            width: 35vw;
                        }
                    }

                    .lists{
                        width: 35vw;
                        column-count: 2;
                        column-gap: 2.5vw;
                        padding: 2.5vw 0 0;
                        .images{
                            width: 16.25vw;
                            height: 8.125vw;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 18px;

                            img{
                                width: 16.25vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .Partner {
            padding: 5vw 5vw 10vw;

            .title{
                    text-align: center;
                    padding: 0 0 72px;
                    font-size: 36px;

                }

            .content{
                padding: 0;

                .list{
                    padding: 0 5vw;

                    .image{
                        border-radius: 24px;
                        width: 90vw;
                        overflow: hidden;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 90vw;
                        }
                    }

                    .lists{
                        width: 90vw;
                        column-count: 2;
                        column-gap: 5vw;
                        padding: 5vw 0 ;

                        .images{
                            width: 42.5vw;
                            overflow: hidden;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 18px;

                            img{
                                width: 42.5vw;
                            }
                        }
                    }
                }
            }

        }
    }
</style>