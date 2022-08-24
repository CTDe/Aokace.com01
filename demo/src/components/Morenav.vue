<template>
<navs>
    <button @click.stop="ShowHidden = !ShowHidden">
        <span class="icon-more"></span>
    </button>

</navs>

<div class="tabnav" v-if="ShowHidden" @click.stop="ShowHidden = !ShowHidden">
    <navtab>
        <router-link to="/" @click.stop="ShowHidden = !ShowHidden">Home</router-link>
        <router-link to="/Products" @click.stop="ShowHidden = !ShowHidden">Products</router-link>
        <router-link to="/Knowlege" @click.stop="ShowHidden = !ShowHidden">Knowlege</router-link>
        <router-link to="/About" @click.stop="ShowHidden = !ShowHidden">About</router-link>

    </navtab>
</div>
</template>

<script>
export default {
    name: 'MorenavVue',
    props: {
        msg: String
    },
    ethods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width:961px) {
    span {
        font-size: 1.2vw;
        color: #333;
        padding: 1.5vw 0;

    }
}

@media screen and (max-width:961px) {
    span {
        font-size: 18px;
        color: #333;
        padding: 1.5vw 0;

    }
}
</style>
