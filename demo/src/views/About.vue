<template>
    <div class="About">
        <div class="header">
            <div class="Aboutnav">
                <router-link to="/Company">{{ t("About.Company") }}</router-link>
                
                <router-link to="/Qualification">{{ t("About.Qualification")}}</router-link>
                <router-link to="/Activity"> {{ t("About.News")}} </router-link>
                <router-link to="/Contact">{{t("About.Contact")}}</router-link>
                
           
            </div>

        </div>
        
        <div class="Aboutcon">
            <router-view/>
            
        </div>
        
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"

    export default {
        name: 'AboutVue',
        props: {
            msg: String
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

        .About {
            position: relative;
            overflow: hidden;

            .header {
                margin-top: 80px;
                position: fixed;
                z-index: 100;
                background-color: #f8f8f8;

                .Aboutnav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10vw 0;
                  
                    a {
                        width: 20vw;
                        line-height: 72px;
                        text-decoration: none;
                        font-size: 1vw;
                        flex-wrap: 600;
                        letter-spacing: 2px;
                        
                        color: #999;
                        text-align: center;
                        font-family: Barum;

                        &.router-link-exact-active {
                            //color: #42b983;
                            color: #333;
                            background-color: #fff;
                            font-family: Barld;
                        }
                    }

                    a:hover{
                        
                        font-family: Barld;
                        
                        
                    }
                }
            }

            .header:hover{
               
                transition: background-color .25s linear 0s;
                
            }

            .Aboutcon {
                padding: 10VW 0;
            }
        }
    }

    @media screen and (max-width:1201px) {
        .About {
            position: relative;
            overflow: hidden;


            .header {
                margin-top: 96px;
                position: fixed;
                z-index: 100;



                .Aboutnav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 96px;
                    background-color: #f8f8f8;

                    a {
                        width: 22.5vw;
                        text-decoration: none;
                        font-size: 14px;
                        flex-wrap: 600;
                        letter-spacing: 0px;
                        color: #666;
                        text-align: center;
                        line-height: 72px;

                        &.router-link-exact-active {
                            //color: #42b983;
                            color: #152692;
                            background-color: #fff;
                            width: 32.5vw;
                            font-size: 18px;
                        }
                    }
                }
            }

            .Aboutcon {
                padding: 168px 0;
                overflow: hidden;
                
            }
        }
    }
</style>
