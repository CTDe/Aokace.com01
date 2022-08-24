<template>
    <div class="content">
        <div class="lists">
            <div class="text">
                {{ t("Productlist.lists1") }}

            </div>
            <ul>
                <li>
                    <PUHD1Vue msg="" />
                </li>
                <li>
                    <PHD3Vue msg="" />
                </li>
                <li>
                    <PHD2Vue msg="" />
                </li>
                <li>
                    <PHD1Vue msg="" />
                </li>


            </ul>

            <ul>
                <li>
                    <PFHDVue msg="" />
                </li>
         


            </ul>
        </div>

        <div class="lists">
            <div class="text">
                {{ t("Productlist.lists2") }}

            </div>
            <ul>
                <li>
                    <P210Vue msg="" />
                </li>
                <li>
                    <P200Vue msg="" />
                </li>
                <li>
                    <P100Vue msg="" />
                </li>
                <li>
                    <PPL100Vue msg="" />
                </li>
            </ul>

            
        </div>

        <div class="lists">
            
               <listVue/>
           

           
            
        </div>
    </div>
</template>

<script>
    import PUHD1Vue from './list/endoscope/Product_UHD1.vue'
    import PHD3Vue from './list/endoscope/Product_HD3.vue'
    import PHD2Vue from './list/endoscope/Product_HD2.vue'
    import PHD1Vue from './list/endoscope/Product_HD1.vue'
    import P210Vue from './list/LED Light/Product_210.vue'
    import P200Vue from './list/LED Light/Product_200.vue'
    import P100Vue from './list/LED Light/Product_100.vue'
    import PPL100Vue from './list/LED Light/Product_PL100.vue'
  
    import PFHDVue from './list/endoscope/Product_FHD.vue'
    import listVue from './list/list.vue'

    import { useI18n } from "vue-i18n"

    export default {
        name: 'ProductlistVue',
        props: {
            msg: String
        },

        components: {
            PUHD1Vue,
            PHD3Vue,
            PHD2Vue,
            PHD1Vue,
            P210Vue,
            P200Vue,
            P100Vue,
            PPL100Vue,
          
            PFHDVue,
            listVue
           
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


    @media screen and (min-width:1201px) {
        .content {
            padding: 0 0 5vw;

            .lists {
                padding: 5vw 10VW;
                overflow: hidden;

                .text {
                    padding: 2.5vw 0;
                    width: 80vw;
                    text-align: center;
                    font-size: 2vw;
                    color: #333;
                    letter-spacing: 2px;
                }



                ul {
                    padding: 5vw 0 0;
                    column-count: 4;
                    column-gap: 2vw;

                    li {
                        padding: 0 0 2.5vw;
                        -webkit-column-break-inside: avoid; 
                        
                        
                    }
                }
            }

       

     

            .lists:nth-child(2n) {
                background-color: #f8f8f8;
                ul{
                    display: flex;
                    justify-content: space-between;
                    li{
                        -webkit-column-break-inside: avoid;
                    }
                }
            }

            

            
        }
    }

    @media screen and (max-width:1201px) {
        .content {

            
            .lists {
                padding: 10vw 0;

                .text {
                    text-align: center;
                    font-size: 24px;
                    letter-spacing: 2px;
                    padding: 0 5vw 5vw;
                }

                ul {
                    column-count: 2;
                    column-gap: 5vw;
                    padding: 0 5vw;
                    //column-count: 2;
                    //column-gap: 0;

                    li {
                        margin-bottom: 2.5vw;
                        
                    }

                    li:nth-child(2n) {
                        order: 1;
                    }
                }
            }

            .lists:nth-child(3) {
                ul {
                    height: 75vw;
                }
            }

            .lists:nth-child(2n) {
                background-color: #f9f9f9;
            }
        }
    }
</style>>
