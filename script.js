document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("https://script.google.com/macros/s/AKfycbx-XAulWzrChBTs8DOJK_nmHtG4aYWAL_GsWS6rCduKrBHs_RVwefBTHIor62jrDm_z/exec", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        // Mostra il messaggio di conferma
        const confirmationMessage = document.createElement("p");
        confirmationMessage.innerText = `Grazie ${name}! Abbiamo registrato la tua partecipazione. Ti aspettiamo al nostro matrimonio!`;
        confirmationMessage.style.color = "#875e5e";

        const form = document.getElementById("rsvpForm");
        form.parentNode.appendChild(confirmationMessage);

        // Nascondi il form per evitare invii multipli
        form.style.display = "none";
    })
    .catch(err => {
        alert("Errore durante l'invio. Contatta Elessimo.");
        console.error(err);
    });
});
