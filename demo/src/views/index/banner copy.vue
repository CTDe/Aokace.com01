<template>
    <div class="banner">
        <div class="next" @click="BerlistVue">
            <span class="icon-chevron_forward"></span>
        </div>
        <div class="Previous" @click="BerlistVue">
            <span class="icon-chevron_backward"></span>
        </div>
        <dic class="bercon">
            <BerlistVue msg="" />
        </dic>
    </div>
</template>

<script>
    import BerlistVue from './banner/bannerlist.vue'

    export default {
        name: 'BannerVue',
        props: {
            msg: String
        },
        components: {
            BerlistVue
        },
        setup() {

        },
    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width:961px) {
        .banner {
            position: relative;
            height: 45vw;
            background-color: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            align-items: center;

            .next {
                position: absolute;
                right: 5vw;
                z-index: 10;

                .icon-chevron_forward {
                    font-size: 2.5vw;
                    padding: 1.5vw;
                    background-color: #ffffff80;
                }
            }

            .next:hover {

                .icon-chevron_forward {
                    background-color: #153692;
                    transition: background-color .5s linear 0s;
                    color: #fff;
                    transition: color .1s linear 0s;
                }
            }



            .Previous {
                position: absolute;
                left: 5vw;
                z-index: 10;

                .icon-chevron_backward {
                    font-size: 2.5vw;
                    padding: 1.5vw;
                    background-color: #ffffff80;
                }
            }

            .Previous:hover {
                .icon-chevron_backward {
                    background-color: #153692;
                    transition: background-color .5s linear 0s;
                    color: #fff;
                    transition: color .1s linear 0s;
                }
            }
        }
    }

    @media screen and (max-width:961px) {
        .banner {
            padding: 96px 0 0;
            position: relative;
            height: 45vw;
            background-color: #ccc;
            display: flex;
            align-items: center;

            .next {
                position: absolute;
                right: 5vw;
                z-index: 10;

                .icon-chevron_forward {
                    font-size: 5vw;
                    padding: 2.5vw;
                    background-color: #ffffff80;
                }
            }

            .Previous {
                position: absolute;
                left: 5vw;
                z-index: 10;

                .icon-chevron_backward {
                    font-size: 5vw;
                    padding: 2.5vw;
                    background-color: #ffffff80;
                }
            }
        }
    }
</style>
