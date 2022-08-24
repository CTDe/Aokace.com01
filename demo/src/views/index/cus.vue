<template>
    <div class="content">

        <div class="eom">
            <div class="img">
                <img v-lazy="imgUrl" alt="eompng" />
            </div>
            <div class="text">
                <h3>

                    {{ t("Cus.H3") }}
                </h3>

                <ul>
                    <li>
                        {{ t("Cus.p11") }}
                    </li>
                    <li>
                        {{ t("Cus.p12") }}
                    </li>
                    <li>
                        {{ t("Cus.p13") }}
                    </li>
                    <li>
                        {{ t("Cus.p14") }}
                    </li>





                </ul>
                <span @click="Custom"> &rarr;</span>
              
            </div>
        </div>

        <p id="features">
            {{ t("Cus.p2") }}

        </p>

    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
    export default {
        name: 'CusVue',
        props: {
            msg: String
        },
        data(){
            return{
                 imgUrl:require("@/assets/image/index/eom_01.png"),
            }
        },

        methods:{
            Custom() {
                this.$router.push({
                    path: '/Custom'
                });
            },
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
  

    @media screen and (min-width:1201px)  {
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            padding: 2.5vw 2.5vw 5vw;

            .eom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
                padding: 2.5vw 0;

                .img {
                    width: 36vw;
                    height: 18vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    width: 32vw;
                    padding: 0 2.5vw;
                    overflow: hidden;

                    h3 {
                        font-size: 2vw;
                    }

                    ul {
                        padding: 1vw 0 0;

                        li {
                            font-size: 1vw;
                            padding: .5vw 0 0;
                        }
                    }

                    span {
                        text-decoration: none;
                        line-height: 2;
                        font-size: 2vw;
                        color: #153692;
                        font-family: Barld;
                        cursor: pointer;
                    }
                }
            }

            #features {
                font-size: 1.4vw;
                flex-wrap: wrap;
                text-align: center;
            }
        }
    }

    @media screen and (max-width:1201px) {
        .content {
            display: flex;
            flex-direction: column;
            background-color: #f8f8f8;
            border-radius: 12px;
            padding: 5vw;

            .eom {
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                padding: 5vw 0;

                .img {
                    width: 80vw;
                    height: 40vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 100%;
                    }
                }

                .text {
                    width: 75vw;
                    padding: 2.5vw;
                    text-align: center;

                    h3 {
                        font-size: 42px;
                    }

                    ul {
                        padding: 2.5vw 0 0;

                        li {
                            font-size: 18px;
                            line-height: 1.5;
                            flex-wrap: wrap;
                        }
                    }

                    span {
                        text-decoration: none;
                        line-height: 3;
                        font-size: 32px;
                        padding: 5vw;
                        color: #153692;
                        font-family: Barld;
                    }
                }
            }

            #features {
                padding: 0 5vw 10vw;
                text-align: center;
                font-size: 18px;
                line-height: 1.5;
            }
        }
    }
</style>
