<template>
    <div class="list">
        <div class="content">
            <div class="headlight">
                <div class="title">
                   {{ t ("Productli.Light") }}
                </div>
                <div class="ul">
                    <div class="li" @click="LedL">
                        <div class="image">
                            <img v-lazy="LedLUrl" alt="" />
                        </div>
                        <div class="text">
                            <router-link to="/AGMFHD">
                                {{ t ("Productli.AGSL") }}

                            </router-link>
                        </div>
                    </div>

                    <div class="li" @click="LedLM">
                        <div class="image">
                            <img v-lazy="LedLMUrl" alt="" />
                        </div>
                        <div class="text">
                            <router-link to="/AGMFHD">
                                {{ t ("Productli.AGSLM") }}

                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="monitor">
                <div class="title">
                    {{ t ("Productli.Monitor") }}
                </div>
                <div class="monitors" @click="monitor">
                    <div class="image">
                        <img v-lazy="MonsUrl" alt="" />
                    </div>
                    <div class="text">
                        <router-link to="/AGMFHD">
                            {{ t ("Productli.AGD") }}

                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--
        <div class="system">
            <div class="title">
                {{ t ("Productli.System") }} 
            </div>
            <div class="systems" @click="system">
                <div class="listem">
                     <div class="image">
                        <img v-lazy="TemUrl" alt="" />
                    </div>
                    <div class="text">
                        <router-link to="/AGMFHD">
                    
                            {{ t ("Productli.ECS") }}
                        
                        </router-link>
                    </div>
                </div>

                <div class="listem">
                     <div class="image">
                        <img v-lazy="TemUrl" alt="" />
                    </div>
                    <div class="text">
                        <router-link to="/AGMFHD">
                    
                            {{ t ("Productli.ECS") }}
                        
                        </router-link>
                    </div>
                </div>
               
            </div>
        </div>
        -->

    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"

    export default {

        name: 'listVue',
        props: {
            msg: String
        },
        data() {
            return {
                imgUrl: require("@/assets/image/product/Product_list_FHD.png"),
                TemUrl:require("@/assets/image/product/Product_list_system.png"),
                
                LedLUrl:require("@/assets/image/product/Product_list_102L.png"),
                LedLMUrl:require("@/assets/image/product/Product_list_102LM.png"),
                MonsUrl:require("@/assets/image/product/Product_list_Monitors.png"),
            }
        },

        methods: {
            LedL() {
                this.$router.push({
                    path: '/AGS102L'
                });
            },
            LedLM() {
                this.$router.push({
                    path: '/AGS102LM'
                });
            },
            monitor() {
                this.$router.push({
                    path: '/Monitor'
                });
            },

            system() {
                this.$router.push({
                    path: ''
                });
            },
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
        .list {
            width: 80vw;
           
           display: flex;
           justify-content: space-between;
           align-items: flex-start;
            
            

            .title{
                font-size: 2vw;
                color: #333;
                letter-spacing: 2px;
            }

            .content {
               
               
               
                column-count: 2;
                column-gap: 2.5vw;

                .headlight {
                    padding: 0 0 2.5vw;
                    -webkit-column-break-inside: avoid;
                    background-color: #f8f8f8;
                    

                    .title {
                        text-align: center;
                        padding: 2.5vw 0 ;

                    }

                    .ul {
                        width: 35vw;
                        column-count: 2;
                        padding: 2.5vw;
                        

                        .li {
                            width: 16.25vw;
                            -webkit-column-break-inside: avoid;
                        
                            background-color: #f8f8f8;
                            overflow: hidden;
                            border-radius: 12px;
                            cursor: pointer;
                            

                            .image {
                                width: 16.25vw;
                                height: 16.25vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                img {
                                    width: 16.25vw;
                                }
                            }

                            .text {
                                width: 13.25vw;
                                padding: 1.5vw;
                                display: flex;
                                align-items: center;
                                overflow: hidden;


                                a {
                                    font-size: 1.2vw;
                                    line-height: 1.5;
                                    color: #333;
                                    font-family: Barld;
                                    letter-spacing: 1px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2; //设置行数
                                    -webkit-box-orient: vertical;
                                }
                            }
                        }

                        .li:hover{
                            box-shadow: 0 0 25px 0 #eee;
                            .text {
                                background-color: #153692;
                                transition: background-color .5s linear 0s;

                                a {

                                    color: #fff;

                                    transition: color .1s linear 0s;
                                }
                            }
                        }
                    }
                }

                .monitor {
                    width: 37.5vw;
                    text-align: center;
                    -webkit-column-break-inside: avoid;

                    .title {
                        
                        padding: 2.5vw 0 2.5vw;
                    }

                    .monitors {
                        
                        border-radius: 12px;
                        cursor: pointer;
                        overflow: hidden;
                  
                        .image {
                            width: 37.5vw;
                    
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img {
                                width: 37.5vw;
                            }
                        }

                        .text {
                            width: 32.5vw;
                            padding: 2.5vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;


                            a {
                                font-size: 1.2vw;
                                line-height: 1.5;
                                color: #333;
                                font-family: Barld;
                                letter-spacing: 1px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2; //设置行数
                                -webkit-box-orient: vertical;
                            }
                        }
                    }
                    .monitors:hover{
                            box-shadow: 0 0 25px 0 #eee;
                            .text {
                                background-color: #153692;
                                transition: background-color .5s linear 0s;

                                a {

                                    color: #fff;

                                    transition: color .1s linear 0s;
                                }
                            }
                    }
                }
            }

            .system {
                width: 37.5vw;
                padding: 2.5vw ;

                background-color: #f1f1f1;

                
                

                .title {
                    text-align: center;
                    padding: 2.5vw 0 ;
                }

                .systems {
                    
         
                    
                    cursor: pointer;
                    column-count: 2;

                    .listem{
                        width: 16.25vw;
                        overflow: hidden;
                        border-radius: 12px;

                        .image {
                            width: 16.25vw;
                          
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            

                            img {
                                width: 16.25vw;
                                background-color: #f8f8f8;
                            }
                        }

                        .text {
                            width: 11.25vw;
                            padding: 2.5vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;


                            a {
                                font-size: 1.2vw;
                                line-height: 1.5;
                                color: #333;
                                font-family: Barld;
                                letter-spacing: 1px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2; //设置行数
                                -webkit-box-orient: vertical;
                            }
                        }
                    }

                    .listem:hover{
                    
                        .text {
                            background-color: #153692;
                            transition: background-color .5s linear 0s;

                            a {

                                color: #fff;

                                transition: color .1s linear 0s;
                            }
                        }

                        
                    }
                  
                  
                    
                    
                }

                
            }
        }
    }

    @media screen and (max-width:1201px) {
        .list{
            text-align: center;
            .content{
                padding: 5vw 0;
                overflow: hidden;
                .headlight{
                    padding: 0 5vw 5vw;
                    .title{
                        text-align: center;
                        font-size: 24px;
                        letter-spacing: 2px;
                        padding: 0 5vw 5vw;
                    }

                    .ul{
                        column-count: 2;
                        column-gap: 5vw;
                        .li{
                            width: 42.5vw;
                            border-radius: 24px;
                            overflow: hidden;

                            background-color: #fff;
                            box-shadow: 0 0 20px 0 #eee;
                            .image{
                                width: 42.5vw;
                                height: 42.5vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                overflow: hidden;
                                img{
                                    width: 42.5vw;
                                }
                            }

                            .text {

                                display: flex;
                                justify-content: center;
                                align-items: center;
                                overflow: hidden;
                                background-color: #f8f8f8;

                                a {
                                    font-size: 2.8vw;
                                    width: 42.5vw;
                                    line-height: 1.5;
                                    color: #333;
                                    
                                    font-family: Barld;
                                    letter-spacing: 1px;
                                    padding: 5vw;

                                }

                            }
                        }
                    }
                }
                .monitor{
                    background-color: #f8f8f8;
                    padding: 5vw 0 ;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .title{
                        text-align: center;
                        font-size: 24px;
                        letter-spacing: 2px;
                        padding: 0 5vw 5vw;
                    }
                    .monitors{
                        width: 90vw;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #fff;
                        .image{
                            width: 90vw;
                            height: 72vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img{
                                width: 90vw;
                            }

                        }

                        .text {

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            a {
                                font-size: 2.8vw;
                                width: 80vw;
                                line-height: 1.5;
                                color: #333;
                                
                                font-family: Barld;
                                letter-spacing: 1px;
                                padding: 5vw;
                                

                            }

                        }
                    }
                }


            }

            .system{
                text-align: center;
                padding: 5vw ;

                .title{
                        text-align: center;
                        font-size: 24px;
                        letter-spacing: 2px;
                        padding: 0 5vw 5vw;
                    }

                .systems{
                        width: 90vw;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #f8f8f8;
                        box-shadow: 0 0 20px 0 #eee;

                    .image{
                            width: 90vw;
                            height: 135vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img{
                                width: 90vw;
                            }

                    }
                    .text {

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            a {
                                font-size: 2.8vw;
                                width: 80vw;
                                line-height: 1.5;
                                color: #333;
                                
                                font-family: Barld;
                                letter-spacing: 1px;
                                padding: 5vw;
                                

                            }

                        }
                }
            }
        }
    }
</style>