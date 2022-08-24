<template>
<router-link to >
    <span @click="$router.back()">&lt; {{ t("Back.text")}}</span>
</router-link>
</template>

<script>
import {useI18n} from "vue-i18n"
export default {
    name: 'BackVue',
    props: {
        msg: String
    },

    setup(){
        const { t} = useI18n( );
         return{
              t,  
        }
    },
  
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:1201px) {
    span {
        font-size: 1.2vw;
        color: #fff;
        padding: 1.5vw 0;

    }
}

@media screen and (max-width:1201px) {
    span {
        font-size: 18px;
        color: #fff;
        padding: 1.5vw 0;
        line-height: 96px;

    }
}
</style>
