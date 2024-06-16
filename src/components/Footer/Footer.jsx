import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <p>@ {new Date().getFullYear()} Edusity. All rights reserved</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer