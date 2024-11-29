import { defineComponent, h } from "vue";
import "./component/hello-world.js";

export const HelloWorld = defineComponent({
  props: {
    name: String,
  },
  setup(props) {
    return () => h('hello-world', { name: props.name })
  }
});
