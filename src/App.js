import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackData from './data/FeedBackData';
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
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
//   const body = 'this is a blog post';
//   const comments = [
//     { id: 1, text: 'comment one ' },
//     { id: 2, text: 'comment two ' },
//     { id: 3, text: 'comment three ' },
//   ];

//   const loading = false;
//   const showComments = true;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
//   if (loading) return <h1>Loading...</h1>;
//   return React.createElement(
//     'div',
//     { className: 'container' },
//     React.createElement('h1', {}, 'My App')
//   );
export default App;
