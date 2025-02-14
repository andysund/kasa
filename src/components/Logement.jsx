// Logement.jsx
import { useParams } from 'react-router-dom'
import logements from '../assets/logements.json'

import SlideShow from './SlideShow'
import Banner from './banner'
import Footer from './Footer'
import OwnerDisplay from './OwnerDisplay'
import Dropdown from './Dropdown'
import '../styles/Logement.css'

function Logement() {
  const { id } = useParams()
  const logement = logements.find(log => log.id === id)

  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <>
      <Banner/>
      <SlideShow pictures={logement.pictures} />
      <OwnerDisplay 
        title={logement.title} 
        location={logement.location} 
        host={logement.host} 
        tags={logement.tags} 
        ratings={logement.rating} 
      />
      <div className="dropdownDisplay">
        <Dropdown title={logement.title} items={logement.description}/>
        <Dropdown title={logement.title} items={logement.equipments}/>
      
      </div>
      <Footer/>

      
    

  
    </>
  )
}

export default Logement
