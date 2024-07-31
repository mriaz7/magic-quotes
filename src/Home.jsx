import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RandomQuote from './RandomQuote';
import SavedQuotes from './SavedQuotes';
import LogoutButton from './LogoutButton';

const Home = () => {
  const { userId } = useParams();
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`savedQuotes_${userId}`)) || [];
    setSavedQuotes(saved);
  }, [userId]);

  const saveQuote = (quote) => {
    const newSavedQuotes = [...savedQuotes, quote];
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem(`savedQuotes_${userId}`, JSON.stringify(newSavedQuotes));
  };

  const deleteQuote = (index) => {
    const newSavedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem(`savedQuotes_${userId}`, JSON.stringify(newSavedQuotes));
  };

  const editQuote = (index, newText) => {
    const newSavedQuotes = savedQuotes.map((quote, i) => {
      if (i === index) {
        return { ...quote, text: newText };
      }
      return quote;
    });
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem(`savedQuotes_${userId}`, JSON.stringify(newSavedQuotes));
  };

  return (
    <div className='grid-container'>


<div className="container">
      <RandomQuote onSaveQuote={saveQuote} />
      <SavedQuotes savedQuotes={savedQuotes} onDeleteQuote={deleteQuote} onEditQuote={editQuote} />
      
    </div>
    <div>
    <LogoutButton />


    </div>
          </div>
    
  );
};

export default Home;
