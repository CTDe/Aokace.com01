<template>
    <div class="banner">
       <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            :autoplay="{ delay: 3600, disableOnInteraction: false}"
            class="mySwiper"
        >

            <swiper-slide>
                <BerlistVue/>
            </swiper-slide>
            <swiper-slide>
                <Berlist4KVue/>
            </swiper-slide>
            <swiper-slide>
                <BerlistHD3Vue/>
            </swiper-slide>
            <swiper-slide>
                <BerlistCMEFVue/>
            </swiper-slide>
    </swiper>
    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import "@/assets/css/style.css";
    import { Pagination, Navigation, Autoplay} from "swiper";

    import BerlistVue from "./banner/bannerlist.vue"
    import Berlist4KVue from "./banner/banner4K.vue"
    import BerlistHD3Vue from "./banner/bannerHD3.vue"
    import BerlistCMEFVue from "./banner/bannerCMEFy.vue"



   

    export default {
        name: 'BannerVue',
        props: {
            msg: String
        },
        components: {
            Swiper,
            SwiperSlide,
            BerlistVue,
            Berlist4KVue,
            BerlistHD3Vue,
            BerlistCMEFVue,
           
        },
        
        setup() {

            const BerlistVue = () => import('./banner/bannerlist.vue')
            const BerlistCMEFVue = () => import('./banner/bannerCMEFy.vue')
            const BerlistHD3Vue = () => import('./banner/bannerHD3.vue')
            const Berlist4KVue = () => import('./banner/banner4K.vue')
            return {
                modules: [Pagination, Navigation, Autoplay],
                BerlistVue,
                Berlist4KVue,
                BerlistHD3Vue,
                BerlistCMEFVue,
            };

            
            
        },

        mounted () {
           
        },

       
    }
</script>

<style lang="scss" scoped>
    .swiper {
        width: 100VW;
        height: 45VW;

        margin-left: auto;
        margin-right: auto;

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;

            .swiper-slide img {
                display: block;
                width: 100vw;
                height: auto;
                object-fit: cover;
            }
        }

        

    }

        

        


       


        .swiper-button-next:hover,
        .swiper-button-prev:hover{
            background-color: #1536923f;
        }
    @media screen and (min-width:1201px) {
        .banner {
            position: relative;
            height: 45vw;
            background-color: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            

        }
    }

    @media screen and (max-width:1201px) {
        .banner {
           
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

            .prev {
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
