import "./QuoteContainer.css";

const QuoteContainer = ({ quote, handleChangeQuote }) => {
  return (
    <section className="quoteCard">
      <article className="quoteCard_container">
        <h1 className="quoteCard_title">INFOGALAX</h1>
        <p className="quoteCard_phrase">{quote.phrase}</p>
        <button
          onClick={handleChangeQuote}
          className="quoteCard_button"
        ></button>
      </article>
      <footer className="quoteCard_footer">Author: {quote.author}</footer>
    </section>
  );
};
export default QuoteContainer;
