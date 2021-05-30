const initialState = {
  loading: false,
  all: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_POSTS": {
      const newPosts = action.payload;
      return {
        ...state,
        all: [...state.all, ...newPosts],
      };
    }
    case "NEW_POST": {
      //state.all => posts are stored, payload => a new post
      const oneNewPost = action.payload; // {title, content}
      return {
        ...state,
        all: [oneNewPost, ...state.all],
      };
    }
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "STOP_LOADING": {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
