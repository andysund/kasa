
import '../styles/Dropdown.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Dropdown({ title, items }) {
  // isOpen gère l'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour toggler l'état
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Entête du dropdown */}
      <div className="dropdown-header" onClick={handleToggle}>
        <h3>{title}</h3>
        {/* La flèche : on change de classe en fonction de isOpen pour la rotation */}
        <span className={`chevron ${isOpen ? 'chevron-up' : ''}`}>
          {/* Icône en HTML (petite flèche bas) */}
          &#9660;
        </span>
      </div>

      {/* Contenu qui s'affiche seulement si isOpen === true */}
      {isOpen && (
        <div className="dropdown-body">
          {/* Si items est un tableau, on l'affiche élément par élément */}
          {Array.isArray(items) ? (
            items.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            // Sinon, on l'affiche directement (cas d'une simple chaîne)
            <p>{items}</p>
          )}
        </div>
      )}
    </div>
  );
}
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};

export default Dropdown;

