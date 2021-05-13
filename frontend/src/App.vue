<template>
<section v-if="isLoading">
  <h1> FETCHING API DATA, PLEASE HOLD...</h1>
</section>
<section v-else>
  <nav-bar></nav-bar>
  <router-view/>
</section>
</template>

<script>
import M from 'materialize-css';
import { mapState } from 'vuex';
import store from './store/'

export default{
  data() {
    return {
      isLoading: false,
      fetchData: [],
      datasets: [],
      error: null
    }
  },
  mounted() {
    this.isLoading = true;

    this.axios.get("/api/all")
    .then((data) => {
      this.fetchData = data.data;
      this.$store.commit('fetchCache/setFetchCache', data.data)
    })
    .finally(() => {
      this.isLoading = false;
      M.AutoInit();
    })
    .catch((error) => {
      console.log(error)
      this.isLoading = false;
      this.error = error
    })
  },
  methods: {

  },
  computed: {
    ...mapState(['fetchCache'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital@0;1&display=swap');

body {
  font-size: 66.5%;
  font-family: 'Source Code Pro', monospace;
};
</style>
