<template>
  <div id="app">
    <div style="width: 100px;">
      <TextTooltip
        content="Welcome to Your Vue.js + TypeScript App"
        placement="bottom"
      />
      <TextTooltip
        content="Welcome to Your Vue.js + TypeScript App"
        :line="2"
      />
    </div>
    <TextTooltip style="width: 200px;" content="Welcome ！" />
    <TextTooltip
      style="width: 200px;"
      content="Welcome to Your Vue.js + TypeScript App"
    />
    <TextTooltip
      style="width: 100px;"
      content="Welcome to TextTooltip! "
      :line="2"
    />
    <TextTooltip
      class="content"
      :content="content"
      :line="3"
      popperClass="popper-class"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextTooltip from "@/components/text-tooltip.vue";

@Component({
  components: {
    TextTooltip,
  },
})
export default class App extends Vue {
  content = "";
  mounted() {
    setTimeout(() => {
      this.content = `Welcome`;
    }, 2000);
    setTimeout(() => {
      this.content = `Welcome to TextTooltip! Welcome to TextTooltip! Welcome to TextTooltip! `;
    }, 4000);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  width: 150px;
  background-color: yellow;
}
.popper-class {
  width: 200px;
}
</style>
