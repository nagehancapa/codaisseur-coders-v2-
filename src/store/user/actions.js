import axios from "axios";

const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

const setProfile = (userData) => ({
  type: "SET_PROFILE",
  payload: { profile: userData },
});

export const signup = (name, email, password) => async (dispatch, getState) => {
  try {
    console.log("params in thunk", { name, email, password });
    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/signup",
      {
        name: name,
        email: email,
        password: password,
      }
    );
    const token = response.data.jwt;
    dispatch(setToken(response.data.jwt));

    console.log("signup done, now profile");
    const profileResponse = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(profileResponse);
    dispatch(setProfile(profileResponse.data));
  } catch (error) {
    console.log(error.message);
  }
};
