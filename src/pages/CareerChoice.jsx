import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/Career.css'

const CareerChoice = () => {
    return (
      <div className="career-choice-container">
        <div className="header">
          <h1 className="header-title">Career Choices</h1>
        </div>
        <div className="career-choice-card-container">
          <div className="career-choice-card">
            <h2 className="career-choice-card-title">Based on Market Trends</h2>
            <p className="career-choice-card-description">
            When considering a career choice, it is important to take market trends into account. Staying up to date with the latest job market trends can help you make informed decisions about your future career. Researching current industries and job market conditions can help you identify which fields are growing and which ones are declining, and can help you identify which career paths are likely to be in demand in the future.
            
            Some industries that are currently experiencing growth include technology, healthcare, and renewable energy. These industries offer a wide range of job opportunities and are likely to continue growing in the future. Additionally, fields such as data analysis, digital marketing, and software development are also in high demand and may be worth considering if you have a background or interest in these areas.
            </p>
          </div>
          <div className="career-choice-card">
            <h2 className="career-choice-card-title">Based on Personal Interest</h2>
            <p className="career-choice-card-description">
            When choosing a career, it is also important to consider your personal interests and passions. Selecting a career that aligns with your interests and values can lead to job satisfaction and a more fulfilling work life. When considering your personal interests, think about the activities you enjoy in your free time, your skills and hobbies, and the causes you are passionate about.
            
            For example, if you have a love for photography and are passionate about capturing moments, a career as a photographer or photojournalist may be a good fit for you. If you are interested in helping others and have a background in psychology, a career as a therapist or counselor may be a good match.
            </p>
          </div>
          <div className="career-choice-card">
            <h2 className="career-choice-card-title">Based on Personal Vision</h2>
            <p className="career-choice-card-description">
            Having a clear vision for your future can help guide your career choices and help you achieve your goals. Consider what you want to achieve in your career, what kind of work environment you want to be in, and what kind of lifestyle you want to lead. Having a personal vision can help you identify the types of careers that align with your values and can help you make informed decisions about your future.
            
            For example, if your personal vision includes working in a creative and innovative environment, a career in the tech industry or in a startup company may be a good fit for you. If your vision includes making a positive impact on others and helping those in need, a career in the non-profit sector or in healthcare may be a good match.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CareerChoice;
