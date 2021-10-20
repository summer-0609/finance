<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>

<script>
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";

import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/dist/locale/zh-cn";

moment.locale("zh-cn");

export default defineComponent({
  components: {
    ConfigProvider,
  },
  setup() {
    return {
      locale: zhCN,
    };
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
}
</style>
