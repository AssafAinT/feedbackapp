import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackData from './data/FeedBackData';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const title = 'My App';
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      //return array minus the one deleted
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
