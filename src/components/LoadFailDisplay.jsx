import { Link } from 'react-router-dom'
import '../styles/LoadFailDisplay.css'
function LoadFailDisplay  () {
  return (
    <>
    <div className="getAway">
    <div className="error">
    <img src="../assets/404.png" alt="404" />
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