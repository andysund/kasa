import { Link } from 'react-router-dom';
import Card from './Card';
import logements from '../assets/logements.json';

const Gallery = () => {
  console.log('Logements:', logements);
  return (
    <>
    <div className="house-cards">
      {logements.map(({ id, title, cover, location }) => (
        id ? (
          <Link to={`/logement/${id}`} key={id}>
            <Card 
              id={id}
              title={title}
              cover={cover}
              location={location}
            />
          </Link>
        ) : (
          <p key={Math.random()}>Données manquantes</p>
        )
      ))}
    </div>
    </>
  );
};

export default Gallery;
