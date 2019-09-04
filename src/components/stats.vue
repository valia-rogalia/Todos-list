<template>

  <div class="stats">
    <h2 class="stats__header">Stats</h2>

    <div class="stats__deals-count-block">
      <span class="stats__deals-text">Deals</span>
      <span class="stats__deals-text">{{allDealsCount}}</span>
    </div>
    <div class="stats__deals-count-block">
      <span class="stats__deals-text">Deals left</span>
      <span class="stats__deals-text">{{leftDealsCount}}</span>
    </div>

    <button class="stats__button"
            @click="clearCompleted">Clear Completed</button>
  </div>

</template>

<script>


export default {

  data: function() {
    return this.$store.state;
  },

  computed: {
    allDealsCount: function() {
      return this.$store.state.deals_list.length;
    },

    leftDealsCount: function() {
      return this.$store.state.deals_list.filter((item) =>{
               return item.checked == false;
             }).length;
    }
  },

  methods: {
    clearCompleted: function() {
      this.$store.dispatch("clearAllCompleted");
    }
  },

}
</script>
