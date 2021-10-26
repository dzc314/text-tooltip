import Vue from "vue";
import TextTooltip from "./text-tooltip.vue";

const Components = {
  TextTooltip
};

Object.keys(Components).forEach(name => {
  console.log(name);
  Vue.component(name, Components[name]);
});

export default Components