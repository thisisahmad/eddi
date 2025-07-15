import React from 'react';

const BlogCard = ({ title, meta, excerpt, list, excerpt2, href }) => (
  <div className="blog-card">
    <div className="blog-card-content">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-meta">{meta}</p>
      <p className="blog-excerpt">{excerpt}</p>
      {list && (
        <ul className="blog-list">
          {list.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      )}
      {excerpt2 && <p className="blog-excerpt">{excerpt2}</p>}
      <a
  href={href || "#"}
  className="blog-read-more"
  target="_blank"
  rel="noopener noreferrer"
>
  Read More
</a>

    </div>
  </div>
);

export default BlogCard; 