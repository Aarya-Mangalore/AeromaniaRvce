<script>
  export let targetDate;  // Make sure targetDate is being passed as a prop
  let countdown = "";

  function updateCountdown() {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const distance = target - now;

    if (distance <= 0) {
      countdown = "Event has started!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
</script>

<div>
  <p>Countdown to Event:</p>
  <h2>{countdown}</h2>
</div>

<style>
  h2 {
    font-size: 2rem;
    color: #00ffff;
  }
</style>
