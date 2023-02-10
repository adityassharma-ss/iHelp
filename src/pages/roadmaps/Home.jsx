import React from 'react'
import '../mapstyles/home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='header'>
        <h1>Mentorship & RoadMaps</h1>
      </div>
      <div className='card-container'>
        <div className='card'>
          <h2>Based on Market Trends</h2>
          <p>Stay ahead of the curve by choosing a career that is in high demand. Research the current job market and identify the industries and roles that are growing rapidly. This will give you a competitive edge and increase your chances of landing a job in your desired field.</p>
        </div>
        <div className='card'>
          <h2>Based on Personal Interest</h2>
          <p>Following your passion is key to a fulfilling career. Consider your interests, skills, and strengths when making a career choice. If you choose a career that you are passionate about, you are more likely to be happy and successful in the long run.</p>
        </div>
        <div className='card'>
          <h2>Based on Personal Vision</h2>
          <p>Your career should align with your personal and professional goals. Think about where you see yourself in 5, 10, or 20 years and choose a career that will help you achieve your vision. This will give you direction and purpose in your career journey.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
