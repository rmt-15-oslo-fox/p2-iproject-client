<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      ihsgData: this.ihsg,
      gradient: null,
    };
  },
  async mounted () {
    await this.$store.dispatch('fetchCompositeIndex', this.$store.state.region)
    const chartData = await this.$store.state.composites.data
    
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    
    if(chartData.color === 'green') {
      this.gradient.addColorStop(0, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(0, 128, 0, 0.3)");
    } else if(chartData.color === 'red') {
      this.gradient.addColorStop(0, "rgba(255, 0, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0.3)");
    } else {
      this.gradient.addColorStop(0, "rgba(255, 255, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(255, 255, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(255, 255, 0, 0.3)");
    }
    
    await this.renderChart(
      {
        labels: chartData.timestamp,
        datasets: [
          {
            label: chartData.symbol,
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: chartData.close
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
