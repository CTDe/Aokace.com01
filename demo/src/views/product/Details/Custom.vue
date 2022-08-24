<template>
    <div class="custom"  @click.stop=" vshow = !vshow">
        <div class="tab">
            <div class="tabnav">

                <div class="back">
                    <BackVue msg="" />
                </div>

                <div class="connav">
                    <div class="title">
                        {{t("Custom.title")}}

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

        <div class="content">
          <div class="title">
              {{t("Custom.title")}}
          </div>
          <div class="introduce">
              <ul>
                <li>
                  <h1>
                    {{t("Custom.H11")}}
                  </h1>
                </li>
                <li>
                  <p>
                    {{t("Custom.p1")}}
                  </p>
                  <p>
                    {{t("Custom.p2")}}
                  </p>
                  <p>
                    {{t("Custom.p3")}}
                  </p>
                  <p>
                    {{t("Custom.p4")}}
                  </p>
                  <p>
                    {{t("Custom.p5")}}
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  <h1>
                    {{t("Custom.H12")}}
                  </h1>
                </li>

                <li>
                  <p>
                    {{t("Custom.p6")}}
                  </p>
                </li>
              </ul>
            
          </div>

          <div class="product">
            <div class="list">
              <div class="image">
                  <img v-lazy="imgUrl2" alt="Spectroradiometric Parameters" />
              </div>

              <ul class="text">
                <li>
                  <h5>
                    {{t("Custom.TH1")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp1")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH2")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp2")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH3")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp3")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH4")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp4")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH5")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp5")}}
                  </p>
                </li>
              </ul>
            </div>

            <div class="list">
              <div class="image">
                  <img v-lazy="imgUrl3" alt="Spectroradiometric Parameters" />
              </div>

              <ul class="text">
                <li>
                  <h5>
                    {{t("Custom.TH6")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp6")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH7")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp7")}}
                  </p>
                </li>

                <li>
                  <h5>
                    {{t("Custom.TH8")}}
                  </h5>
                  <p>
                    {{t("Custom.Tp8")}}
                  </p>
                </li>


              </ul>
            </div>
          </div>
        </div>

        <div class="color">
          <div class="title">
              {{t("Custom.title3")}}
          </div>

          <div class="image">
              <img v-lazy="imgUrl1" alt="Spectroradiometric Parameters" />
          </div>

          <div class="txt">
            <p>
              {{t("Custom.Tp9")}}
            </p>

            <p>
              {{t("Custom.Tp10")}}
            </p>
          </div>
        </div>



    </div>
</template>

<script>
    import BackVue from '@/components/Back.vue'
    import { reactive } from '@vue/reactivity';

    import { useI18n } from "vue-i18n"

    export default {
        name: 'CustomVue',
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

                imgUrl1:require("@/assets/image/pdetails/Custom/Spectral.png"),
                imgUrl2:require("@/assets/image/pdetails/Custom/Custom_01.png"),
                imgUrl3:require("@/assets/image/pdetails/Custom/Custom_02.png"),
               
                
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

        .custom{
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

            .content {
                  margin: 0 auto;
                  padding: 80px 0 0;
                  text-align: center;

                  .title{
                      padding: 5vw 15vw;
                      font-size: 2.8vw;
                      letter-spacing: 2px;
                      font-family: Barld;
                  }

                  .introduce{
                    padding: 0 10vw 5vw;
                    column-count: 2;

                    ul{
                      -webkit-column-break-inside: avoid;
                      padding: 2.5VW ;
                      overflow: hidden;
                      
                
                      li{
                        
                        width: 35VW;
                        text-align: start;
                        
                        h1{
                          font-size: 2.4vw;
                          padding: 2.5vw 0;
                        }
                        p{
                          font-size: 1.5vw;
                          
                        }
                      }

                      li:last-child{
                        width: 37.5vw;
                      }
                    }
                  }

                  .product{
                    column-count: 2;
                    padding: 5vw 10vw;
                    background-color: #f8f8f8;
                    column-gap: 5vw;
                    .list{
                      width: 37.5vw;
                      border-radius: 12px;
                      overflow: hidden;
                      box-shadow: 0 0 25px 0 #eee;
                       -webkit-column-break-inside: avoid;

                       padding: 0 0 1.5vw;

                      .image{
                        width: 37.5vw ;
                        height: 18.75vw;
                        

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        img{
                          width: 37.5vw;
                        }


                      }  

                      .text{
                        column-count: 2;
                        text-align: start;
                        padding: 2.5vw ;
                        li{
                          -webkit-column-break-inside: avoid;
                         padding: 1vw;
                         h5{
                          font-size: 1.2vw;
                          padding: 0 0 .5vw;
                         }

                         p{
                          font-size: 1vw;
                         }

                        }

                        li:hover{
                          background-color: #fff;
                        }
                      }                  
                    }

                   

                  }

               
                }

            .color{
                  margin: 0 auto;
                  padding: 80px 10vw 0;
                  text-align: center;

                  .title{
                      padding: 5vw 15vw;
                      font-size: 2.8vw;
                      letter-spacing: 2px;
                      font-family: Barld;
                  }

                  .image{
                        width: 80vw;
                        height: 30vw;
                       

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        img{
                          width: 80vw;
                        }

                  }

                  .txt{
                    column-count: 2;
                    column-gap: 2.5vw;
                    p{
                      width: 33.75;
                      -webkit-column-break-inside: avoid;
                      padding: .5vw 2.5vw 2.5vw;
                      font-size: 1.5vw;
                    }

                    p:first-child{
                      text-align: start;
                    }
                    p:last-child{
                        text-align: end;
                    }
                    
                  }
                  
            }
        }
    }

    @media screen and (max-width:1201px) {

        .custom {
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

            .content {
                  padding: 96px 0 0;

                }
        }
    }
</style>