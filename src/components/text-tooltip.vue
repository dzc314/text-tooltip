<template>
  <el-tooltip
    :content="content"
    :placement="placement"
    :disabled="disabled"
    :popperClass="popperClass"
  >
    <span :style="textStyle" ref="content" class="text-content">
      {{ content }}
    </span>
  </el-tooltip>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Tooltip } from "element-ui";
Vue.use(Tooltip);
import "./text-tooltip.scss";
@Component({
  name: "TextTooltip",
  props: {
    content: {
      type: String,
      default: "",
    },
    line: {
      type: Number,
      default: 1,
    },
    placement: {
      type: String,
      default: "top",
    },
    popperClass: {
      type: String,
      default: "",
    },
  },
})
export default class TextTooltip extends Vue {
  disabled = true;
  line!: number;
  get textStyle(): any {
    if (this.line > 1) {
      return {
        display: "-webkit-box",
        webkitBoxOrient: "vertical",
        webkitLineClamp: this.line,
      };
    } else {
      return {
        whiteSpace: "nowrap",
      };
    }
  }
  @Watch("content")
  contentWatcher(): void {
    this.$nextTick(this.checkDisabled);
  }
  mounted(): void {
    this.checkDisabled();
  }
  checkDisabled(): void {
    const contentEle: any = this.$refs.content;
    const { offsetWidth, scrollWidth, offsetHeight, scrollHeight } = contentEle;
    this.disabled = !(offsetWidth < scrollWidth || offsetHeight < scrollHeight);
  }
}
</script>

<style>
.text-content {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  word-break: break-all;
}
</style>
