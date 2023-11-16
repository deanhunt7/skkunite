import React from 'react';
import './Article.css'; 
import news1 from './ai-news-cover.jpg';

const Article1 = () => {
  const introContent =
    <strong>
      Researchers from Sungkyunkwan University in South Korea have unveiled a groundbreaking memory system inspired by the principles of Hebbian theory. This innovation promises to significantly improve the performance of transformer-based machine learning models, especially in tasks that require processing long data sets.
    </strong>;

  const par1 = 
    'In a stunning breakthrough, bright minds at Sungkyunkwan University in South Korea have unveiled an entirely new memory system that may be shaking up the world of transformer-based machine learning. Inspired by the genius Hebbian theory, this cutting-edge innovation promises to significantly boost the performance of our beloved models, especially when faced with marathon-like data sequences.';
  const par2 =
    'In their recent publication on the arXiv preprint server, the researchers introduce us to "Memoria," a memory network that acts as the Super Mario of neural networks, with Hebb\'s rule acting like the magic mushroom to strengthen long-term dependencies. You know how it is, those transformers are just like your crowded attic: great for quick access, but a nightmare for long-term storage. While humans selectively pick up information, transformers process raw data from start to finish, making them less efficient at handling bigger data sets.';
  const par3 =
    'But fear not, the brilliant minds of Sangjun Park and JinYeong Bak have taken on the mission to give Transformer models superpowers. With Memoria,  they store and retrieve information in different layers of working memory, short-term memory, and long-term memory. As if memory itself is a superhero that is always ready.';
  const par4 =
    'And the results? Well, they are more than promising. By experimenting with popular transformer models such as BERT and GPT, the researchers showed that Memoria is the king of long-term dependencies. In language classification and modeling longer texts, Memoria surpassed existing methods with flying colors.';
  const par5 =
    'But that\'\s not all - these visionaries have released the code for Memoria on GitHub like a kind of digital confetti, making it easily accessible to developers worldwide. An open invitation to a global party for machine learning experts, hoping they will embrace Memoria and take their Transformer models to new heights.';
  const par6 =
    'So, as we continue to push the boundaries of machine learning, with Memoria as our sidekick, we can expect transformer models to become not only more powerful but also a hell of a lot smarter. The age of smart machines has arrived, and we have a new hero at the forefront: Memoria, the memory superstar.';

  return (
    <div className="article-container">
      <h1 className="article-title">Memoria: A Memory System by SKKU Researchers</h1>
      <img src={news1} alt="Article1 Image" className="article-image" />
      <div className="article-content">
        <div className="article-intro-box">
          <p className="article-intro">{introContent}</p>
        </div>
        <div className="article-box">
          <p>{par1}</p>
          <p>{par2}</p>
          <p>{par3}</p>
          <p>{par4}</p>
          <p>{par5}</p>
          <p>{par6}</p>
        </div>
        <p className="article-info">Date: 2023-11-01 | Author: John Doe</p>
      </div>
    </div>
  );
};

export default Article1;

