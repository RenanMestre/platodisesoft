// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Estado geral das máquinas (pizza)
const statusCtx = document.getElementById('statusChart').getContext('2d');
new Chart(statusCtx, {
  type: 'doughnut',
  data: {
    labels: ['Operando', 'Alerta', 'Falha'],
    datasets: [{
      data: [25, 5, 2],
      backgroundColor: ['#5caf50', '#ffc107', '#f44336']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});
