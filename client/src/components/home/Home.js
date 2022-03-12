import Landing from '../landing/Landing'
import Card from '../card/Card'
import Testimonial from '../testimonal/Testimonial'
import About from '../about/About'
import Footer from '../footer/Footer'
import './home.css'

export default function Home() {
    return (
        <>
        <Landing/>
        <About/>
        <Card/>
        <Testimonial/>
        <Footer/>
        </>
    )
}