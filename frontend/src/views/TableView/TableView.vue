<template>
  <div class="container">
      <h3 class="center-align"> {{chain[0].chain}} chain</h3>
    <hr>
    <table>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TableView',
    data(){
      return {
        id: this.$route.params.chainID
      }
    },
    computed: {
    ...mapState(['fetchCache']),
    chain() {
      return this.fetchCache.filter(item => item.chain == this.id)
    },
  },
  beforeRouteUpdate(to, from){
    this.id = to.params.chainID;
    
  }
}
</script>

<style>

</style>