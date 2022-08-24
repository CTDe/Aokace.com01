<template>
    <div class="products">
        <div class="content">
            <ProductlistVue msg="" />
        </div>


    </div>
</template>

<script>

    import ProductlistVue from './product/Productlist.vue'

    export default {
        name: 'ProductsVue',
        props: {
            msg: String
        },
        components: {

            ProductlistVue
        },

    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width:1201px) {
        .products {
            padding: 3vw 0 0;
        }
    }

    @media screen and (max-width:1201px) {
        .products {
            padding: 96px 0 0;

            .bottoms {
                padding: 2.5vw 0 0;
            }
        }
    }
</style>
