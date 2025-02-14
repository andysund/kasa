import OwnerInfo from "./OwnerInfo";
import OwnerRatings from "./OwnerRatings";
import PropTypes from 'prop-types';

function OwnerDisplay({ title, location, host, tags, ratings }) {
  return (
    <>
      <OwnerInfo title={title} location={location} host={host} tags={tags} />
      <OwnerRatings host={host} rating={ratings} />

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