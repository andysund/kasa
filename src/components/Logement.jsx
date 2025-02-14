// Logement.jsx
import { useParams } from 'react-router-dom'
import logements from '../assets/logements.json'
import OwnerInfo from './OwnerInfo'
import SlideShow from './SlideShow'
import Banner from './banner'
import Footer from './Footer'

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
      <OwnerInfo 
        title={logement.title}
        location={logement.location}
        host={logement.host}
      />
      <Footer/>

      
    

  
    </>
  )
}

export default Logement
