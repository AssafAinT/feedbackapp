import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);
  //Fetch feedback - using proxy
  const fetchFeedback = async () => {
    //const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const response = await fetch(`https://my-json-server.typicode.com/AssafAinT/feedbackapp/feedback?_sort=id&_order=desc`);

    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  //delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      //return array minus the one deleted
      await fetch(`https://my-json-server.typicode.com/AssafAinT/feedbackapp/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //update the feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`https://my-json-server.typicode.com/AssafAinT/feedbackapp/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
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
  const addFeedback = async (newFeedback) => {
    const response = await fetch('https://my-json-server.typicode.com/AssafAinT/feedbackapp/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
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
