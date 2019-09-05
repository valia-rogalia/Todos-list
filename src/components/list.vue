<template>

  <div class="deals-list">

    <ul class="list">
      <li class="list__item"
          v-for="(item,index) in this.$store.state.deals_list"
          v-show="active_filter == 'All' || (active_filter == 'Completed' && item.checked == true) || (active_filter == 'Uncompleted' && item.checked == false)"
          v-bind:key="index">
        <input type="checkbox"
               class="list__checkbox"
               :name="index"
               :checked="item.checked"
               @click="changeDealState">
        <span class="list__span">{{item.text}}</span>
        <button class="list__edit-button"
                :index="index"
                @click="addDealOnEdit"></button>
        <button class="list__delete-button"
                :index="index"
                @click="deleteDeal"></button>
      </li>
    </ul>

    <ul class="filter-tabs">
      <li class="filter-tabs__item"
          v-for="(filter,index) in filters_array"
          v-bind:key="index"
          :class="active_filter == filter ? 'filter-tabs__item_active' : ''"
          @click="active_filter = filter">{{filter}}</li>
    </ul>
  </div>

</template>

<script>

export default {

  data: function() {
    return {
      "active_filter": "All",
      "filters_array": ["All","Completed","Uncompleted"],
      "state": this.$store.state
    }
  },

  methods: {
    changeDealState: function(e) {
      let deal_info = {
        "index": e.target.getAttribute("name"),
        "value": !this.$store.state.deals_list[e.target.getAttribute("name")].checked
      }

      this.$store.commit("changeDealState",deal_info);
    },

    addDealOnEdit: function(e) {
      let editable_deal = {
        "index": e.target.getAttribute("index"),
        "text": this.$store.state.deals_list[parseInt(e.target.getAttribute("index"))].text
      }

      this.$store.commit("addDealOnEdit",editable_deal);
    },

    deleteDeal: function(e) {
      this.$store.commit("removeDeal",e.target.getAttribute("index"));
    }
  },

}
</script>
