import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import { useState, useContext, useEffect } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import FeedbackContext from '../context /FeedbackContext';
function FeedBackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleTextChange = (event) => {
    if (text === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg('review has to be at least 10 characters');
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    //prevent submitting to the actual file
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedBack);
      } else {
        addFeedback(newFeedBack);
      }

      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate the service that was given to you?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button
            type="submit"
            /*version="secondary"*/ isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
