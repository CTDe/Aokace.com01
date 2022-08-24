<template>
  <div class="Contact">
        <div class="title">
            {{t("Factory.title")}}
        </div>
        <div class="Comadd">
            <FactorVue />
        </div>
        <div class="title">
            {{t("hand.title")}}
        </div>
       <div class="Hand">
            <HandVue  />
       </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import FactorVue  from './Contact/Factor.vue'
import  HandVue  from './Contact/Hand.vue'


export default {
        name:'ContactVue',
   

        components:{
            FactorVue,
            HandVue,
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
        .Contact{
            padding: 10vw ;
            overflow: hidden;
            .title{
                font-size: 3.6vw;
            }

            .Comadd{
                padding: 0;
              
            }

            .Hand{
                padding: 0;
                
            }

     
        }
    }

    @media screen and (max-width:1201px){
        .Contact{
            padding: 36px 0 0;
            background-color: #fff;
            .title{
                font-size: 36px;
                padding: 48px 5vw 0;
                color:#666;
                text-align: center;
            }

   

           
        }

         .title:last-child{
                background-color: #f8f8f8;
            }
    }    
</style>

