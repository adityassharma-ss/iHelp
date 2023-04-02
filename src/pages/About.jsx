import React from 'react'
import About from '../styles/About.css'

const Main = () => {
    return (
        <div className='about_parent'>
        <div className='about_child'>
        <img src="https://miro.medium.com/max/1400/1*7rtCcdxN2BXCOGV5OSGMMg.png" alt="coding image" className="about-image" />
        <h1 className='about_head'>Our Community</h1>
        <ul className="about-points">
            <p>Our platform  is a place for students, developers, designers, and tech enthusiasts to connect, collaborate, and learn from each other. We help developers to get into communities. Our goal is to create a welcoming and supportive community where people can share their knowledge, find resources and support, and build meaningful connections.</p>
        </ul>
        </div>
        </div>
        
    )
}

export default Main