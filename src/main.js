import { createApp } from 'vue';
import STable from './plugins/stable';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.use(STable);
app.mount('#app');
