<template>
<div class="list" @click="list">
    <div class="image">
         <img v-lazy="imgUrl" alt=""/>
    </div>

    <div class="text">
        <router-link to="/AGMUHD1">
        {{ t ("Product_UHD1.link") }}
        
        </router-link>
        
    </div>
</div>
<router-view></router-view>
</template>

<script>
import {useI18n} from "vue-i18n"
export default {
    name: 'PUHD1Vue',
    props: {
        msg: String
    },

     data(){
            return {
                imgUrl:require("@/assets/image/product/Product_list_UHD1.png")
            }
        },

    setup() {
        const { t} = useI18n( );
         return{
              t,  
        }
    },

    methods:{
        list(){
            this.$router.push({
                path: '/AGMUHD1'
            });
        }
    }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width:1201px)  {

    .list {
        width: 18.5vw;
        background-color: #f8f8f8;
        overflow: hidden;
        border-radius: 12px;
        cursor: pointer;

        .image {
            width: 18.5vw;
            height: 18.5vw;

            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
                width: 18.5vw;
            }
        }

        .text {
            width: 15.5vw;
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

    .list:hover {
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

@media screen and (max-width:1201px) {

    .list {
        width: 42.5vw;
        background-color: #f8f8f8;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 0 10px 0 #ccc;

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

            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

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
</style>

