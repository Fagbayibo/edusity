import './Hero.css'
import arrowIcon from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='Hero container' id='hero'>
            <div className='heroText'>
                <h1>We ensure better education for a better world</h1>
                <p> Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className="btn">Explore more <img className='arrowIcon' src={arrowIcon} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero