<template>

  <div class="progress">
    <h2 class="progress__header">Stats</h2>

    <div class="progress__bar">
      <div class="progress__inner-bar"
           v-show="percentCompleteDeals != 0"
           :style="'width:' + percentCompleteDeals + '%'">
        {{percentCompleteDeals}} %
      </div>
    </div>

    <button class="progress__button"
            @click="completeAll">Complete All</button>
  </div>

</template>

<script>


export default {

  data: function() {
    return this.$store.state;
  },

  computed: {
    percentCompleteDeals: function() {
      let completed_percent = 0,
          completed_count = 0;

      this.$store.state.deals_list.forEach(function(elem){
        if (elem.checked == true)
          completed_count++;
      });

      completed_percent = completed_count / this.$store.state.deals_list.length * 100
      return Math.round(completed_percent);
    }
  },

  methods: {
    completeAll: function() {
      this.$store.dispatch("completeAll");
    }
  },

}
</script>
