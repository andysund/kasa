/* eslint-disable react/prop-types */
import '../styles/OwnerInfo.css'
import starRed from '../assets/star-red.png'
import starGrey from '../assets/star-grey.png'

function OwnerRatings({ host: { name, picture }, rating }) {
  // Conversion de la note en nombre
  const ratingValue = parseInt(rating, 10)

  return (
    <>
    <div className='owner-name-ratings'>
      <div className="loft-owner">
        <div className="loft-owner__name">
          <h1>{name}</h1>
        </div>
        <div className="loft-owner__picture">
          <img src={picture} alt={name} />
        </div>
      </div>

      {/* Affichage du rating sous forme d'étoiles */}
      <div className='owner-ratings'>
        {[1, 2, 3, 4, 5].map((index) => (
          <img
            key={index}
            src={index <= ratingValue ? starRed : starGrey}
            alt="star"
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default OwnerRatings
