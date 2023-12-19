// Enfant.js
import React from 'react';

const Enfant = ({ formSubmitted }) => {
  // Déterminez la couleur en fonction de la soumission du formulaire
  const couleur = formSubmitted ? 'green' : 'red';

  return (
    <div style={{ width: '100px', height: '100px', backgroundColor: couleur }}>
      {/* Contenu du composant enfant */}
    </div>
  );
};

export default Enfant;
