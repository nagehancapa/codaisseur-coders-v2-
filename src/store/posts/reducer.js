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
