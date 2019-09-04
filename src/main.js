import Vue from 'vue'
import index from './components/index.vue'

import store from './store.js';

Vue.config.productionTip = false

new Vue({
  el: '#index',
  store,
  components: {
      "index": index
  },
});
