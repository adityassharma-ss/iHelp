import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/HeroBannerDesktop.css"
import Cookies from 'js-cookie'
import "animate.css/animate.min.css"

const HeroBannerDeskop = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="hero_main_parent">

                    <div className="hero_subparent1">
                        <p className='heroleftdiv_p2'>Building connections through technology and collaboration</p>
                        <p className='heroleftdiv_p3'>Come join us on our journey as we help you connect with other amazing developers, discover valuable products, and join a welcoming community! </p>
                    </div>
                    
                </div>
            </div>
            </>
            )
        }

export default HeroBannerDeskop