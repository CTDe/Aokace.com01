<template>
    <div class="content">
        <div class="title">
            {{ t("Innew.title") }}

        </div>

        <ul class="New">
            <li>
                <NewlistVuee msg="" />
            </li>

            <li>
                <NewlistVuex msg="" />
            </li>

            <li>
                <NewlistVue msg="" />
            </li>
            

        </ul>
    </div>
</template>

<script>
    import NewlistVue from './New/Newlist.vue'
    import NewlistVuee from './New/Newlists .vue'
    import NewlistVuex from './New/Newlistx.vue'

    import { useI18n } from "vue-i18n"

    export default {
        name: 'NewVue',
        props: {
            msg: String
        },

        components: {
            NewlistVue,
            NewlistVuee,
            NewlistVuex
        },



        setup() {
            const { t } = useI18n();
            return {
                t,
            }
        }

    }
</script>

<style lang="scss" scoped>
   

    @media screen and (min-width:1201px)  {

        .content {
            text-align: center;




            .title {
                padding: 5vw 0vw;
                font-size: 2vw;
                font-family: Barar;
                letter-spacing: 2px;
            }

            .New {
                display: flex;
                justify-content: space-between;
                align-items: center;

                li {
                    background-color: #f8f8f8;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {

        .content {
            text-align: center;

            .title {
                padding: 7.5vw 0 2.5vw;
                font-size: 36px;
                font-family: Barld;
                letter-spacing: 2px;
            }

            .New {
                //display: flex;
                //flex-direction: column;
                //align-items: center;
                column-count: 2;
                overflow: hidden;
                padding: 5vw;
                column-gap: 2.5vw;
                //display: flex;
                //flex-direction: row;
                //flex-wrap: wrap;
                //overflow: hidden;

                li {
                    padding: 0 0 5vw;

                    border-radius: 18px;
                    box-shadow: 0 0 15px 6px #eee;
                    a{
                        font-size: 24px;
                    }
                }

                li:last-child {
                    display: none;
                }
            }
        }
    }
</style>
