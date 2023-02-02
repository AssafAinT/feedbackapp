import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context /FeedbackContext';
function FeedBackStats() {
  const { feedback } = useContext(FeedbackContext);
  //calc avg rate
  let avgRate =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  avgRate = avgRate.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rate: {isNaN(avgRate) ? 0 : avgRate}</h4>
    </div>
  );
}

export default FeedBackStats;
