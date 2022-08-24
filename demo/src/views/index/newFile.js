import { useI18n } from "vue-i18n";

export default (await import('vue')).defineComponent({
    name: 'CusVue',
    props: {
        msg: String
    },


    setup() {
        const { t } = useI18n();
        return {
            t,
        };
    }
});
