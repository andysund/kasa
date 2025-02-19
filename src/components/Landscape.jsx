import '../styles/Landscape.css';
import PropTypes from 'prop-types';

function Landscape({ imageUrl, title }) {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="landscape-banner" style={style}>
      <div className="landscape-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
Landscape.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Landscape;

