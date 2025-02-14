import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ id, title, cover, location }) => {
    console.log('Props reçues:', { id, title, cover, location })
  if (!id || !title || !cover) {
    console.error("Erreur: Une prop est manquante", { id, title, cover });
    return <p>Erreur : Données manquantes</p>;
  }

  return (
    <>
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <div className="rental-location">
          <p>{title}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Card;
