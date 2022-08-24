<template>

    <div class="content">
        <div class="lang" @click="change" @click.stop="ShowHidden = !ShowHidden ; vshow = !vshow">
            <span class="icon-internet"></span>
        </div>

        <!--PC端语言选择弹窗-->
        <div class="web" v-if="ShowHidden">
            <ul class="langs" @click.stop="ShowHidden = !ShowHidden ">
            
                <li  v-for="item in data.lang" :key="item.value" @click="changeLang(item.value)">
                    {{item.label}}
                </li>
            </ul>
        </div>
    </div>



</template>

<script>
import { reactive } from '@vue/reactivity';

import {useI18n} from "vue-i18n"

export default {
    name: "LangVue",
    props: {
        msg: String,
    },
    data() {
        return {

            ShowHidden: false,
            vshow: true,
            selLocale: this.$i18n.locale,
         

        };
    },

    methods: {
        logo() {
            this.$router.push({
                path: '/'
            });
            document.documentElement.scrollTop = 0;
        },



    },

    setup() {

        const { t, locale } = useI18n( {useScope: 'global'});
      
        const data = reactive({
            lang:[
                {label: "ZH", value:"zh"},
                {label: "EN", value:"en"},
                {label: "ES", value:"es"},
                
            ]
        });

        const changeLang = (lang) =>{
            locale.value = lang;
        }

        return {
            t,
            data,
            locale ,
            changeLang,
           
           
        }

    },

}
</script>

<style lang="scss" scoped>
@media screen and (min-width:1201px) {
    .content{
        position: relative;
        width: 2vw;
        height: 2vw;
        display: flex;
        justify-content: center;
        align-content: center;
        
        
        .lang{
            

            


            font-size: 1.2vw;
            color: #fff;
                        
            
            font-family: Barum;
            
        }

        .web{
            position: absolute;
            z-index: 6000;
            padding: 5vw 0 0;
        }
    }
}
</style>
