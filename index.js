document.addEventListener('DOMContentLoaded', () => {
    // Récupérer les éléments du DOM
    const tacheInput = document.getElementById('tache-input');
    const ajouterTacheBtn = document.getElementById('ajouter-tache-btn');
    const tacheListe = document.getElementById('tache-liste');

    // Ajouter une nouvelle tâche
    ajouterTacheBtn.addEventListener('click', () => {
        const tacheTexte = tacheInput.value.trim();
        if (tacheTexte !== '') {
            ajouterTache(tacheTexte);
            tacheInput.value = '';
        }
    });

    // Ajouter une nouvelle tâche lorsque la touche Entrée est pressée
    tacheInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const tacheTexte = tacheInput.value.trim();
            if (tacheTexte !== '') {
                ajouterTache(tacheTexte);
                tacheInput.value = '';
            }
        }
    });

    // Fonction pour ajouter une nouvelle tâche à la liste
    function ajouterTache(tacheTexte) {
        // Créer un nouvel élément de liste
        const elementListe = document.createElement('li');
        elementListe.className = 'list-group-item';
        elementListe.innerHTML = `
            <span>${tacheTexte}</span>
            <div>
                <button class="btn btn-success btn-sm complete-btn">Terminer</button>
                <button class="btn btn-danger btn-sm delete-btn">Supprimer</button>
            </div>
        `;
        tacheListe.appendChild(elementListe);

        // Marquer la tâche comme terminée
        elementListe.querySelector('.complete-btn').addEventListener('click', () => {
            elementListe.querySelector('span').classList.toggle('text-decoration-line-through');
        });

        // Supprimer la tâche
        elementListe.querySelector('.delete-btn').addEventListener('click', () => {
            tacheListe.removeChild(elementListe);
        });
    }
});
