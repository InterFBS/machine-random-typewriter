import React from 'react';

const QuoteBox = ({ quote, handleClick }) => {
  // se não houver citação, exibir uma mensagem de carregamento
  if (!quote) {
    return <p>Loading...</p>;
  }

  // extrair a citação e o autor de 'quote'
  const { content, author } = quote;

  // URL para tweetar a citação atual
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${content} - ${author}`
  )}`;

  return (
    <div id="quote-box">
      <div id="text">{content}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;
