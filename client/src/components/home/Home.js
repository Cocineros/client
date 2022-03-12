import Landing from '../landing/SignupModal
import Card from '../card/Card'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import LoginModal from '../login-modal/LoginModal'
import './home.css'

export default function Home() {
    return (
        <>
        <Landing/>
        <LoginModal />
        <About/>
        <Card/>
        <Testimonial/>
        <Footer/>
        </>
    )
}