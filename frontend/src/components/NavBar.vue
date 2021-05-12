<template>
<section>
    <ul id="dropdown1" class="dropdown-content">        
    <li v-for="item in fetchCache" :key="item.chain">
        <router-link :to="{ name: 'chart', params: { chainID: item.chain }}">Chart for {{item.chain}}</router-link>
    </li>
  </ul>
  <nav class="grey darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center">IPTables Dashboard v2.0</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

        <li><router-link to="/about">About</router-link></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Chains<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>
</section>
</template>

<script>
import M from 'materialize-css';
import { mapState } from 'vuex';

export default { 
  computed: {
    ...mapState(['fetchCache'])
  },
  mounted() {
      M.AutoInit();
  }
}
</script>

<style lang="scss">
li {
  font-size: 0.75rem;
}
</style>