/* eslint-disable react/prop-types */
import '../styles/OwnerRatings.css'
import starRed from '../assets/star-red.png'
import starGrey from '../assets/star-grey.png'

function OwnerRatings({ host: { name, picture }, rating }) {
  // 1. On sépare le prénom et le nom
  const fullName = name.trim().split(/\s+/)
  const lastName = fullName[fullName.length - 1]
  const firstName = fullName.slice(0, fullName.length - 1).join(' ')

  // 2. Convertir la note en nombre pour l'affichage des étoiles
  const ratingValue = parseInt(rating, 10)

  return (
    <div className="owner-name-ratings">
      <div className="loft-owner">
        {/* 3. Afficher le prénom et le nom sur 2 lignes */}
        <div className="loft-owner__name">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>

        <div className="loft-owner__picture">
          <img src={picture} alt={name} />
        </div>
      </div>

      {/* 4. Affichage du rating sous forme d'étoiles */}
      <div className="owner-ratings">
        {[1, 2, 3, 4, 5].map((index) => (
          <img
            key={index}
            src={index <= ratingValue ? starRed : starGrey}
            alt="star"
          />
        ))}
      </div>
    </div>
  )
}

export default OwnerRatings
