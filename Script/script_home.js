    // Saluto dinamico
    const welcomeTitle = document.getElementById("welcomeTitle");
    const hour = new Date().getHours();

    if (hour < 12) {
      welcomeTitle.textContent = "Buongiorno da FMB-Fintech!";
    } else if (hour < 18) {
      welcomeTitle.textContent = "Buon pomeriggio da FMB-Fintech!";
    } else {
      welcomeTitle.textContent = "Buonasera da FMB-Fintech!";
    }

    // Modal login
    let loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");

    loginBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Simulazione login
    function login() {
      const user = document.getElementById("username").value;
      alert("Benvenuto, " + user + "! (Simulazione accesso)");
      modal.style.display = "none";//nasconde la modal e non la rende visibile
	  loginBtn.innerHTML=user;
	  const recLink = document.getElementById("mioLink");
	  recLink.remove();
	  const pianoElement = document.getElementById("piano");
	  pianoElement.innerHTML = "Piano Accumolo";
    }