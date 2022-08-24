<template>
    <div class="serve">
        <ul class="sercon">
            <li>
                <h3>
                    {{ t("Serve.H31") }}

                </h3>
                <p>
                    {{ t("Serve.p1") }}

                </p>
            </li>
            <li>
                <h3>
                    {{ t("Serve.H32") }}

                </h3>
                <p>
                    {{ t("Serve.p2") }}
                </p>
            </li>
        </ul>
        <div class="download" >
            <div class="content">
                <h3>{{t("Serve.H33")}}</h3>
                <div class="icon" >
                    <span class="icon-download" @click="download" >
                    </span>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import { useI18n } from "vue-i18n"
    export default {
        name: 'ServeVue',
        props: {
            msg: String
        },

        methods:{
            download(){
                    let a = document.createElement('a');
                    a.href = `/static/AOKACE_EN_V1.0.exe`;
                    a.download = 'AOKACE_EN_V1.0.exe';
                    a.click();
                },

        },

        setup() {
            const { t } = useI18n();
            

            return {
                t,
            }
        },

        
    }
</script>

<style lang="scss" scoped>
   

    @media screen and (min-width:1201px){

        .serve {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 0 7.5vw;

            ul {
                display: flex;
                overflow: hidden;
                justify-content: space-between;
                padding: 2.5vw 0 0;

                li {
                    padding: 2.5vw 5vw;
                    list-style-type: none;

                    h3 {
                        font-size: 1.4vw;
                    }

                    p {
                        padding: 1vw 0 0;
                        font-size: 1vw;
                        flex-wrap: wrap;
                    }
                }
            }

            .download {
                padding: .5vw 0 2.5vw;


                .content {
                    width: 40vw;
                    padding: 1vw 5vw;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 12px;
                    background-color: #eee;
                    color: #666;


                    h3 {
                        font-size: 1.4vw;
                    }

                    .icon {
                        padding: 0;
                        cursor: pointer;

                        .icon-download {
                            font-size: 1.6vw;
                        }
                    }
                }

                .content:hover {
                    background-color: #333;
                    color: #fff;
                    transition: background-color .5s linear 0s;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .serve {
            background-color: #f8f8f8;
            padding: 0 0 5vw;

            ul {
                display: flex;
                overflow: hidden;
                flex-direction: column;
                align-items: center;
                padding: 5vw 10vw 0;

                li {
                    padding: 2.5vw 0;
                    list-style-type: none;
                    text-align: center;

                    h3 {
                        font-size: 36px;
                    }

                    p {
                        padding: 2.5vw 0 0;
                        font-size: 20px;
                        flex-wrap: wrap;
                        font-family: Barum;
                        line-height: 1.5;
                        letter-spacing: 1px;
                    }
                }
            }

            .download {
                padding: 5vw;

                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 12px;
                    background-color: #153692;
                    padding: 24px 0;
                    overflow: hidden;
                    color: #fff;

                    h3 {
                        font-size: 24px;
                        padding-left: 5vw;
                    }

                    .icon {
                        cursor: pointer;

                        span {
                            font-size: 4vw;
                            padding: 0 5vw;
                        }
                    }
                }
            }
        }
    }
</style>
