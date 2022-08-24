<template>
    <div class="content">
        <div class="lists">
            <h3>
                {{t("Factory.Wuzhou")}}
            </h3>
            <ul>
                <li>
                    <span class="icon-location"></span>
                    <span>
                        {{t("Factory.add")}}
                    </span>
                </li>

                <li>
                    <span class="icon-phone"></span>
                    <span>
                        {{t("Factory.tel")}}
                    </span>
                </li>

                <li>
                    <span class="icon-printer"></span>
                    <span>
                        {{t("Factory.printer1")}}
                    </span>
                </li>

                <li>
                    <span class="icon-mail"></span>
                    <span>
                        {{t("Factory.mail1")}}
                    </span>
                </li>

                <li>
                    <span class="icon-ems"></span>
                    <span>
                        {{t("Factory.ems1")}}
                    </span>
                </li>

            </ul>

        </div>

        <div class="lists">
            <h3>
                {{t("Factory.shenzhen")}}
            </h3>
            <ul>
                <li>
                    <span class="icon-location"></span>
                    <span>
                        {{t("Factory.add2")}}
                    </span>
                </li>

                <li>
                    <span class="icon-phone"></span>
                    <span>
                        {{t("Factory.tel2")}}
                    </span>
                </li>

                <li>
                    <span class="icon-printer"></span>
                    <span>
                        {{t("Factory.printer2")}}
                    </span>
                </li>

                <li>
                    <span class="icon-mail"></span>
                    <span>
                        {{t("Factory.mail2")}}
                    </span>
                </li>



            </ul>

        </div>
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
    export default {
        name: 'FactorsyVue',
        props: {
            msg: String,
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
@import"./assets/font/font.css";
    @media screen and (min-width:1201px) {


        .content {
            column-count: 2;
            padding: 2.5vw 0 5vw;
            column-gap: 5vw;

            .lists {
                -webkit-column-break-inside: avoid;
                width: 32.5vw;
                padding: 2.5vw;
                border-radius: 24px;


                h3 {
                    font-weight: Bold;
                    font-size: 2.5vw;
                    padding: 0 0 1.5vw;
                }

                li {
                    padding: .5vw 0;
                    font-weight: Barum;


                    span {
                        font-size: 1vw;
                        letter-spacing: 1px;
                    }

                    span:last-child {
                        padding-left: 1.5vw;
                    }
                }
            }

            .lists:hover {
                box-shadow: 0 0 25px 0 #eee;

                h3 {
                    color: #153692;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {


        .content {
            padding: 0 5vw 24px;
            overflow: hidden;

            .lists {
                padding: 48px 0 0;

                h3 {
                    font-size: 32px;
                    letter-spacing: 1px;
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
                    }
                }
            }
        }
    }
</style>