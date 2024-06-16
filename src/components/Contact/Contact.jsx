import { useState } from 'react'
import './Contact.css'
import MessageBox from '../../assets/msg-icon.png'
import EmailIcon from '../../assets/mail-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import WhiteArrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "79d69d68-86e8-4cf2-85a5-d69ee482a92d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div className='Contact' id='contact'>
            <div className="conLeft">
                <h3>Send us a message <img src={MessageBox} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={EmailIcon} alt="" />
                        Fagbayibooluwasegun@gmail.com
                    </li>
                    <li><img src={PhoneIcon} alt="" />
                        +234-81381-61578
                    </li>
                    <li><img src={LocationIcon} alt="" />
                        77 Massachussets Ave, Cambridge <br /> MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="conLeft">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text " name='name' placeholder='Enter your name..' required />
                    <label>Phone</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label> Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={WhiteArrow} alt="" /></button>
                </form>
                <span className='sending'>{result}</span>
            </div>
        </div>
    )
}

export default Contact