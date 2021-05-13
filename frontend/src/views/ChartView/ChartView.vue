<template>
  <div>
      <h3 class="center-align"> {{chain[0].chain}} chain</h3>
      <br>
      <canvas id="chainChart"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Chart from 'chart.js/auto';

export default {
    name: "ChartView",
    data() {
        return {
            id: this.$route.params.chainID,
            chart: null,
        }
    },
    computed: {
    ...mapState(['fetchCache']),
    chain() {
      return this.fetchCache.filter(item => item.chain == this.id)
    },
    chartData() {
      return {
          labels: this.chain[0].rules.map((item) => { return `Rule #${item.num}` }),
          datasets: [
            {
              label: `Chain: ${this.chain[0].chain} - Bytes`,
              data: this.chain[0].rules.map(item => item.bytes),
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            },
            {
              label: `Chain: ${this.chain[0].chain} - Packets`,
              data: this.chain[0].rules.map(item => item.pkts),
              backgroundColor: 'rgba(0, 0, 0, 0.3)'              
            }
          ]
        }
    }
  },
  mounted() {
      this.chartSetup();
  }, 
  methods: {
    chartSetup() {
      let chainChart = new Chart(document.getElementById('chainChart'),
        {
        type: 'line',
        data: this.chartData
      })

      this.chart = chainChart;

      this.chart.render()
    },
    routeID() {
      return this.$route.params.chainID
    }
  },
  beforeRouteUpdate(to, from){

    this.id = to.params.chainID;
    
    this.chart.destroy();
    this.chartSetup();
  }
}
</script>

<style>

</style>