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

        // Ajouter les éléments dans la boîte
        boxSeries.appendChild(img);
        boxSeries.appendChild(titre);
        boxSeries.appendChild(description);

        // Ajouter la boîte à la liste
        listeSeries.appendChild(boxSeries);
    });
}

// Lancer automatiquement après le chargement de la page
window.onload = () => {
    afficheLesSeries();
};
