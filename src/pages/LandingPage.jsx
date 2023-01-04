import React from 'react'
import CommunityBanner from '../components/landingcomponents/CommunityBanner'
import DeveloperBanner from '../components/landingcomponents/DeveloperBanner'
import About from './About.jsx'
import Footer from '../components/Footer'
import Home from '../components/landingcomponents/Home'
import ProjectsBanner from '../components/landingcomponents/ProjectsBanner'
import "../styles/LandingPage.css"

const LandingPage = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
        <div className='HeroBannerDesktop_Parentdiv'>
                <Home />
                <DeveloperBanner />
                <CommunityBanner />
                <ProjectsBanner />
                <About />
                <Footer>
                <button className='scroll-to-top-btn' onClick={scrollToTop}>
                    Scroll to top
                </button>
                </Footer>
        </div>
        </>
    )
}

export default LandingPage