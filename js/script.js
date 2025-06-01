// js/script.js

const projets = [
  {
    titre: "Site de voyage",
    description: "Un site responsive pour une agence de voyages",
    lien: "#",
  },
  {
    titre: "App météo",
    description: "Application JS qui affiche la météo d'une ville",
    lien: "#",
  },
];

const container = document.getElementById("project-list");

projets.forEach((projet) => {
  container.innerHTML += `
    <div class="col-md-6 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${projet.titre}</h5>
          <p class="card-text">${projet.description}</p>
          <a href="${projet.lien}" class="btn btn-outline-primary" target="_blank">Voir le projet</a>
        </div>
      </div>
    </div>
  `;
});
