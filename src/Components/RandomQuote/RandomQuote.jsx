import React, { useState } from 'react';
import './RandomQuote.css';
import twitter_icon from '../Assets/social-media.png';
import reload_icon from '../Assets/rotate-arrow.png';

const RandomQuote = () => {
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang Von Goethe",
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    };

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    };

    loadQuotes();

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={reload_icon} onClick={random} alt="" />
                        <img src={twitter_icon} onClick={twitter} alt="" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Akilesh. <i class="fa-sharp fa-solid fa-heart"></i> All Rights Reserved.</p>
            </footer>
        </div>
    );
}


export default RandomQuote;
