<template>
    <div class="Qualification">
        <div class="list">
            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H31") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p1") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl1" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H32") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p2") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl2" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H33") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p3") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl3" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H34") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p4") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl4" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H35") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p5") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl5" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H36") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p6") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl6" alt="" />
                </li>
            </ul>

            <ul class="lists">
                <li>
                    <h3>
                        {{ t("Qualification.H37") }}
                    </h3>
                    <p>
                        {{ t("Qualification.p7") }}
                    </p>
                </li>

                <li>
                    <img v-lazy="qnUrl7" alt="" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {
        useI18n
    } from "vue-i18n"

    export default {
        name: 'QualificationVue',
        props: {
            msg: String
        },
        data(){
            return{
                qnUrl1:require("@/assets/image/about/Qua/Qua-list_1.png"),
                qnUrl2:require("@/assets/image/about/Qua/Qua-list_2.png"),
                qnUrl3:require("@/assets/image/about/Qua/Qua-list_3.png"),
                qnUrl4:require("@/assets/image/about/Qua/Qua-list_4.png"),
                qnUrl5:require("@/assets/image/about/Qua/Qua-list_5.png"),
                qnUrl6:require("@/assets/image/about/Qua/Qua-list_6.png"),
                qnUrl7:require("@/assets/image/about/Qua/Qua-list_7.png"),
            }
        },
      
       

        setup() {
            const {
                t
            } = useI18n();
            return {
                t,
            }

        }

    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width:1201px) {
        .Qualification {
            padding: 0;
            text-align: center;

            .list {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 80px;

                .lists {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2.5vw;
                    background-color: #f8f8f8;
                    margin-bottom: 2.5vw;
                    border-radius: 12px;

                    li {

                        h3 {
                            font-size: 1.8vw;
                            color: #333;
                            padding: 0 0 1.5vw;
                        }

                        p {
                            font-size: 1.2vw;
                            color: #666;
                        }

                        img {
                            width: 100%;
                        }
                    }

                    li:last-child {
                        width: 25vw;
                        height: 12.5vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                    }

                    li:first-child {
                        width: 30vw;
                        padding: 0 2.5vw;
                        text-align: start;
                        overflow: hidden;
                    }
                }

                .lists:nth-child(2n) {
                    background: none;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .Qualification {
            padding: 125px 0 0;
            text-align: center;

            .list {
                column-count: 1;
                column-gap: 5vw;
                padding: 0 7.5vw;

                .lists {
                    display: flex;
                    flex-direction: column-reverse;
                    margin-bottom: 48px;
                    background-color: #f8f8f8;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 0 15px 0 #ddd;

                    li:first-child {
                        width: 75vw;
                        padding: 5vw;
                        overflow: hidden;

                        h3 {
                            font-size: 4vw;
                            padding: 0 0 1.5vw;
                            color: #333;
                        }

                        p {
                            font-size: 2vw;
                            color: #666;
                        }
                    }

                    li:last-child {
                        width: 85vw;
                        height: 42.5vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        background-color: #ccc;

                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

