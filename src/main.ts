import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ECharts from "vue-echarts";
import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

import "@/assets/tailwindcss.css";

const app = createApp(App).use(store).use(router);

app.component("v-chart", ECharts);
app.mount("#app");
