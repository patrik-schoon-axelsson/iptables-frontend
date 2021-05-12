<template>
  <div class="home">
    <div class="row">
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
