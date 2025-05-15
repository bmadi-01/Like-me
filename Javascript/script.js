let listeSeries = document.getElementById("les_series");

function afficheLesSeries() {
    const series = [
        "Breaking bad", "Game of Trones", "The Walking Dead",
        "The Big Bang Theory", "The Office", "The Simpsons",
        "The Flash", "The Martian", "The X-Files"
    ];

    series.forEach(serie => {
        // Créer une boîte
        const boxSeries = document.createElement("div");
        boxSeries.id = `box-${serie.replace(/\s+/g, "_")}`;
        boxSeries.style.border = "1px solid black";
        boxSeries.style.textAlign = "center";
        boxSeries.style.margin = "10px auto";
        boxSeries.style.width = "200px";

        // Image
        const img = document.createElement("img");
        img.src = `Images/${serie}.jpg`;
        img.alt = serie;
        img.style.width = "180px";
        img.style.height = "250px";

        // Titre
        const titre = document.createElement("h5");
        titre.innerText = serie;

        // Description
        const description = document.createElement("p");
        description.innerText = "Le film est disponible sur toutes les plateformes de streaming.";

        // Bouton "J'aime"
        const likeButton = document.createElement("button");
        likeButton.innerHTML = "👍 J'aime";
        likeButton.style.cursor = "pointer";
        likeButton.style.backgroundColor = "#f0f0f0";
        likeButton.style.border = "1px solid #ccc";
        likeButton.style.borderRadius = "5px";
        likeButton.style.padding = "5px 10px";
        likeButton.style.marginTop = "10px";

// Comportement au clic : change de couleur
        let liked = false;
        likeButton.addEventListener("click", () => {
            liked = !liked;
            likeButton.style.backgroundColor = liked ? "#28a745" : "#f0f0f0"; // vert si cliqué
            likeButton.style.color = liked ? "white" : "black";
        });

        // Ajouter les éléments dans la boîte
        boxSeries.appendChild(img);
        boxSeries.appendChild(titre);
        boxSeries.appendChild(description);
        // Ajouter le bouton à la boîte
        boxSeries.appendChild(likeButton);

        // Ajouter la boîte à la liste
        listeSeries.appendChild(boxSeries);
    });
}

// Lancer automatiquement après le chargement de la page
window.onload = () => {
    afficheLesSeries();
};
