<template>
    <div class="hands">
        <div class="hand">
            <div class="lists">
                <h3>
                    {{t("hand.name1")}}
                </h3>

                <h5>
                    {{t("hand.area1")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone1")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:luliukui@aokace.com"></a>
                        <a href="mailto:luliukui@aokace.com">
                            {{t("hand.mail1")}}
                        </a>



                    </li>
                </ul>
            </div>

            <div class="lists">
                <h3>
                    {{t("hand.name2")}}
                </h3>

                <h5>
                    {{t("hand.area2")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone2")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:amanda@aokace.com"></a>
                        <a href="mailto:amanda@aokace.com">
                            {{t("hand.mail2")}}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="lists">
                <h3>
                    {{t("hand.name3")}}
                </h3>

                <h5>
                    {{t("hand.area3")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone3")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:shixin@aokace.com"></a>
                        <a href="mailto:shixin@aokace.com">
                            {{t("hand.mail3")}}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="lists">
                <h3>
                    {{t("hand.name4")}}
                </h3>

                <h5>
                    {{t("hand.area4")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone4")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:shixin@aokace.com"></a>
                        <a href="mailto:shixin@aokace.com">
                            {{t("hand.mail4")}}
                        </a>
                    </li>
                </ul>
            </div>


        </div>

        <div class="hand">
            <div class="lists">
                <h3>
                    {{t("hand.name5")}}
                </h3>

                <h5>
                    {{t("hand.area5")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone5")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:leslie@aokace.com"></a>
                        <a href="mailto:leslie@aokace.com">
                            {{t("hand.mail5")}}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="lists">
                <h3>
                    {{t("hand.name6")}}
                </h3>

                <h5>
                    {{t("hand.area6")}}
                </h5>

                <ul>
                    <li>
                        <span class="icon-phone"></span>
                        <span>
                            {{t("hand.phone6")}}
                        </span>
                    </li>

                    <li>
                        <a class="icon-mail" href="mailto:banguiying@aokace.com"></a>
                        <a href="mailto:banguiying@aokace.com">
                            {{t("hand.mail6")}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    
    import { useI18n } from "vue-i18n"
    export default  {
        name: 'HandVue',
       

        setup() {
            const { t } = useI18n();
            return {
                t,
               
            }
        },
    }
</script>

<style lang="scss" scoped>

    @media screen and (min-width:1201px) {
        .hands {


            .hand {
                padding: 2.5vw 0;
                column-count: 4;
                column-gap: 2vw;


                .lists {
                    -webkit-column-break-inside: avoid;
                    padding: 2.5vw;
                    overflow: hidden;
                    width: 13.5vw;
                    margin-bottom: 2.5vw;

                    h3 {
                        font-weight: Bold;
                        font-size: 2vw;
                        padding: 0 0 1.5vw;
                    }

                    h5 {
                        font-size: 1.2vw;
                        color: #333;
                    }

                    li {
                        padding: .5vw 0;
                        font-weight: Barum;


                        span {
                            font-size: 1vw;
                            letter-spacing: 0px;
                        }

                        span:last-child {
                            padding-left: 1.5vw;
                        }

                        a {
                            font-size: 1vw;
                            letter-spacing: 1px;
                            color: #333;
                        }

                        a:last-child {
                            padding-left: 1.5vw;
                        }
                    }
                }

                .lists:hover {
                    box-shadow: 0 0 25vw 0 #eee;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .hands {


            .hand {
                padding: 0 5vw 24px;
                overflow: hidden;
                

                .lists {
                    padding: 48px 0 0;
                    overflow: hidden;
                 

                    h3 {
                        font-size: 32px;
                        letter-spacing: 1px;
                    }

                    h5 {
                        font-size: 26px;
                        color: #666;
                    }

                    ul {
                        padding: 18px 0 0;
                        

                        li {
                            padding: 8px 0;

                            span {
                                font-size: 24px;
                                letter-spacing: 1px;
                            }

                            span:last-child {
                                padding-left: 24px;
                                overflow: hidden;
                            }

                            a {
                                font-size: 24px;
                                letter-spacing: 1px;
                                color: #333;
                            }

                            a:last-child {
                                padding-left: 24px;
                            }
                        }
                    }
                }
            }
        }

        .title:last-child {
            background-color: #f8f8f8;
        }
    }


</style>