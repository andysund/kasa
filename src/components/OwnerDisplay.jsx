import OwnerInfo from "./OwnerInfo";
import OwnerRatings from "./OwnerRatings";
import PropTypes from 'prop-types';
import '../styles/OwnerDisplay.css';

function OwnerDisplay({ title, location, host, tags, ratings }) {
  return (
    <>
       <div className="ownerDisplayContainer">
      <OwnerInfo title={title} location={location} host={host} tags={tags} />
      <OwnerRatings host={host} rating={ratings} />
    </div>

    </>
  );
}

OwnerDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  host: PropTypes.object.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ratings: PropTypes.number.isRequired
};

export default OwnerDisplay;