<template>

  <div class="all-wrapper">

    <div class="left-block">
      <stats></stats>
    </div>

    <div class="center-block">
      <h1 class="title">Todo list</h1>

      <div class="input-block">
        <div class="input-block__wrapper">
          <input type="text"
                 name="deal"
                 class="input-block__input"
                 required
                 v-model="inputDeal">
          <label for="deal"
                 class="input-block__label">Input your deal</label>
        </div>
        <button class="input-block__add-button"
                @click="addDeal">add to list</button>
      </div>

      <list></list>
    </div>

    <div class="right-block">
      <progress-bar></progress-bar>
    </div>

  </div>

</template>

<script>

import store from '../store.js';

import stats from './stats.vue';
import list from './list.vue';
import progress from './progress.vue';

export default {

  name: 'index',
  store,

  components: {
    'stats': stats,
    'list': list,
    'progress-bar': progress
  },

  data: function() {
    return this.$store.state;
  },

  computed: {
    inputDeal: {
      get () {
        return this.$store.state.input_deal;
      },
      set (value) {
        this.$store.commit("updateInputDeal",value);
      }
    }
  },

  methods: {
    addDeal: function() {
      if (this.inputDeal != '')
      {
        if (this.$store.state.updated_element_index == "") {
          let new_deal = {
            "checked": false,
            "text": this.inputDeal
          }

          this.$store.commit("addDeal",new_deal);
        } else {
          let deal = {
            "index": parseInt(this.$store.state.updated_element_index),
            "text": this.inputDeal
          }

          this.$store.commit("updateDeal",deal);
        }

        this.$store.commit("updateInputDeal","");
      }
    }
  },

}
</script>
