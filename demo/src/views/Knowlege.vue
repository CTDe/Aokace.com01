<template>
    <div class="knowlege">
        <DowlistVue />
    </div>
</template>
<script>
    import DowlistVue from './Knowlege/Dowlist.vue'
    export default {
        name: 'KnowlegeVue',
        props: {
            msg: String
        },
        components: {
            DowlistVue,
        }
    }
</script>

<style lang="scss" scoped >
    @media screen and (max-width:1201px) {
        .knowlege {
            padding: 96px 0;
            background: none;
        }
    }

    @media screen and (min-width:1201px) {
        .knowlege {
            padding: 0;
        }
    }
</style>
