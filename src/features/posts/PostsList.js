import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((el) => (
    <article className="post-excerpt" key={el.id}>
      <h3>{el.title}</h3>
      <p className="post-content">{el.content.substring(0, 100)}</p>
      <Link to={`/post/${el.id}`} className="button-viewPost">
        View Post
      </Link>

      <Link to="https://www.google.com.vn/?hl=vi">Google</Link>
    </article>
  ));

  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};
