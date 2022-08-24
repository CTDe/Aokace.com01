<template>
<!--通用导航栏-->
<div class="header" >
    <!--导航栏-->
    <div class="nav" >
        <!--导航栏LOGO-->
        <div class="logo" @click="logo">
            <span class="icon-LOGO">
                <span class="path1"></span>
                <span class="path2"></span>
            </span>
        </div>

        <!--pc端导航栏内容-->
        <div class="navs">
            <nav>
                <router-link to="/">{{ t("Navs.Home") }}</router-link>
                <router-link to="/Products">{{ t("Navs.Products") }}</router-link>
                <router-link to="/Knowlege">{{ t("Navs.Knowlege") }}</router-link>
                <router-link to="/About">{{ t("Navs.About") }}</router-link>

            </nav>

            <!--pc端语言选择-->
            <div class="lang" @click="change" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
                <span class="icon-internet"></span>
            </div>
        </div>

        <!--移动端菜单按钮-->
        <div class="more" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
            <span class="icon-category" v-if="vshow"></span>
            <span class="icon-close" v-if="ShowHidden"></span>
        </div>
    </div>

    <!--PC端语言选择弹窗-->
    <div class="web" v-if="ShowHidden" @click.stop="ShowHidden = !ShowHidden ">
        <ul class="langs" >
            
            <li  v-for="item in data.lang" :key="item.value" @click="changeLang(item.value)">
                {{item.label}}
            </li>
           
            
           
        </ul>
    </div>

    <!--移动端导航栏弹窗-->
    <div class="tabnav" v-if="ShowHidden" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
        <navtab>
            <router-link to="/" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">{{ t("Navs.Home") }}</router-link>
            <router-link to="/Products" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">{{ t("Navs.Products") }}</router-link>
            <router-link to="/Knowlege" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">{{ t("Navs.Knowlege") }}</router-link>
            <router-link to="/About" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">{{ t("Navs.About") }}</router-link>

        </navtab>

        <!--语言选择列表-->
        <ul class="langs">
            <li  v-for="item in data.lang" :key="item.value" @click="changeLang(item.value)" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
                {{item.label}}
            </li>
        </ul>

    </div>
</div>
<router-view/>
</template>

<script>
import { reactive } from '@vue/reactivity';

import {useI18n} from "vue-i18n"

export default {
    name: "NavsVue",
    props: {
        msg: String,
    },
    data() {
        return {

            ShowHidden: false,
            vshow: true,
            selLocale: this.$i18n.locale,
         

        };
    },

    methods: {
        logo() {
            this.$router.push({
                path: '/'
            });
            document.documentElement.scrollTop = 0;
        },



    },

    setup() {

        const { t, locale } = useI18n( {useScope: 'global'});
      
        const data = reactive({
            lang:[
                
                {label: "English", value:"en"},
                {label: "ESPAÑOL", value:"es"},
                {label: "РУССКИЙ", value:"ru"},
                
            ]
        });

        const changeLang = (lang) =>{
            locale.value = lang;
        }

        return {
            t,
            data,
            locale ,
            changeLang,
           
           
        }

    },

}
</script>

<style lang="scss" scoped>
@media screen and (min-width:1201px) {
    .header {
        position: relative;
        text-align: center;
        position: fixed;
        z-index: 5000;

        .nav {
            padding: 0 10vw;
            width: 80vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;

            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1000;

            background-color: #f8f8f8e8;

            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.308);

            .more {
                display: none;
            }

            .logo {
                cursor: pointer;

                .icon-LOGO {
                    font-size: 18px;
                }
            }

            .navs {
                display: flex;
                align-items: center;

                nav {
                    display: flex;
                    padding-right: 2.5vw;

                    a {
                        font-size: 18px;
                        padding: 0 2.5vw;
                        color: #333;

                        &.router-link-exact-active {
                            color: #152692;
                        }
                    }
                }

                .lang {
                    font-size: 22px;
                    cursor: pointer;

                }
            }

        }

        .web {
            position: fixed;
            top: 80px;
            z-index: 1001;
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

        .tabnav {
            display: none;
        }
    }
}

@media screen and (max-width:1201px) {
    .header {
        position: relative;
        position: fixed;
        z-index: 1000;

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5vw;
            width: 90vw;
            height: 96px;
            
            background-color: #fff;
            overflow: hidden;
            box-shadow: 0 0 10px 0 #ccc;

            .logo {
                .icon-LOGO {
                    font-size: 24px;
                }

            }

            .navs {
                display: none;
            }

            .more {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 12px;

                .icon-category {
                    z-index: 1002;
                    font-size: 28px;
                }

                .icon-close {
                    z-index: 1003;
                    font-size: 28px;
                }

            }
        }

        .web {
            display: none;
        }

        .tabnav {
            position: fixed;
            top: 96px;
            bottom: 0;
            right: 0;
            left: 0;
            text-align: center;

            background-color: #15269250;

            navtab {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 24px 0 0;

                a {
                    padding: 24px 0;
                    background-color: #152692;
                    width: 80vw;
                    margin-bottom: 24px;
                    border-radius: 12px;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 2px;
                }
            }

            .langs {
                padding: 0 10vw 10VW;
                column-count: 3;
                column-gap: 2.5vw;

                li {
                    background-color: #152692;
                    width: 25vw;
                    padding: 24px 0;
                    border-radius: 12px;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 2px;

                }
            }
        }

    }
}
</style>
