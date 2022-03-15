import LogoArtwork from '../../assets/bumbu-log-tgt.png'
import './welcome.css'


export default function Welcome() {

    return (
        <>
            <div id="welcome-container">
                <div id="home-logo-container">
                    <img id="home-logo" src={LogoArtwork} alt="bumbu homepage logo" />
                </div>
                <div id="welcome-text-container">
                    <p className="welcome-text" id="phonetics">boom•boo</p>
                    <p className="welcome-text">the Indonesian word for spice</p>
                    <p className="welcome-text">write and save your favorite recipes right here </p>
                    <p className="welcome-text">and access them from anywhere in the world</p>

                </div>
            </div>
        </>
    )
}
