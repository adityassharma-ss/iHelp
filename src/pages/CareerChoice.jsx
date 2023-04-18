// import React, { useState } from 'react';
// import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
// import '../styles/Career.css'
// // import "../styles/Explore.css"
// import { FaArrowDown } from 'react-icons/fa';
// import { Helmet } from 'react-helmet'
// import Trending from '../components/explorecomponents/Trending'
// import TrendingDevPro from '../components/explorecomponents/TrendingDevPro'


// const CareerChoice = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardSelection = (index) => {
//     setSelectedCard(index === selectedCard ? null : index);
//   };

//   return (
//     <div className="career-choice-container">
//       <div className="career-header">
//       <h1 className="career-header-title">Explore Today's Trends</h1>
//       </div>
      
//     </div>
//   );
// };

// export default CareerChoice;

import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import '../styles/Career.css';
import { FaArrowDown } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
// import Trending from '../components/explorecomponents/Trending';
// import TrendingDevPro from '../components/explorecomponents/TrendingDevPro';
// import FeaturedJobs from '../components/explorecomponents/FeaturedJobs';
// import JobSearch from '../components/explorecomponents/JobSearch';
// import CompanySearch from '../components/explorecomponents/CompanySearch';
// import LatestArticles from '../components/explorecomponents/LatestArticles';

const CareerChoice = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="career-choice-container">
      {/* <Helmet>
        <title>Career Choice - Find Your Dream Job Today</title>
        <meta
          name="description"
          content="Explore the latest trends in technology and find your dream job with Career Choice"
        />
      </Helmet> */}

      <div className="career-header">
        <h1 className="career-header-title">Explore Today's Trends</h1>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <Card
              className={`career-choice-card ${
                selectedCard === 0 ? 'selected' : ''
              }`}
              onClick={() => handleCardSelection(0)}
            >
              <Card.Header>Your Career</Card.Header>
              <Card.Body>
                <Card.Title>Explore your career choices with us</Card.Title>
                <Card.Text>
                  Discover the most popular career in the market and stay
                  ahead of the curve.
                </Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <FaArrowDown />
                  &nbsp; ReactJS
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaArrowDown />
                  &nbsp; Python
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaArrowDown />
                  &nbsp; Blockchain
                </ListGroup.Item>
              </ListGroup> */}
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className={`career-choice-card ${
                selectedCard === 1 ? 'selected' : ''
              }`}
              onClick={() => handleCardSelection(1)}
            >
              <Card.Header>Your Interests</Card.Header>
              <Card.Body>
                <Card.Title>Do what interests you!</Card.Title>
                <Card.Text>
                Search for the courses which interests you. Learn and have a blast!
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <JobSearch /> */}
              </ListGroup>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className={`career-choice-card ${
                selectedCard === 2 ? 'selected' : ''
              }`}
              onClick={() => handleCardSelection(2)}
            >
              <Card.Header>Ideal Start</Card.Header>
              <Card.Body>
                <Card.Title>Find your Career</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <CompanySearch /> */}
                </ListGroup>
        </Card>
      </Col>
    </Row>

    {/* <Row className="mt-5">
      <Col md={8}>
        <FeaturedJobs />
      </Col>

      <Col md={4}>
        <Trending />
        <TrendingDevPro />
      </Col>
    </Row>

    <Row className="mt-5">
      <Col md={12}>
        <LatestArticles />
      </Col>
    </Row> */}
  </Container>
</div>

);
};

export default CareerChoice;