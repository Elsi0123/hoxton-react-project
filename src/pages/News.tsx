import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../Late";

export function News() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  return (
    <div className="newsPage">
      <a href="http://127.0.0.1:5173/news" className="hhref">
        <h3 className="module-title">NEWS</h3>
      </a>
      <br />
      <br />
      <div className="article-list">
        
        {posts.map((posts) => (
          <div className="article">
            <a href="http://127.0.0.1:5173/news" className="href">
            <img src={posts.src} width="628px" />
            <h1>{posts.title}</h1>
            <br />
            <h4>{posts.description}</h4>
            </a>
          </div>

        ))}
        
      </div>
    </div>
  );
}
