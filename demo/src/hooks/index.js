// 封装一个通用的方法实现数据的懒加载
import defaultImg from '../assets/image/loading.png'
 
export default {
  install (app) {
    // 在app上进行扩展 app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    defineDirective(app)
  }
}
 
const defineDirective = (app) => {
  // 1.图片懒加载指令 v-lazy
  // 原理：先存储图片地址不能在src上 当图片进入可视区 将你存储图片地址设置给图片元素
  app.directive('lazy', {
    // vue2.0 监听使用指令的DOM是否创建好 钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件一样 钩子函数：mounted
    mounted (el, binding) {
      // 2.创建一个观察对象 来观察当前使用指令的元素
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          // 4.处理图片加载失败
          el.onerror = () => {
            // 加载失败 设置默认图
            el.src = defaultImg
          }
          // 3.把指令的值设置给el的src属性 binding.value就是指令的值
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      // 开启观察
      observe.observe(el)
    }
  })
}
