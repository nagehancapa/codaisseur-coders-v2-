import axios from "axios";

const savePosts = (allPosts) => ({ type: "STORE_POSTS", payload: allPosts });

const startLoading = () => ({ type: "START_LOADING" });

const stopLoading = () => ({ type: "STOP_LOADING" });

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
