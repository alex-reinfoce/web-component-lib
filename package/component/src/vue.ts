import { defineComponent, h } from "vue";
import './component/button/index'

export const Button = defineComponent({
  setup() {
    return () => h("web-button");
  },
});
