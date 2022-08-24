<template>
    <div class="content" @click.stop="; vshow = !vshow">

        <div class="tab">
            <div class="tabnav">

                <div class="back">
                    <BackVue msg="" />
                </div>

                <div class="connav">
                    <div class="title">
                        {{ t("Japmatnew.titles")}}
                    </div>
                    <div class="lang" @click="change" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
                        <span class="icon-internet"></span>
                    </div>
                </div>

            </div>
            <div class="navlang" v-if="ShowHidden" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
                <ul class="langs" @click.stop="ShowHidden = !ShowHidden ">

                    <li v-for="item in data.lang" :key="item.value" @click="changeLang(item.value)">
                        {{item.label}}
                    </li>
                </ul>
            </div>

            <div class="contents">
                <div class="title">
                    
                    <h1>
                        {{ t("Japmatnew.title")}}
                    </h1>
                </div>

                <div class="deom">
                    <ul class="banquan">
                        <li class="li">
                            <ul class="list">
                                <li class="icon-person">

                                </li>

                                <li>
                                    {{ t("Japmatnew.person")}}
                                </li>
                            </ul>
                        </li>

                        <li class="li">
                            <ul class="list">
                                <li class="icon-time">

                                </li>

                                <li>
                                    {{ t("Japmatnew.time")}}
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>

                <div class="new">

                    <p>
                        {{t("Japmatnew.p1")}}
                    </p>
                    <div class="image">
                        <img v-lazy="imgUrl1" alt="Aokace&Copper" />
                        
                    </div>
                    
                

                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n'
    import BackVue from '@/components/Back.vue'
    import { reactive } from '@vue/reactivity';

    export default {
        name: 'JapmatVue',
        props: {
            msg: String
        },

        components: {
            BackVue,

        },

        data() {
            return {

                ShowHidden: false,
                vshow: true,
                selLocale: this.$i18n.locale,

                imgUrl1:require("@/assets/image/about/news/Jap/jap_01.jpg")
            };
        },

        setup() {
            const { t, locale } = useI18n({ useScope: 'global' });

            const data = reactive({
                lang: [
                    {label: "English", value:"en"},
                    {label: "ESPAÑOL", value:"es"},
                    {label: "РУССКИЙ", value:"ru"},

                ]
            });

            const changeLang = (lang) => {
                locale.value = lang;
            }

            return {
                t,
                data,
                locale,
                changeLang,


            }
        },


    }
</script>


<style lang="scss" scoped>
    @media screen and (min-width:1201px) {

        .content {
            padding: 0 0 10vw;
            position: relative;

            .tab {
                position: relative;
                overflow: hidden;

                .tabnav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #153692;
                    overflow: hidden;
                    width: 80vw;
                    height: 80px;
                    padding: 0 10vw;
                    position: fixed;
                    z-index: 5000;

                    .connav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;



                        .title {
                            font-size: 1.2vw;
                            color: #fff;
                            padding: 1.5vw 2.5vw;
                            font-family: Barum;
                            letter-spacing: 1px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .lang {
                            font-size: 1.2vw;
                            color: #fff;
                            font-family: Barum;
                            cursor: pointer;
                        }
                    }
                }

                .navlang {
                    position: fixed;
                    top: 80px;
                    z-index: 5001;
                    right: 0vw;
                    left: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: flex-end;


                    .langs {
                        text-align: center;



                        li {
                            width: 5vw;
                            padding: 1.5vw 2.5vw;
                            font-size: 1vw;
                            color: #fff;
                            background-color: #15369250;
                            cursor: pointer;
                            font-family: Barld;
                        }

                        li:hover {
                            background-color: #15369225;
                            color: #153692;
                        }
                    }
                }

                .contents {
                    margin: 0 auto;
                    padding: 10vw 0 0;

                    .title {
                        padding: 0 15vw 2.5vw;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;

                        span {
                            font-size: 2.4vw;
                            padding-right: 1.5vw;
                            color: #666;
                        }

                        h1 {
                            font-size: 2.4vw;
                            color: #333;
                            letter-spacing: 2px;
                            flex-wrap: wrap;
                        }
                    }

                    .deom {
                        text-align: start;
                        padding: 1.5vw 15vw;

                        .banquan {
                            display: flex;
                            align-items: center;

                            .li {
                                padding-right: 2.5vw;

                                .list {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 1vw;
                                    color: #666;

                                    li {
                                        padding-right: 1vw;
                                    }
                                }
                            }
                        }
                    }

                    .new {
                        padding: 0 15vw 5vw;

                        p {
                            font-size: 1.2vw;
                            line-height: 1.5;
                            padding: 2.5vw;
                            border-radius: 24px;
                            background-color: #f8f8f8;
                            margin: 1.5vw 0;
                        }

                        .image {
                            width: 70vw;
                            height: 35vw;
                            margin: 2.5vw 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;
                            border-radius: 12px;

                            img {
                                width: 70vw;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width:1201px) {

        .content {
            position: relative;
            z-index: 1000;


            .tab {
                padding: 0 0 10vw;

                .tabnav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #153692;
                    padding: 0 5vw;
                    width: 90vw;
                    position: fixed;
                    z-index: 1010;

                    .back {
                        padding: 0;
                    }

                    .connav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;
                        overflow: hidden;

                        .title {
                            color: #fff;
                            padding: 0 2.5vw;
                            width: 45vw;
                            font-size: 20px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        .lang {
                            padding: 0 2.5vw;

                            .icon-internet {
                                font-size: 24px;
                                color: #fff;
                                cursor: pointer;
                            }
                        }
                    }
                }

                .navlang {
                    position: fixed;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    top: 96px;


                    .langs {
                        padding: 24px;
                        background-color: #15369225;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        li {
                            width: 17.5vw;
                            text-align: center;
                            padding: 2.5vw 5vw;
                            margin-bottom: 12px;
                            background-color: #15369250;
                            font-size: 24px;
                            letter-spacing: 2px;
                            font-family: Barld;
                            color: #fff;
                        }
                    }
                }

                .contents {
                    padding: 156px 0 0;

                    .title {
                        padding: 0 5vw;
                        text-align: center;

                        span {
                            display: none;
                        }

                        h1 {
                            font-size: 36px;
                            letter-spacing: 2px;
                            font-family: Barld;
                        }
                    }

                    .deom {
                        padding: 5vw 15vw;

                        .banquan {
                            display: flex;
                            justify-content: center;

                            .list {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                padding: 0 5vw;

                                li {
                                    font-size: 18px;
                                }

                                li:first-child {
                                    padding-right: 12px;
                                }
                            }
                        }
                    }

                    .new {
                        padding: 5vw;
                        text-align: center;

                        p {
                            font-size: 24px;
                            padding: 24px;
                            border-radius: 12px;
                            text-align: start;
                            margin: 12px 0;
                            background-color: #f8f8f8;
                        }

                        .image {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 90vw;
                            height: 45vw;
                            overflow: hidden;
                            border-radius: 12px;
                            margin: 36px 0;
                            background-color: #f8f8f8;

                            img {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>