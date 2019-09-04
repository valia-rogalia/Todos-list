'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    'deals_list': [
      {
        "checked": false,
        "text": "assad",
      },
      {
        "checked": true,
        "text": "1",
      },
      {
        "checked": true,
        "text": "2",
      },
      {
        "checked": true,
        "text": "3",
      }
    ],
    "updated_element_index": "",
    "input_deal": "",
  },
  mutations: {
    updateInputDeal(state,new_deal) {
      state.input_deal = new_deal;
    },

    changeDealState(state,deal_info) {
      state.deals_list[deal_info.index].checked = deal_info.value;
    },

    addDeal(state,new_deal) {
      state.deals_list.push(new_deal);
    },

    removeDeal(state,index) {
      state.deals_list.splice(index,1);
    },

    addDealOnEdit(state,editable_deal) {
      state.updated_element_index = editable_deal.index;
      state.input_deal = editable_deal.text;
    },

    updateDeal(state,deal) {
      state.deals_list[deal.index].text = deal.text;
      state.updated_element_index = "";
    },

    updateFullDealsList(state,deals_list) {
        state.deals_list = deals_list;
    },
  },
  actions: {
    clearAllCompleted(context) {
      let new_deals_list = context.state.deals_list.map(function(elem){
        elem.checked == true ? elem.checked = false : '';
        return elem;
      });

      context.commit("updateFullDealsList",new_deals_list);
    },

    completeAll(context) {
      let new_deals_list = context.state.deals_list.map(function(elem){
        elem.checked == true ? '' : elem.checked = true;
        return elem;
      });

      context.commit("updateFullDealsList",new_deals_list);
    }
  }
});

export default store;
