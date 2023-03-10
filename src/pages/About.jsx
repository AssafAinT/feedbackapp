import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About FeedBack App</h1>
        <p>This is a React App that was demonstrating a Feedback app</p>
        <p>Version :1.0.0 </p>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
