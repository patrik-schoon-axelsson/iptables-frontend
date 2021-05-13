<template>
<div class="container">
  <div class="row">
  <h3 class="center-align">Table View</h3>
    <br>
  <div class="row">
    <ul class="tabs grey darken-1">
      <li v-for="item in fetchCache" :key="item.chain" class="tab col s3">
          <router-link class="white-text" :to="{ name: 'table', params: { chainID: item.chain }}">{{item.chain}}</router-link>
      </li>
    </ul>
    <p class="flow-text">
      Here you can get a more detailed, HTML-table based view of each chain. Select a chain in the navigation below.
    </p>
  </div>
  <br>
  </div>
  <div class="row">
      <router-view key="$route.param.chainID"></router-view>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Table Default',
  computed: {
    ...mapState(['fetchCache'])
  }
}
</script>

<style>

</style>