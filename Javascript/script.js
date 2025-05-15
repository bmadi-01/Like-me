let listeSeries = document.getElementById("les_series");
function afficheLesSeries() {
    const series = ["Breaking bad", "Game of Trones", "The Walking Dead",
                            "The Big Bang Theory", "The Office", "The Simpsons",
                            "The Flash", "The Martian", "The X-Files", ]
    series.forEach(serie =>{
        //Creation de la boite de film
        const boxSeries = document.createElement("div");
        boxSeries.id = `box-${series}`;
        boxSeries.style.border = "1ps solid black";
        boxSeries.style.textAlign = "center";
        boxSeries.style.margin = "auto";
        //Image
        const img = document.createElement("img");
        img.src = `Images/${serie}.jpg`;
        img.alt = `${serie}`;
        img.style.width = "180px";
        img.style.height = "250px";
        // met le titre du film
        const titre = document.createElement("h5)");
        titre.innerTexte = `${serie}`;
        //description
        const description = document.createElement("p");
        description.innerTexte = "le film est disponible sur tout le plateforme de streaming?";
        //ajout des éléments dans la boite
        boxSeries.appendChild(img);
        boxSeries.appendChild(titre);
        boxSeries.appendChild(description);
        //ajout de la boite dans la liste
        listeSeries.appendChild(boxSeries);
    });
}