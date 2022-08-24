<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div class="berliscn" >
        <div class="bertext" @click="berliscn">
            <h4>{{ t("Banner.HD31") }}</h4>
            <h3>{{ t("Banner.HD3") }}</h3>
        </div>
        <div class="berimg">
            <img v-lazy="imgUrl" alt=""/>
        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"

        

    export default {
        name: "BerlistHD3Vue",
        props: {
            msg: String,
        },

        data(){
            return {
                imgUrl:require("@/assets/image/banner/banner-HD3.png")
            }
        },
        setup() {
            const { t } = useI18n();
         
            
           
            return {
                t,
                
                
                
                 
            }
        },
        methods: {
            berliscn() {
                this.$router.push({
                    path: '/AGMHD3'
                });
            }
        },
        computed:{
            HDul(){
                return '${this.data.img}'
            }
        }



    };
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 1201px) {
        .berliscn {
            position: relative;
            padding: 0 ;
            overflow: hidden;
            background-color: #ccc;



            .bertext {
                position: absolute;
                width: 36vw;
                top: 8vw;
               
                padding: 5vw;
                left: 10vw;
                
                
                text-align: start;
                cursor: pointer;
                
                h4{
                    color: #153692;
                    font-size: 2.4vw;
                    letter-spacing: 0px;
                    padding: 0 0 1vw;
                }
                h3 {
                    color: #153692;
                    font-size: 3.6vw;
                    letter-spacing: 2px;
                    font-family: Barks;
                }
            }

            .berimg {
                overflow: hidden;
                display: flex;

                img {
                    width: 100vw;
                }
            }
        }
    }

    @media screen and (max-width: 1201px) {
        .berliscn {
            position: relative;
            height: 45vw;
            align-items: center;
            background-color: #ccc;
           

            .bertext {
                position: absolute;
                padding: 2.5vw 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.25);

                h4{
                    display: none;
                }
                h3 {
                    font-size: 24px;
                    text-align: center;
                    letter-spacing: 1px;
                    flex-wrap: wrap;
                    color: #fff;
                }
            }

            .berimg {
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 100vw;
                }
            }
        }
    }
</style>
