// Funzione per gestire la registrazione
        document.getElementById("registerForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita il comportamento di submit di default

            // Ottieni i valori dal modulo
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Crea un oggetto utente
            const user = {
                name: name,
                email: email,
                password: password
            };

            // Salva l'utente nel localStorage
            localStorage.setItem("user", JSON.stringify(user));

            // Mostra un alert di successo
			alert("Registrazione avvenuta con successo per "+ name + "!\n Torna alla Home e effettua il login");
        });

        // Funzione per caricare i dati dell'utente se già registrato
        window.onload = function() {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const user = JSON.parse(storedUser);
            }
        };