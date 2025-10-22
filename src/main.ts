import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';
import * as constants from './constants';
import hljsVuePlugin from '@highlightjs/vue-plugin';

import 'highlight.js/styles/atom-one-dark.css';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

import Home from './views/Home.vue';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin);

app.config.globalProperties.$constants = constants;

app.mount('#app');
