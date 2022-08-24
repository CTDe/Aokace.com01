<template>
    <div class="App" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
        <div class="nav">
            <NavsVue msg="" />
        </div>
        <div class="main">

        </div>
        <div class="f">
            <FooterVue msg="" />
            <TopupVue msg="" />
        </div>
    </div>
</template>

<script>
    import NavsVue from './components/Navs.vue'
    import FooterVue from './components/Footer.vue'
    import TopupVue from './components/Topup.vue'
    import { useI18n } from "vue-i18n"


    export default {
        name: 'App',
        components: {
            NavsVue,
            FooterVue,
            TopupVue
        },

         data() {
            return {

                ShowHidden: false,
                vshow: true,
                selLocale: this.$i18n.locale,


            };
        },

        setup() {
            const { t } = useI18n();
            return {
                t,
            }
        },

    }
</script>

<style lang="scss">
@import"./assets/font/font.css";
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    h3 {
        font-family: Barld;
    }

    p {
        font-family: Barum;
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        font-family: Barld;
    }

    .app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        overflow: hidden;
    }

    .nav {
        position: relative;
    }
</style>
