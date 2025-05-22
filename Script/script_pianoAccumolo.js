    function calculateAccumulation() {
      // Prendere i valori dall'input
      const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
      const duration = parseInt(document.getElementById('duration').value);
      const interestRate = parseFloat(document.getElementById('interestRate').value);

      // Verifica se i valori sono validi
      if (isNaN(monthlyDeposit) || isNaN(duration) || isNaN(interestRate)) {
        alert('Per favore, inserisci valori validi per tutti i campi.');
        return;
      }

      // Calcolo dell'interesse mensile
      const monthlyInterestRate = (interestRate / 100) / 12;
      let totalAccumulated = 0;
      let totalInterest = 0;
      let monthlyAccumulated = [];
      let interestAccumulated = [];

      for (let i = 0; i < duration; i++) {
        totalAccumulated += monthlyDeposit;
        totalAccumulated += totalAccumulated * monthlyInterestRate;
        monthlyAccumulated.push(totalAccumulated);
        interestAccumulated.push(totalAccumulated - (monthlyDeposit * (i + 1)));
      }

      totalInterest = totalAccumulated - (monthlyDeposit * duration);

      // Mostra i risultati
      document.getElementById('resultMonthlyDeposit').textContent = monthlyDeposit.toFixed(2);
      document.getElementById('resultDuration').textContent = duration;
      document.getElementById('resultInterestRate').textContent = interestRate.toFixed(2);
      document.getElementById('resultTotalAccumulated').textContent = totalAccumulated.toFixed(2);
      document.getElementById('resultTotalInterest').textContent = totalInterest.toFixed(2);

      // Mostra il div dei risultati
      document.getElementById('resultContainer').style.display = 'block';
      document.getElementById('chartContainer').style.display = 'block';

      // Crea il grafico con Chart.js
      const ctx = document.getElementById('accumulationChart').getContext('2d');
      const accumulationChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: duration }, (_, i) => i + 1),
          datasets: [{
            label: 'Totale Accumulato (€)',
            data: monthlyAccumulated,
            borderColor: '#000000',  // Linea nera
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Sfondo traslucido nero
            fill: true,
            tension: 0.4
          },
          {
            label: 'Interessi (€)',
            data: interestAccumulated,
            borderColor: '#777777',  // Linea grigia
            backgroundColor: 'rgba(119, 119, 119, 0.2)', // Sfondo traslucido grigio
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Crescita dell\'Accumulato e degli Interessi'
            },
            legend: {
              position: 'top',
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }