import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/HeroBannerDesktop.css"
import Cookies from 'js-cookie'
import "animate.css/animate.min.css"

const Home = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="hero_main_parent">

                    <div className="hero_subparent1">
                        <p className='heroleftdiv_p2'>Motivate, Connect, Educate</p>
                        <p className='heroleftdiv_p3'>Transforming the Educational Landscape and Empowering Students of All Categories and Sectors to Achieve their Full Potential! </p>
                    </div>
                    
                </div>
            </div>
            </>
            )
        }

export default Home