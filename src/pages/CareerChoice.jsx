import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import '../styles/Career.css'
import { FaArrowDown } from 'react-icons/fa';

const CareerChoice = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="career-choice-container">
      <div className="header">
      <h1 className="header-title">Explore Your Career Options</h1>
      </div>
      <div>
      <p className="header-subtitle">Find a career that aligns with your interests, values, and goals.</p>
      </div>
      <div className="career-choice-card-container">
        <Card className={`career-choice-card ${selectedCard === 0 ? 'expanded' : ''}`} onClick={() => handleCardSelection(0)}>
          <Card.Header className="career-choice-card-header">
            <h2 className="career-choice-card-title">Based on Market Trends</h2>
          </Card.Header>
          <Card.Body className="career-choice-card-body">
            <p className="career-choice-card-description">
              When considering a career choice, it is important to take market trends into account. Staying up to date with the latest job market trends can help you make informed decisions about your future career. Researching current industries and job market conditions can help you identify which fields are growing and which ones are declining, and can help you identify which career paths are likely to be in demand in the future.
              Some industries that are currently experiencing growth include technology, healthcare, and renewable energy. These industries offer a wide range of job opportunities and are likely to continue growing in the future. Additionally, fields such as data analysis, digital marketing, and software development are also in high demand and may be worth considering if you have a background or interest in these areas.
            </p>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <div className={`overlay ${selectedCard === 0 ? 'show' : ''}`} onClick={() => handleCardSelection(null)}>
          <FaArrowDown className="overlay-icon" />
          </div>
        </Card>
        <Card className={`career-choice-card ${selectedCard === 1 ? 'expanded' : ''}`} onClick={() => handleCardSelection(1)}>
          <Card.Header className="career-choice-card-header">
            <h2 className="career-choice-card-title">Based on Personal Interest</h2>
          </Card.Header>
          <Card.Body className="career-choice-card-body">
            <p className="career-choice-card-description">
              When choosing a career, it is also important to consider your personal interests and passions. Selecting a career that aligns with your interests and values can lead to job satisfaction and a more fulfilling work life. When considering your personal interests, think about the activities you enjoy in your free time, your skills and hobbies, and the causes you are passionate about.
              For example, if you have a love for photography and are passionate about capturing moments, a career as a photographer or photojournalist may be a good fit for you. If you are interested in helping others and have a background in psychology, a career as a therapist or counselor may be a good match.
            </p>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          
          <div className={`overlay ${selectedCard === 1 ? 'show' : ''}`} onClick={() => handleCardSelection(null)}>
            {/* <Button className="overlay-close-btn">Close</Button> */}
          </div>
        </Card>
        <Card className={`career-choice-card ${selectedCard === 2 ? 'expanded' : ''}`} onClick={() => handleCardSelection(2)}>
          <Card.Header className="career-choice-card-header">
            <h2 className="career choice-card-title">Based on Personal Vision</h2>
          </Card.Header>
          <Card.Body className="career-choice-card-body"> 
            <p className="career-choice-card-description">
              When choosing a career, it is also important to consider your personal vision and goals. Your career should align with your personal and professional goals. Think about where you see yourself in 5, 10, or 20 years and choose a career that will help you achieve your vision. This will give you direction and purpose in your career journey.
              For example, if you want to be a CEO of a large company, you may want to consider a career in business or management. If you want to be a teacher, you may want to consider a career in education. If you want to be a doctor, you may want to consider a career in healthcare.
            </p>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
          <div className={`overlay ${selectedCard === 2 ? 'show' : ''}`} onClick={() => handleCardSelection(null)}>
            {/* <Button className="overlay-close-btn">Close</Button>   */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CareerChoice;
