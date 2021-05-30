import axios from "axios";

const savePosts = (allPosts) => ({ type: "STORE_POSTS", payload: allPosts });

const startLoading = () => ({ type: "START_LOADING" });
const stopLoading = () => ({ type: "STOP_LOADING" });

const newPost = (post) => ({ type: "NEW_POST", payload: post });

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/posts"
    );
    const allPosts = response.data.rows;
    dispatch(savePosts(allPosts));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (title, content) => async (dispatch, getState) => {
  try {
    const allState = getState();
    const token = allState.user.token;
    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/posts",
      { title, content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response);
    dispatch(newPost(response.data));
  } catch (error) {
    console.log(error.message);
  }
};
