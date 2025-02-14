/* eslint-disable react/prop-types */
// OwnerInfo.jsx
import '../styles/OwnerInfo.css'
function OwnerInfo({ title, location, tags }) {
    
    return (
        <>
       <div className='loft-tags'>
        <div className="loft-full-info">
          <div className="loft-location">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
        
        </div>
        <div className='tag'>
          {tags.map((tag, index) => (
            <div className="tags" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
    )
}

export default OwnerInfo
  