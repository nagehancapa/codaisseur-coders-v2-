const initialState = {
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
    default: {
      return state;
    }
  }
};

export default reducer;
