import React, { useRef } from 'react'
import './Testimonials.css'
import NextIcon from '../../assets/next-icon.png'
import PrevIcon from '../../assets/back-icon.png'
import User1 from '../../assets/user-1.png'
import User2 from '../../assets/user-2.png'
import User3 from '../../assets/user-3.png'
import User4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='Testimonials' id='testimonial'>
            <img src={NextIcon} alt="" className='next-btn' onClick={slideForward} />
            <img src={PrevIcon} alt="" className='prev-btn' onClick={slideBackward} />
            <div className="slider">

                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User1} alt="User one" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User2} alt="User one" />
                                <div>
                                    <h3>Jackson Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User3} alt="User one" />
                                <div>
                                    <h3>Mandy Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userInfo">
                                <img src={User1} alt="User one" />
                                <div>
                                    <h3>Precious Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials