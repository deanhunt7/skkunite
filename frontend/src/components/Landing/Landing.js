import React from 'react';
import './Landing.css'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import news1 from './ai-news-cover.jpg';
import news2 from './eskara.png';
import news3 from './plane.jpg';
import podcastpic from './podcast.jpg';


function Landing() {
    const welcomeText = (
        <>
          <p>Our mission:</p>
          <p>bridging cultures, fostering friendships,</p>
          <p style={{ marginBottom: '4em' }}>enhancing the global education experience</p>
        </>
      );

      const newsArticles = [
        { title: 'Memoria: A Memory System by SKKU Researchers', content: 'Based on Hebbian principles, it improves the performance of transformer-based machine learning models.', image: news1, date: '2023-11-01', slug: 'article1' },
        { title: 'ESKARA 2023', content: 'With Younha, Beenzino, Dynamic Duo, NewJeans and AKMU!', image: news2, date: '2023-11-07', slug: 'article2' },
        { title: 'The Life of an International at SKKU', content: 'The realities of living abroad: troubles with health insurance, making new friends, and finding out what to have for dinner.', image: news3, date: '2023-11-12', slug: 'article2' },
      ];
      
      const podcastEpisodes = [
        { title: 'SKKUnite: Episode 1', description: 'Welcome to SKKUnite! Today we discuss how you can make new friends on our platform.', image: podcastpic, date: '2023-11-02', slug: 'episode1' },
        { title: 'SKKUnite: Episode 2', description: 'Hello again! Today we go over cultural differences and how they affect our social life.', image: podcastpic, date: '2023-11-09', slug: 'episode2' },
      ];    

    let navigate = useNavigate();
    const routeChange = () => {
      let path = `Login/login`; 
      navigate(path);
    };

    const routeChange2 = () => {
      let path = `Register/register`; 
      navigate(path);
    };

    return (
    <div className="landing-page">
      <section className="welcome-section">
        <h1 style={{ color: 'black', fontSize: '5em', marginBottom: '-0.2em' }}>Welcome to</h1>
        <h1 style={{ color: 'darkgreen', fontSize: '5em', marginTop: '-0.3em', marginBottom: '0.5em' }}>SKKUnite!</h1>
        {welcomeText}
        <button
          className="login-button"
          style={{ marginRight: '10px' }}
          onClick={routeChange2}
        >
          Register
        </button>
        <button
          className="login-button"
          onClick={routeChange}
        >
          Log in
        </button>
      </section>

      <section className="section-container">
      <h2 className="section-title">News Articles</h2>
      <div className="articles-container">
        {newsArticles.map((article, index) => (
        <Link key={index} to={`./Articles/${article.slug}`} className="article-link">
        <div className="article">
        <p className="article-date">{article.date}</p>
        <img src={article.image} alt={article.title} className="article-image" />
        <h3 className="article-title">{article.title}</h3>
        <h5 className="article-description">{article.content}</h5>
        </div>
        </Link>
        ))}
        </div>
        </section>

        <section className="section-container">
        <h2 className="section-title">Podcast Episodes</h2>
        <div className="podcasts-container">
            {podcastEpisodes.map((episode, index) => (
            <Link key={index} to={`./Episodes/${episode.slug}`} className="episode-link">
            <div className="episode">
                <p className="episode-date">{episode.date}</p>
                <img src={episode.image} alt={episode.title} className="episode-image" />
                <h3>{episode.title}</h3>
                <h5>{episode.description}</h5>
            </div>
            </Link>
            ))}
        </div>
        </section>
        </div>
    );
}

export default Landing;

