import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item 2 is from context',
      rating: 10,
    },
    {
      id: 3,
      text: 'This item 3 is from context',
      rating: 10,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      //return array minus the one deleted
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //update the feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };
  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //add feedback
  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedback([newFeedBack, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedBack,
        //function
        editFeedback,
        updateFeedback,

        //state
        feedbackEdit,
      }}
    >
      {children};
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
