export default {
    namespaced: true,
    state: {
        fetchCache: []
    },
    getters: {
      getFetchCache: state => {
        return this.$store.state.fetchData
      }
    },
    mutations: {
        setFetchCache(state, data) {
            // Cache initial state on app load.

            this.state.fetchCache = data
        }
    },
    actions: {
        refreshCache() {
            this.axios.get("/api/all")
            .then((data) => {
              this.store.commit(data.data)
            })
            .finally(() => {
              this.isLoading = false;
            })
            .catch((error) => {
              console.log(error)
              this.isLoading = false;
              this.error = error
              })
            }
    }
}