import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div id="quote-box">
      <blockquote>
        <p id="text">{quote}</p>
        <footer id="author">- {author}</footer>
      </blockquote>
      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote}" - ${author}`
        )}`}
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
