import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/posts/selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://codaisseur-coders-network.herokuapp.com/posts"
        );
        console.log(response.data.rows);

        const allPosts = response.data.rows;
        const action = { type: "STORE_POSTS", payload: allPosts };
        dispatch(action);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Codaisseur Redux Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid black", margin: 10 }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
