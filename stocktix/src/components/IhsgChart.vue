<script>
import { Line } from 'vue-chartjs'

export default {
  props: ["ihsg"],
  extends: Line,
  data() {
    return {
      ihsgData: this.ihsg,
      gradient: null,
    };
  },
  async mounted () { 
    const data = await this.ihsgData
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    
    if(data.color === 'green') {
      this.gradient.addColorStop(0, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(0, 128, 0, 0.3)");
    } else if(data.color === 'red') {
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
        labels: data.timestamp,
        datasets: [
          {
            label: data.symbol,
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: data.close
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
