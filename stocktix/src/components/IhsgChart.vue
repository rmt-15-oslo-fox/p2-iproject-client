<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    
    if(this.$store.state.ihsg.color === 'green') {
      this.gradient.addColorStop(0, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(0, 128, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(0, 128, 0, 0.3)");
    } else if(this.$store.state.ihsg.color === 'red') {
      this.gradient.addColorStop(0, "rgba(255, 0, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(255, 0, 0, 0.3)");
    } else {
      this.gradient.addColorStop(0, "rgba(255, 255, 0, 0.3)");
      this.gradient.addColorStop(0.5, "rgba(255, 255, 0, 0.3)");
      this.gradient.addColorStop(1, "rgba(255, 255, 0, 0.3)");
    }
    
    this.renderChart(
      {
        labels: this.$store.state.ihsg.timestamp,
        datasets: [
          {
            label: this.$store.state.ihsg.symbol,
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: this.$store.state.ihsg.close
          },
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
