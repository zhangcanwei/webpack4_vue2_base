// 创建vue根实例
import Vue from "vue";

// 导入App组件
import App from "./App.vue";

// 创建vue根实例
new Vue({
  el: "#app",
  components: {
    App,
  },
  template: "<App/>",
});

// 挂载App组件
const arr = [1, 2, 3].map((e) => e * 2);
console.log(arr);
