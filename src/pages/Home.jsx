import Banner from '../components/banner.jsx'
import Housedisplay from '../components/housedisplay.jsx'
import Landscape from '../components/Landscape.jsx'
import Footer from '../components/Footer.jsx'
import BackGroundImg1 from '../assets/Image source 1.png'


function Home() {
    return ( 
        <>
        <Banner/>
        <Landscape imageUrl={BackGroundImg1} title="Chez vous ,partout et ailleurs"/>
        <Housedisplay/>
        <Footer/>


        </>

    )


}
export default Home