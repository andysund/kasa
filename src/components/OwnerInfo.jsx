/* eslint-disable react/prop-types */
// OwnerInfo.jsx
import '../styles/OwnerInfo.css'
function OwnerInfo({ title, location, host }) {
    console.log(host)
    const { name, picture, } = host
    return (
        <>
      <div className="loft-full-info">
        <div className="loft-location">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="loft-owner">
          <div className="loft-owner__name">
            <h1>{name}</h1>
          </div>
          <div className="loft-owner__picture">
            <img src={picture} alt={name} />
          </div>
        </div>
      </div>
    </>

    )
  }
  
  export default OwnerInfo
  