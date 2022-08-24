<!-- There is no root element -->
<template>
    <div class="products">
        <div class="title">
            {{ t("Indexp.title") }}


        </div>

        <div class="content">
            <div class="ulst">
                <div class="list" @click="routerUHD1">
                    <div class="image">
                        <img v-lazy="imgUrl1" alt=""/>
                    </div>
                    <div class="text">
                        <router-link to="/AGMUHD1">{{ t("Indexp.UHD1") }}</router-link>

                    </div>
                </div>

                <div class="list" @click="routerFHD">
                    <div class="image">
                       <img v-lazy="imgUrl2" alt=""/>
                    </div>
                    <div class="text">
                        <router-link to="/AGMFHD">{{ t("Indexp.FHD") }}</router-link>

                    </div>
                </div>

                <div class="list" @click="router210">
                    <div class="image">
                        <img v-lazy="imgUrl3" alt=""/>
                    </div>
                    <div class="text">
                        <router-link to="/AGS210">{{ t("Indexp.AGS210") }}</router-link>

                    </div>
                </div>

            </div>

            <div class="lists" @click="routerHD3">
                <div class="image">
                    <img v-lazy="imgUrl4" alt=""/>
                </div>
                <div class="text">

                    <router-link to="/AGMHD3">{{ t("Indexp.HD3") }}</router-link>
                    <router-link to="/AGMHD3"> &rarr;</router-link>
                    
                </div>
            </div>

            <div class="mores" @click="more">
                {{ t("Indexp.more") }}
            </div>
        </div>

        <router-view />
    </div>
</template>

<script>
    import { useI18n } from "vue-i18n"
 
   
  


    export default {
        name: 'IndexproVue',
        props: {
            msg: String
        },

        
        methods: {
            routerUHD1() {
                //  对应router目录下index.js中定义的path
                this.$router.push({
                    path: '/AGMUHD1'
                });

            },

            routerFHD() {
                //  对应router目录下index.js中定义的path
                this.$router.push({
                    path: '/AGMFHD'
                });

            },

            router210() {
                //  对应router目录下index.js中定义的path
                this.$router.push({
                    path: '/AGS210'
                });

            },

            routerHD3() {
                //  对应router目录下index.js中定义的path
                this.$router.push({
                    path: '/AGMHD3'
                });

            },

            more() {
                this.$router.push({
                    path: '/Products'
                });
            }
        },


        data(){
            return {
                imgUrl1:require("@/assets/image/index/index_product_UHD1.png"),
            
                imgUrl2:require("@/assets/image/index/index_product_FHD.png"),

                imgUrl3:require("@/assets/image/index/index_product_210.png"),

                imgUrl4:require("@/assets/image/index/index_product21_HD3.png"),
            }
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
   

    @media screen and (min-width:1201px) {
        a {
            font-family: Barld;
        }

        .products {
            padding: 0 10vw;

            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5vw 0 2vw;
                font-size: 2vw;
                font-family: Barar;
                letter-spacing: 2px;
            }

            .content {

                .ulst {
                    display: flex;
                    justify-content: space-between;
                    padding: 2.5vw 0 4vw;

                    .list {
                        width: 25vw;
                        border-radius: 18px;
                        overflow: hidden;
                        background-color: #f8f8f8;
                        cursor: pointer;
                        

                        .image {
                            width: 25vw;
                            height: 25vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img {
                                width: 25vw;
                            }
                        }

                        .text {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            
                            overflow: hidden;
                            width: 25vw;

                            a {
                                font-size: 1.4vw;
                                letter-spacing: 2px;
                                flex-wrap: wrap;
                                width: 20vw;
                                padding: 2.5vw;
                                color: #333;
                                text-align: center;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .list:hover {
                    
                       

                        .text {
                            background-color: #153692;
                            transition: background-color .5s linear 0s;

                            a {
                                color: #fff;
                            }

                            button {
                                background-color: #15369250;

                                span {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }

                .lists {
                    position: relative;
                   
                    
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    display: flex;
                    justify-content: flex-end;
                    


                    .image {
                        width: 60vw;
                        height: 30vw;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        overflow: hidden;

                        

                        img {
                            width: 100%;
                        }
                    }

                    .text {
                        
                       
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding: 7.5vw;
                        width: 25vw;

                        display: flex;
                        flex-direction: column;
                        
                        
                        a{
                            color: #333;
                            font-size: 2vw;
                            letter-spacing: 2px;

                            padding: 0 0 2.5vw;

                            
                        }

                        

                       
                        
                    }
                }

                .lists:hover {
                    
                    border-radius: 12px;
                    overflow: hidden;

                    
                    
                    

                    .text {
                       
                        
                         top: 2.5vw;
                         left: 2.5vw;

                        a:last-child {
                            font-size: 4vw;
                            color: #153692;
                            transition: color .5s linear 0s;
                        }
                    }
                }

                .mores {
                    font-size: 1.6vw;
                    margin-top: 5vw;
                    padding: 2.5vw 0;
                   
                    text-align: center;
                    letter-spacing: 2px;
                    border-radius: 18px;
                    cursor: pointer;
                    color: #666;
                }

                .mores:hover {
                     background-color: #f8f8f8;
                     color: #153692;
                }
            }
        }
    }

    @media screen and (max-width:1201px) {
        .products {
            padding: 10vw 5vw;
            background-color: #fff;

            .title {
                padding: 0 0 5vw;
                text-align: center;
                font-family: Barld;
                font-size: 36px;
                letter-spacing: 2px;
            }

            .content {
                .ulst {
                    column-count: 2;
                    column-gap: 2.5vw;
                    padding: 0 0 4vw;

                    .list:last-child {
                        display: none;
                    }

                    .list {
                        width: 42.5vw;
                        background-color: #fff;
                        box-shadow: 0 0 25px 0 #ddd;
                        border-radius: 12px;
                        overflow: hidden;

                        .image {
                            width: 42.5vw;
                            height: 42.5vw;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;

                            img {
                                width: 100%;
                            }
                        }

                        .text {
                            width: 42.5vw;
                            display: flex;
                            flex-wrap: wrap;
                            overflow: hidden;
                            text-align: center;
                            background-color: #f8f8f8;

                            a {
                                font-size: 24px;
                                padding: 2.5vw 5vw;
                                letter-spacing: 1px;
                                color: #333;
                            }
                        }
                    }
                }

                .lists {
                    background-color: #fff;
                    box-shadow: 0 0 25px 0 #ddd;
                    border-radius: 12px;
                    overflow: hidden;

                    .image {
                        width: 90vw;
                        height: 45vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;

                        img {
                            width: 100%;
                        }
                    }

                    .text {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        overflow: hidden;
                        text-align: center;
                        background-color: #f8f8f8;

                        a {
                            width: 90vw;
                            font-size: 24px;
                            padding: 5vw 0;
                            color: #333;
                            letter-spacing: 1px;
                        }

                        a:last-child{
                            display: none;
                        }
                    }
                }

                .mores {
                    font-size: 24px;
                    margin: 72px 0 0;
                    padding: 36px 0;
                    background-color: #f1f1f1;
                    color: #333;
                    text-align: center;
                    letter-spacing: 2px;
                    border-radius: 12px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
