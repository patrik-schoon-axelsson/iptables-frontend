<template>
<div class="container">
  <div class="row">
  <h4 class="center-align">Iptables Dashboard v2.0</h4>
  <br>
  </div>
  <div class="row">
    <div class="col s12">
      <ul class="tabs grey darken-1">
        <li v-for="item in fetchCache" :key="item.chain" class="tab col s3">
          <router-link class="white-text" :to="{ name: 'chart', params: { chainID: item.chain }}">{{item.chain}}</router-link>
      </li>
      </ul>
    </div>
  <router-view key="$route.param.chainID"></router-view>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['fetchCache'])
  }  
}
</script>
