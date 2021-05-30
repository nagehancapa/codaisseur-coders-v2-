import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getLoading } from "../store/posts/selectors";
import { fetchPosts } from "../store/posts/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Codaisseur Redux Posts</h1>
      <div>
        {loading
          ? "Loading ..."
          : posts.map((post) => (
              <div
                key={post.id}
                style={{ border: "1px solid black", margin: 10 }}
              >
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
