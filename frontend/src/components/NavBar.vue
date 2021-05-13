<template>
<section>
  <nav class="grey darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center">IPTables Dashboard v2.0</router-link>
      <ul id="nav-mobile" class="right">
        <li><router-link to="/about">About</router-link></li>
      <!-- Dropdown Trigger -->
      <li><router-link :to="{ name: 'chart_default' }">Charts</router-link></li>
      <li><router-link :to="{name: 'table_default'}">Tables</router-link></li>
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
}
</script>

<style lang="scss">
li {
  font-size: 0.75rem;
}
</style>