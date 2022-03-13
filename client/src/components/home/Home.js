import SignupModal from '../signup-modal/SignupModal'
import Card from '../card/Card'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import './home.css'

export default function Home() {
    return (
        <>
        <SignupModal/>
        <LoginModal />
        <About/>
        <Card/>
        <Testimonial/>
        <Footer/>
        </>
    )
}