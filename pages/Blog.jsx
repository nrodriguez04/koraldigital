import React from 'react';

const Blog = ({ articles }) => (
  <div>
    <h1>My Blog</h1>
    <ArticleList articles={articles} />
  </div>
);

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map((article, i) => (
      <li key={i}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </li>
    ))}
  </ul>
);

export default Blog;
