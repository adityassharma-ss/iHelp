import React, { useState } from 'react'
import Home from './roadmaps/Home'
import Contacts from '../styles/Contacts.css'
import Frontend from './roadmaps/Frontend';
import FullStack from './roadmaps/Fullstack';
import Backend from './roadmaps/Backend';
import Android from './roadmaps/Android';
import Blockchain from './roadmaps/Blockchain';
import Devops from './roadmaps/Devops';
import OpenSource from './roadmaps/OpenSource';
import Machinelearning from './roadmaps/Machinelearning';
import Cybersecurity from './roadmaps/Cybersecurity';
import Competitiveprogramming from './roadmaps/Competitiveprogramming';
import Cloudcomputing from './roadmaps/Cloudcomputing';
import Datascience from './roadmaps/Datascience';


const Mentorships = () => {
  const [selectedSubject, setSelectedSubject] = useState('subject0') // state to keep track of the selected subject

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
        <div className='navbar-item' onClick={() => setSelectedSubject('subject4')}>
          Android Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject5')}>
          Blockchain Development
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject6')}>
          DevOps 
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject7')}>
          OpenSource
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject8')}>
          Machine Learning
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject9')}>
          Cyber Security
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject10')}>
          Competitive Programming
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject11')}>
          Cloud Computing
        </div>
        <div className='navbar-item' onClick={() => setSelectedSubject('subject12')}>
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
      {selectedSubject === 'subject0' && (
          <div className='roadmap-item'>
            {<Home/>}
          </div>
        )}
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
        {selectedSubject === 'subject4' && (
          <div className='roadmap-item'>
            { <Android/> }
          </div>
        )}
        {selectedSubject === 'subject5' && (
          <div className='roadmap-item'>
            { <Blockchain/> }
          </div>
        )}
        {selectedSubject === 'subject6' && (
          <div className='roadmap-item'>
            { <Devops/>}
          </div>
        )}
        {selectedSubject === 'subject7' && (
          <div className='roadmap-item'>
            { <OpenSource/> }
          </div>
        )}
        {selectedSubject === 'subject8' && (
          <div className='roadmap-item'>
            {<Machinelearning/>}
          </div>
        )}
        {selectedSubject === 'subject9' && (
          <div className='roadmap-item'>
            {<Cybersecurity/>}
          </div>
        )}
        {selectedSubject === 'subject10' && (
          <div className='roadmap-item'>
            {<Competitiveprogramming/>}
          </div>
        )}
        {selectedSubject === 'subject11' && (
          <div className='roadmap-item'>
            {<Cloudcomputing/>}
          </div>
        )}
        {selectedSubject === 'subject12' && (
          <div className='roadmap-item'>
            {<Datascience/>}
          </div>
        )}
        {/* add more roadmap items here */}
      </div>
    </div>
  )
}

export default Mentorships
