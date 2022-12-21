import axios from "axios";
//login action
export const userLogin = (data) => {
  return {
    type: "USER_LOGIN",
    payload: data,
  };
};

//logout action

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}


//login api call
export const fetchLogin = (loginData, navigate) => {
  return async (dispatch) => {
    await axios
      .post("http://52.139.224.15:9191/account/login/", loginData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(userLogin(response.data));
          sessionStorage.setItem("refresh_token",  response.data.refresh_token)
          sessionStorage.setItem("access_token", response.data.access_token)
          navigate("/home")
        }
      })
      .catch((error) => console.log(error));
  };
};
