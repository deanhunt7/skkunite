import React from 'react';
import './Landing.css'; // Import the CSS file

function Landing() {
    // Sample news articles and podcast episodes
    const newsArticles = [
        { title: 'Breaking News 1', content: 'This is the content of the first news article.' },
        { title: 'Breaking News 2', content: 'This is the content of the second news article.' },
    ];

    const podcastEpisodes = [
        { title: 'Podcast Episode 1', description: 'This is the first podcast episode description.' },
        { title: 'Podcast Episode 2', description: 'This is the second podcast episode description.' },
    ];

    return (
        <div className="landing-page">
            <h1>News & Podcast</h1>
            <div className="article-container">
                <h2>News Articles</h2>
                {newsArticles.map((article, index) => (
                    <div key={index} className="article">
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
            <div className="podcast-container">
                <h2>Podcast Episodes</h2>
                {podcastEpisodes.map((episode, index) => (
                    <div key={index} className="episode">
                        <h3>{episode.title}</h3>
                        <p>{episode.description}</p>
                    </div>
                ))}
            </div>
            <button className="make-account-button">Make Account</button>
        </div>
    );
}

export default Landing;

