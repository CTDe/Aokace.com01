<template>
    <div class="berliscn" >
        <div class="bertext" @click="berliscn">
            <h4>{{ t("Banner.UHD1") }}</h4>
            <h3>{{ t("Banner.UHD12") }}</h3>
        </div>
        <div class="berimg">
            <img v-lazy="imgUrl" alt=""/>
        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"

    export default {
        name: "Berlist4KVue",
        props: {
            msg: String,
        },
        data(){
            return {
                imgUrl:require("@/assets/image/banner/banner-UHD1.png")
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
                    path: '/AGMUHD1'
                });
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
                width: 30vw;
                top: 7.5vw;
               
                padding: 5vw;
                right: 5vw;
                
                float: right;
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

                h3 {
                    font-size: 24px;
                    text-align: center;
                    letter-spacing: 1px;
                    flex-wrap: wrap;
                    color: #fff;
                }
                h4{
                    display: none;
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
