import { useState } from "react";
import { createPost } from "../store/posts/actions";
import { useDispatch } from "react-redux";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onPostSubmit = (event) => {
    event.preventDefault();
    console.log({ title, content });
    dispatch(createPost(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Post: only logged in users!</h2>
      <form onSubmit={onPostSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Content</label>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
