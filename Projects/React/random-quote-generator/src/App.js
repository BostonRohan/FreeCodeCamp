import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [click, setClick] = useState(0);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => {
        setQuote(json.content);
        setAuthor(json.author);
      });
  }, [click]);
  return (
    <div id="quote-box">
      <h1 id="text">{quote}</h1>
      <h2 id="author">{author}</h2>
      <button id="new-quote" onClick={() => setClick(click + 1)}></button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet">
        <img
          className="twitter-icon"
          src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
          alt="Twitter Icon"
        ></img>
      </a>
    </div>
  );
}
export default App;
