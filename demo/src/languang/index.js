// 2. Create i18n instance with options
import {createI18n} from 'vue-i18n'
const i18n = createI18n({
    locale:'en',
    messages:{
      zh: require("./zh"),
      en: require("./en"),
      es: require("./es"),
      ru: require("./ru"),
  
    }
   
  
    // If you need to specify other options, you can set other options
    // ...
  })

 export default i18n;