import LogoFooter from '../assets/LOGO.png'
import Mention from '../assets/© 2020 Kasa. All rights reserved.png'
import { Link } from 'react-router-dom'
import '../styles/Legal.css'

function Footer () {
    return (
        <>
        <div className="footer">
        <div className="footer__logo">
             <Link to="/">
            <img src={LogoFooter} alt="Logo Kasa footer" className="Footer__logo" />
        </Link>
        </div>
        <div className='footer_legal'>
        <img src={Mention} alt="Legal mention" className="legalMentions" />
        </div>
       

        </div>
        </>
        
        
     )
}
export default Footer