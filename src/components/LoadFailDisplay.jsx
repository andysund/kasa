import { Link } from 'react-router-dom'
import '../styles/LoadFailDisplay.css'
import errorImage from '../assets/404.png';
function LoadFailDisplay  () {
  return (
    <>
    <div className="getAway">
    <div className="error">
    <img src={errorImage} alt="404"  />
    </div>
    <div className="error__message">
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        </div>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
        
    </>
  )
}
export default LoadFailDisplay