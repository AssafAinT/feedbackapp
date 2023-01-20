import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function FeedBackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');

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
  return (
    <Card>
      <form>
        <h2>How Would you rate the service that was given to you?</h2>
        {/*TODO: rating select component  */}
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
