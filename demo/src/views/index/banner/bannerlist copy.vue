<template>
    <div class="berliscn" >
        <div class="bertext" @click="berliscn">
            <h3>{{ t("Banner.H31") }}</h3>
        </div>
        <div class="berimg">
            <img :src="imgUrl" alt=""/>
        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
 
    export default {
        name: "BerlistVue",
        props: {
            msg: String,
        },

        data(){
            return {
                imgUrl:require("@/assets/image/banner/banner-bg.png")
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
                    path: '/About'
                });
            }
        }



    };
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 1201px) {
        .berliscn {
            position: relative;
            padding: 0;
            overflow: hidden;
            background-color: #ccc;



            .bertext {
                position: absolute;
                padding: 0 10vw;
                bottom: 5vw;
                right: 0;
                left: 0;
                text-align: center;
                cursor: pointer;

                h3 {
                    font-size: 36px;
                    letter-spacing: 2px;
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
                padding: 2.5vw 10vw;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.25);

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
