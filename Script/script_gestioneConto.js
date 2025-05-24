let saldo = 0;

    // Carica il saldo dal localStorage al caricamento della pagina
    window.onload = function () {
      const saldoSalvato = localStorage.getItem("saldoFMB");
      if (saldoSalvato !== null) {
        saldo = parseFloat(saldoSalvato);
      }
      aggiornaSaldo();
    };

    function aggiornaSaldo() {
      document.getElementById('saldoDisplay').innerText = `Saldo: €${saldo.toFixed(2)}`;
      localStorage.setItem("saldoFMB", saldo.toFixed(2));
    }

    function deposita() {
      const importo = parseFloat(document.getElementById('importo').value);
      if (!isNaN(importo) && importo > 0) {
        saldo += importo;
        aggiornaSaldo();
      } else {
        alert("Inserisci un importo valido per il deposito.");
      }
      document.getElementById('importo').value = '';
    }

    function preleva() {
      const importo = parseFloat(document.getElementById('importo').value);
      if (!isNaN(importo) && importo > 0) {
        if (importo <= saldo) {
          saldo -= importo;
          aggiornaSaldo();
        } else {
          alert("Fondi insufficienti.");
        }
      } else {
        alert("Inserisci un importo valido per il prelievo.");
      }
      document.getElementById('importo').value = '';
    }