<template>
    <div class="content" @click.stop=" vshow = !vshow">

        <div class="tab">
            <div class="tabnav">

                <div class="back">
                    <BackVue msg="" />
                </div>

                <div class="connav">
                    <div class="title">
                        {{t("AGS102L.title")}}

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

            
        </div>

        <div class="contents">
                <div class="list">
                    <div class="text">
                        <h3>
                           {{t("AGS102L.H31")}} 
                        </h3>
                        <p>
                           {{t("AGS102L.p1")}} 
                        </p>

                    </div>

                    <div class="image">
                        <img v-lazy="imgUrl1" alt="AGM 102L" />
                    </div>
                </div>

                <div class="video">
                    <div class="title">
                        <h1>
                            {{t("AGS102L.H11")}} 
                        </h1>
                    </div>
                    <iframe src="https://www.youtube.com/embed/KZCtHkE3zdg" frameborder=0 allowfullscreen>
                    </iframe>
                </div>

                <div class="listss">
                    <div class="title">
                        <h1>{{t("AGS102L.H12")}} </h1>
                    </div>
                    <div class="lists">
                        <div class="image">
                            <img v-lazy="imgUrl2" alt="AGM 102L" />
                        </div>

                        <div class="text">
                            <h3>
                               {{t("AGS102L.H32")}} 
                            </h3>
                            <p>
                               {{t("AGS102L.p2")}} 
                            </p>

                        </div>
                    </div>

                    <div class="lists">
                        <div class="image">
                            <img v-lazy="imgUrl3" alt="AGM 102L" />
                        </div>

                        <div class="text">
                            <h3>
                               {{t("AGS102L.H33")}} 
                            </h3>
                            <p>
                              {{t("AGS102L.p3")}} 
                            </p>

                        </div>
                    </div>

                    <div class="lists">
                        <div class="image">
                            <img v-lazy="imgUrl4" alt="AGM 102L" />
                        </div>

                        <div class="text">
                            <h3>
                               {{t("AGS102L.H34")}} 
                            </h3>
                            <p>
                               {{t("AGS102L.p4")}} 
                            </p>

                        </div>
                    </div>

                 

                    <div class="lists">
                        <div class="image">
                            <img v-lazy="imgUrl5" alt="AGM 102L" />
                        </div>

                        <div class="text">
                            <h3>
                               {{t("AGS102L.H35")}} 
                            </h3>
                            <p>
                              {{t("AGS102L.p5")}}  
                            </p>

                        </div>
                    </div>

                    
                    <div class="lists">
                        <div class="image">
                            <img v-lazy="imgUrl6" alt="AGM 102L" />
                        </div>

                        <div class="text">
                            <h3>
                               {{t("AGS102L.H36")}} 
                            </h3>
                            <p>
                              {{t("AGS102L.p6")}}  
                            </p>

                        </div>
                    </div>


                </div>

                <div class="tepa">
                    <h1>
                       {{t("AGS102L.H13")}} 
                    </h1>

                 

                    <!--//接口-->
                    <div class="litps">
                        <div class="titles">
                            <h2>
                               {{t("AGS102L.H21")}} 
                            </h2>
                        </div>
                        <ul>

                            <li>
                                <h3>
                                   {{t("AGS102L.TH1")}} 
                                </h3>
                                <p>
                                 {{t("AGS102L.Tp1")}}   
                                </p>
                            </li>

                            <li>
                                <h3>
                                   {{t("AGS102L.TH2")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp2")}}  
                                </p>
                            </li>

                            <li>
                                <h3>
                                   {{t("AGS102L.TH3")}} 
                                </h3>
                                <p>
                                   {{t("AGS102L.Tp3")}} 
                                </p>
                            </li>

                            <li>
                                <h3>
                                   {{t("AGS102L.TH4")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp4")}} 
                                </p>
                            </li>

                            <li>
                                <h3>
                                   {{t("AGS102L.TH5")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp5")}}  
                                </p>
                            </li>

                             <li>
                                <h3>
                                   {{t("AGS102L.TH6")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp6")}}  
                                </p>
                            </li>

                             <li>
                                <h3>
                                   {{t("AGS102L.TH7")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp7")}}  
                                </p>
                            </li>

                             <li>
                                <h3>
                                   {{t("AGS102L.TH8")}} 
                                </h3>
                                <p>
                                  {{t("AGS102L.Tp8")}}  
                                </p>
                            </li>

                        </ul>
                    </div>

                  
                    

                </div>

            </div>

    </div>
</template>

<script>
    import BackVue from '@/components/Back.vue'
    import { reactive } from '@vue/reactivity';

    import { useI18n } from "vue-i18n"



    export default {
        name: 'P102LVue',
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

                
                imgUrl1:require("@/assets/image/pdetails/102L/102L_01.png"),
                imgUrl2:require("@/assets/image/pdetails/102L/102L_02.png"),
                imgUrl3:require("@/assets/image/pdetails/102L/102L_03.png"),
                imgUrl4:require("@/assets/image/pdetails/102L/102L_04.png"),
                imgUrl5:require("@/assets/image/pdetails/102L/102L_06.png"),
                imgUrl6:require("@/assets/image/pdetails/102L/102L_05.png"),

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

                
            }

            .contents {
                    margin: 0 auto;


                    .list {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10vw 15vw 5vw;

                        .text {
                            padding: 0;
                            font-family: Barld;
                            position: relative;
                            //writing-mode: vertical-rl;
                            h3 {
                                font-size: 2.8vw;
                                letter-spacing: 2px;
                            }

                            p {
                                font-size: 1.4vw;
                                letter-spacing: 2px;
                                padding: 1.5vw 0 2.5vw;
                                color: #666;
                                font-family: Barum;
                            }

                            span {
                                font-size: 5vw;
                                color: #999;
                                position: absolute;
                                bottom: -4vw;
                            }
                        }

                        .image {
                            width: 70vw;
                            height: 35vw;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 100%;
                            }
                        }

                       
                    }

                    .video {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 5vw 0;
                        background-color: #f8f8f8;

                        .title {
                            padding: 0 0 2.5vw;
                        }

                        iframe {
                            width: 72vw;
                            height: 40.5vw;
                            background-color: #ccc;
                        }
                    }

                    .listss {
                        text-align: center;
                        padding: 5vw 0;

                        .title {
                            padding: 0 0 2.5vw;
                        }

                        .lists {
                            text-align: center;
                            display: flex;
                            justify-content: space-between;
                            flex-direction: row-reverse;
                            align-items: center;
                            padding: 5vw 15vw;
                            position: relative;


                            .text {
                                padding: 2.5vw;
                                width: 30vw;
                                font-family: Barld;
                                position: relative;
                                text-align: left;
                                //writing-mode: vertical-rl;
                                h3 {
                                    font-size: 2.4vw;
                                    letter-spacing: 2px;
                                }

                                p {
                                    font-size: 1.2vw;
                                    letter-spacing: 2px;
                                    padding: 1.5vw 0 2.5vw;
                                    color: #666;
                                    font-family: Barum;
                                }

                                span {
                                    font-size: 5vw;
                                    color: #999;
                                    position: absolute;
                                    bottom: -4vw;
                                }
                            }

                            .image {
                                width: 32vw;
                                height: 16vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 18px;

                                img {
                                    width: 100%;
                                }
                            }

                            .image:hover{
                               overflow: hidden;
                                img{
                                    position: absolute;
                                    width: 57.5%;
                                   
                                    
                                }
                            }

                           
                        }

                        .lists:nth-child(2n+1) {
                            flex-direction: row;
                            background-color: #f8f8f8;

                            .text {
                                
                                float: right;
                                text-align: end;
                                z-index: 1;
                            }
                        }

                       
                    }

                    .tepa {
                        padding: 5vw 10vw ;
                        background-color: #f8f8f8;


                        h1 {
                            padding: 0 0 2.5vw;
                            text-align: center;
                        }

                        .litps {
                            padding:  2.5vw ;

                            h2 {
                                padding: 0 0 .5vw;
                            }

                            ul {
                                column-count: 3;
                                 


                                li {
                                    padding: .5vw 2.5vw 0;
                                    display: flex;
                                    flex-direction: column;
                                    -webkit-column-break-inside: avoid;
                                    

                                    p {
                                        padding: .5vw 0;
                                    }
                                }

                                
                            }
                        }

                        .litps:hover {
                                    background-color: #fff;
                                    padding: 2.5vw ;
                                }

                        
                      

                        
                    }
                }
        }
    }

    @media screen and (max-width:1201px) {

        .content {
            position: relative;
            z-index: 1000;
            text-align: center;

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

                
            }

            .contents {
                    padding: 96px 0 0;

                    .list {
                        padding: 10vw 5vw;
                        overflow: hidden;

                        .text {
                            text-align: center;
                            font-family: Barld;

                            h3 {
                                font-size: 32px;
                            }

                            p {
                                font-size: 20px;
                                color: #666;
                                padding: 12px 10vw 48px;
                            }

                            span {
                                font-size: 48px;
                                color: #666;
                                text-align: center;
                            }
                        }

                        .image {
                            width: 80vw;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 120%;
                            }
                        }
                    }

                    .video {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 5vw 0;
                        background-color: #f8f8f8;

                        .title {
                            padding: 0 0 2.5vw;
                        }

                        iframe {
                            width: 72vw;
                            height: 40.5vw;
                            background-color: #ccc;
                        }
                    }

                    .listss {
                        padding: 15vw 0 0;
                        background-color: #fff;
                        

                        .lists {
                            padding: 12.5vw 5vw;
                            overflow: hidden;
                            display: flex;
                            flex-direction: column-reverse;
                            align-items: center;


                            .text {
                                text-align: center;
                                font-family: Barld;
                                padding: 5vw 0 0;

                                h3 {
                                    font-size: 32px;
                                }

                                p {
                                    font-size: 20px;
                                    color: #666;
                                    padding: 12px 5vw 48px;
                                }

                                span {
                                    font-size: 48px;
                                    color: #666;
                                    text-align: center;
                                }
                            }

                            .image {
                                width: 80vw;
                                height: 40vw;
                                overflow: hidden;
                                border-radius: 24px;

                                img {
                                    width: 100%;
                                }
                            }
                        }

                        .lists:nth-child(2n+1) {
                            background-color: #f8f8f8;
                        }
                    }

                    .tepa {
                        padding: 10vw 0 0;
                        

                        h1 {
                            padding: 0 5vw;
                            font-size: 36px;
                        }

                        .litps {
                            padding: 2.5vw;

                            h2 {
                                padding: 2.5vw 5vw;
                            }

                            ul {
                                padding: 1.5vw 2.5vw;
                                column-count: 2;
                                text-align: start;

                                li {
                                    -webkit-column-break-inside: avoid;
                                    padding: 1.5vw 7.5vw;

                                    h3 {
                                        font-size: 24px;
                                    }

                                    p {
                                        font-size: 20px;
                                        letter-spacing: 1px;
                                        padding: 1.5vw 0;
                                    }
                                }
                            }
                        }

                        .litps:nth-child(2n+1) {
                            background-color: #f8f8f8;
                        }
                    }
                }
        }
    }
</style>
