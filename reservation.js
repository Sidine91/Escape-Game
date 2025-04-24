
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les paramètres de l'URL
    const params = new URLSearchParams(window.location.search);
    const heure = params.get("heure");

    let salleDisponible = "";
    
    // Liste des salles disponibles pour un choix aléatoire
    const salles = ["Salle B100", "Salle A300", "Salle C200", "Salle D400"];

    // Liste des messages personnalisés
    const messagesPersonnalises = [
        "🕵️‍♂️ Prépare-toi à une aventure pleine de mystères !",
        "⏳ Le chrono tourne, sois rapide et malin !",
        "🔐 Seuls les plus rusés sortent à temps... Seras-tu l’un d’eux ?",
        "🚀 Défi accepté ! Montre-nous tes talents d’enquêteur !"
    ];

    if (heure) {
        // Vérifier les horaires
        if (heure >= "13:00" && heure <= "18:00") {
            salleDisponible = "Salle B100";
        } else if (heure >= "18:30" && heure <= "23:30") {
            salleDisponible = "Salle A300";
        } else {
            Swal.fire({
                icon: "error",
                title: "❌ Aucune salle n'est ouverte à cette heure",
                text: "Veuillez choisir une autre heure pour votre réservation.",
                confirmButtonText: "OK"
            });
            return;
        }

        // Générer un identifiant unique
        const reservationId = "RES-" + Math.floor(10000 + Math.random() * 90000);

        // Choisir une salle et un message personnalisé
        const salleAleatoire = salles[Math.floor(Math.random() * salles.length)];
        const messagePersonnalise = messagesPersonnalises[Math.floor(Math.random() * messagesPersonnalises.length)];

        // Afficher une alerte stylée avec SweetAlert2
        Swal.fire({
            icon: "success",
            title: "✅ Réservation Confirmée !",
            html: `
                <p><strong>Salle réservée :</strong> ${salleDisponible}</p>
                <p><strong>Heure :</strong> ${heure}</p>
                <p><strong>ID de réservation :</strong> ${reservationId}</p>
                <p style="font-style: italic;">💡 ${messagePersonnalise}</p>
            `,
            confirmButtonText: "Super ! 🎉"
        });
    }
});

