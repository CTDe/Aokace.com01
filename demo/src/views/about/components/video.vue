<template>
    <!-- Video组件 -->
    <div id="video">
        <iframe src="https://www.youtube.com/embed/5qaC5dv8RjU" frameborder=0 allowfullscreen>
        </iframe>
    </div>
</template>

<script>
    export default {
        name: "VideoVue",

        props: {

            type: String,

        },

    };
</script>

<style lang="scss">
    @media screen and (min-width:1201px) {
        #video {
            margin: 2.5vw 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ccc;
            border-radius: 18px;
            overflow: hidden;

            iframe {
                width: 80vw;
                height: 45vw;
            }
        }

        
    }

    @media screen and (max-width:1201px) {
        #video {
            margin: 5vw 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-color: #ccc;
            border-radius: 18px;

            iframe {
                width: 80vw;
                height: 45vw;
            }
        }
    }
</style>
