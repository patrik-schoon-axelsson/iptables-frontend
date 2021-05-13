<template>
  <div>
      <h3 class="center-align"> {{chain[0].chain}} chain</h3>
    <hr>
    <table class="highlight striped responsive-table">
      <thead> 
        <tr>
          <th v-for="(key, val) in chain[0].rules[0]" :key="val">
            {{ val }}
          </th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in chain[0].rules" :key="item.chain">
          <td v-for="(val, key) in item" :key="key">
              {{ val }}           
          </td>
        </tr>
      </tbody>
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