<template>
    <div class="newlist" @click="newlist">
        <div class="image">
           <img v-lazy="imgUrl" alt=""/>
        </div>

        <div class="text">
            <router-link to="">
                {{ t("Innewst.Newlist") }}
            </router-link>

        </div>
    </div>
    
</template>

<script>
    import { useI18n } from "vue-i18n"

    export default {
        name: 'NewlistVue',
        props: {
            msg: String
        },

        methods: {

            newlist() {
                //  对应router目录下index.js中定义的path
                this.$router.push({
                    path: '/copper'
                });

            },
        },

        data(){
            return {
                imgUrl:require("@/assets/image/index_new/index_new_01.png")
            }
        },

        setup() {
            const { t } = useI18n();
            return {
                t,
            }
        }
    }
</script>

<style lang="scss" scoped>
   

    @media screen and (min-width:1201px) {
        .newlist {
            width: 24.5vw;
            overflow: hidden;
            border-radius: 12px;
            cursor: pointer;

            .image {
                width: 24.5vw;
                height: 24.5vw;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                img {
                    width: 24.5vw;
                }
            }

            .text {
                width: 24.5vw;
                display: flex;
                justify-content: space-between;

                a {
                    padding: 2.5VW;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    background-color: #F8F8F8;
                    font-size: 1vw;
                    color: #333;
                    font-family: Barld;
                }
            }
        }

        .newlist:hover {
            box-shadow: 0 0 10px 8px #ddd;
        }
    }

    @media screen and (max-width:1201px) {
        .newlist {
            width: 42.5vw;
            overflow: hidden;
            border-radius: 18px;
            box-shadow: 0 0 15px 6px #eee;

            .image {
                width: 42.5vw;
                height: 42.5vw;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .text {
                width: 42.5vw;
                display: flex;
                justify-content: space-between;

                a {
                    padding: 7.5vw 5vw;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    background-color: #F8F8F8;
                    font-size: 24px;
                    color: #333;
                    font-family: Barld;
                }
            }
        }
    }
</style>
