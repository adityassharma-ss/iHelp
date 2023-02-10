import React, { useState } from 'react'
import Home from './roadmaps/Home'
import Contacts from '../styles/Contacts.css'
import Frontend from './roadmaps/Frontend';
import FullStack from './roadmaps/Fullstack';
import Backend from './roadmaps/Backend';


const Mentorships = () => {
  const [selectedSubject, setSelectedSubject] = useState('subject1') // state to keep track of the selected subject

  return (
    <div className='page-container'>
      {/* Left navbar */}
      <div className='navbar-container'>
      <div className='navbar-heading'>Contents</div>
      <div className='navbar-item' onClick={() => setSelectedSubject('subject0')}>
          Home
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject1')}>
          Full Stack Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject2' )}>
          Frontend Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Backend Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Android Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Blockchain Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          DevOps 
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          OpenSource
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Machine Learning
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Competitive Programming
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Cyber Security
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Cloud Computing
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Data Science
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          Computer Science
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          B.Tech
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          M.Tech
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject3')}>
          MBA
        </div>
        {/* add more navbar items here */}
      </div>

      {/* Course roadmap */}
      <div className='roadmap-container'>
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {<FullStack/>}
          </div>
        )}
        {selectedSubject === 'subject2' && (
          <div className='roadmap-item'>
            { <Frontend /> }
          </div>
        )}
        {selectedSubject === 'subject3' && (
          <div className='roadmap-item'>
            { <Backend/> }
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {selectedSubject === 'subject1' && (
          <div className='roadmap-item'>
            {/* subject 1 course roadmap */}
          </div>
        )}
        {/* add more roadmap items here */}
      </div>
    </div>
  )
}

export default Mentorships
