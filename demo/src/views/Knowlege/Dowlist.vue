<template>
    <div class="list">
        <div class="aoapp" >
            <div class="title">
                {{t("Dlisen.titleapp")}}
            </div>
            <div class="contents">
                
                <span class="icon-download" type="primary" @click="downloadApp" >
                    
                </span>
            </div>
        </div>
        <div class="endoscope">
            <div class="title">
                {{t("Dlisen.title1")}}
            </div>
            <ul>
                <li>
                    <h3>
                        {{t("Dlisen.h31")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p1")}}
                    </p>

                    <span type="primary" class="icon-download" @click="download4k"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h32")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p2")}}
                    </p>

                    <span class="icon-download" @click="downloadHD3"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h33")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p3")}}
                    </p>

                    <span class="icon-download" type="primary" @click="downloadUSB"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h34")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p4")}}
                    </p>

                    <span class="icon-download" type="primary" @click="downloadHD2"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h35")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p5")}}
                    </p>

                    <span class="icon-download" type="primary" @click="downloadHD1"></span>

                </li>
            </ul>
        </div>
        <div class="headlamp">
            <div class="title">
                {{t("Dlisen.title2")}}
            </div>
            <ul>
                <li>
                    <h3>
                        {{t("Dlisen.h36")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p6")}}
                    </p>

                    <span class="icon-download" @click="download210"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h37")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p7")}}
                    </p>

                    <span class="icon-download" @click="download200"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h38")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p8")}}
                    </p>

                    <span class="icon-download" @click="download100"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h39")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p9")}}
                    </p>

                    <span class="icon-download" @click="downloadPL"></span>

                </li>

            </ul>
        </div>
        <div class="ledlight">
            <div class="title">
                {{t("Dlisen.title3")}}
            </div>
            <ul>
                <li>
                    <h3>
                        {{t("Dlisen.h310")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p10")}}
                    </p>

                    <span class="icon-download" @click="downloadL"></span>

                </li>
                <li>
                    <h3>
                        {{t("Dlisen.h311")}}
                    </h3>
                    <p>
                        {{t("Dlisen.p11")}}
                    </p>

                    <span class="icon-download" @click="downloadLM"></span>

                </li>


            </ul>
        </div>
    </div>
</template>

<script>
    import { reactive } from '@vue/reactivity';
    
    import { useI18n } from "vue-i18n"
      




    export default {
        name: 'DowlistVue',
        props: {
            msg: String,
        },

        

        setup() {

            const { t, locale } = useI18n({ useScope: 'global' });

            const data = reactive({
                lang: [
                    { label: "ZH", value: "zh" },
                    { label: "EN", value: "en" },
                    { label: "ES", value: "es" },

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

        methods: {
                downloadApp(){
                    let a = document.createElement('a');
                    a.href = `/static/AOKACE_EN_V1.0.exe`;
                    a.download = 'AOKACE_EN_V1.0.exe';
                    a.click();
                },

                download4k(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadHD3(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadHD2(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadHD1(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadUSB(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/USB Endoscope.pdf`;
                    a.download = 'USB Endoscope.pdf';
                    a.click();
                },

                download210(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                download200(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                download100(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadPL(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadL(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },

                downloadLM(){
                    let a = document.createElement('a');
                    a.href = `/static/pdf/UHD1.pdf`;
                    a.download = 'UHD1.pdf';
                    a.click();
                },
            },

          
    }
</script>

<style lang="scss" scoped>
    

    @media screen and (min-width:1201px) {
        .list {
            padding: 0 0 5vw;
            text-align: center;
            background-color: #fff;

            .title {
                font-size: 1.6vw;
                font-family: Barld;
            }

            ul {
                column-count: 2;
                padding: 5vw;

                li {
                    width: 35vw;
                    padding: 0 2.5vw;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #f8f8f8;
                    margin-bottom: 2.5vw;
                    border-radius: 12px;

                    h3 {
                        font-size: 1.2vw;
                        width: 17.5vw;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-align: start;
                        padding-right: 2.5vw;
                    }

                    p {
                        font-size: .9vw;
                    }

                    .icon-download {
                        font-size: 1.6vw;
                        padding: 1.5vw;
                        cursor: pointer;
                    }
                }

                li:hover {
                    background-color: #153692;
                    color: #fff;
                }
            }

            .endoscope {
                padding: 7.5vw 0 0;
               

                li {
                    background-color: #f8f8f8;
                }
            }

            .headlamp {
                padding: 7.5vw 0 0;
                background-color: #f8f8f8;

                li {
                    background-color: #fff;
                }
            }

            .ledlight {
                padding: 7.5vw 0 0;
               

                li {
                    background-color: #f8f8f8;
                }
            }

            .aoapp {
                padding: 10vw 20vw 0;
                background-color: #153692;

                .title{
                    color: #fff;
                }

                .contents {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  
                    
                    padding: 2.5vw;
                    border-radius: 12px;
                    color: #fff;

                    

                    .icon-download {
                        font-size: 3vw;
                        padding: 1.5vw;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .list {
            padding: 0 0 48px ;

            .aoapp {
                padding: 48px;
                background-color: #153692;

                .title{
                    color: #fff;
                }

                .contents {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                   
                    
                    .icon-download {
                        font-size: 48px;
                        padding: 24px ;
                        color: #fff;
                    }
                }
            }


            .endoscope {
                padding: 48px;
            }

            .headlamp {
                padding: 48px;
                background-color: #f8f8f8;
            }

            .ledlight {
                padding: 48px;
            }

            .title {
                text-align: center;
                padding: 24px 0 36px;
                font-size: 36px;
                font-family: Barld;
            }

            ul {
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding:  36px;
                    margin-bottom: 24px;
                    background-color: #fff;
                    border-radius: 12px;
                    box-shadow: 0 0 15px 0 #eee;

                    h3 {
                        font-size: 24px;
                        width: 37.5vw;
                        padding-right: 2.5vw;
                        font-family: Barld;
                        color: #333;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    p {
                        display: none;
                    }

                    .icon-download {
                        font-size: 36px;
                        color: #153692;
                    }
                }
            }
        }
    }
</style>