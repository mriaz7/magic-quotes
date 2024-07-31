import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomQuote = ({ onSaveQuote }) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const quotes = response.data;
      console.log(quotes)
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error("There was an error fetching the quotes!", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="section section1">
       <h2>Random Quote</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        quote && (
        <div className="quote">
          <p className="quoteText">{quote.text}</p>
          <p className="quoteAuthor">- {quote.author}</p>
          <button onClick={() => onSaveQuote(quote)} className="button">Save</button>
          <button onClick={fetchQuote} className="button">Next Quote</button>
        </div>
        )
      )}
    </div>
  );
};

export default RandomQuote;
