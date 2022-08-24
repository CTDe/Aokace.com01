<template>
<div class="top">
    <ul class="contactuse">
        <li title="contact us">
            <span class="icon-phone" @click="Contactus"></span>
       
        </li>

        <li >
            <span class="icon-chevron_up" @click="chevronup">

            </span>
        </li>
    </ul>
</div>

</template>

<script>
export default {
    name: 'TopupVue',
    props: {
        msg: String
    },
    methods: {
        chevronup() {
            document.documentElement.scrollTop = 0;

        },

        Contactus(){
                this.$router.push({
                    path:'/Contact',
                });
            },
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:1201px) {
    
    .top {
        .contactuse {
            position: fixed;
            bottom: 5vw;
            right: 5vw;
            z-index: 4000;
            cursor: pointer;
            display: flex;
            flex-direction: column;

            li {
                padding: 0 0 1.2vw;
                list-style-type: none;


                span {
                    font-size: 2vw;
                    color: #fff;
                    padding: .5vw;
                    background-color: #15369250;
                }
            }

            li:hover{
              
                span{
                    background-color: #153692; 
                    transition: background-color .5s linear 0s;
                }
            }
        }
    }
}

@media screen and (max-width:1201px) {
    .top {
        .contactuse {
            position: fixed;
            bottom: 15vw;
            right: 5vw;
            z-index: 4000;
            cursor: pointer;
            display: flex;
            flex-direction: column;

            li {
                padding: 0 0 7.5vw;
                list-style-type: none;

                a {
                    font-size: 24px;
                    color: #fff;
                    padding: 2.5vw;
                    background-color: #15369250;
                }

                span {
                    font-size: 24px;
                    color: #fff;
                    padding: 2.5vw;
                    background-color: #15369250;
                }
            }
        }
    }
}
</style>
