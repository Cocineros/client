import Welcome from '../welcome/Welcome'
import SignupModal from '../signup-modal/SignupModal'
import Card from '../card/Card'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import './home.css'
// import LogoArtwork from '../../assets/logo-artwork.svg'



export default function Home() {
    return (
        <>
        <div class="home-components">
        <Welcome />
        <SignupModal/>
        <LoginModal />
        <About/>
        <Card/>
        <Testimonial/>
        <Footer/>  
        </div>
        </>
    )
}