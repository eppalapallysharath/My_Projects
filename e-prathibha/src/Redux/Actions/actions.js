import axios from "axios";

//login Action
export const loginUser = (data) => {
  return {
    type: "LOGIN_USER",
    payload: data,
  };
};

//signup Action
export const signUpAction = (data) => {
  return {
    type: "USER_SIGNUP",
    payload: data,
  };
};

//verify email
export const verifyEmail = (data) => {
  return {
    type: "VERIFY_EMAIL",
    payload: data,
  };
};

//freeExam Action
export const freeExamAction = (data) => {
  return {
    type: "FREE_EXAM",
    payload: data,
  };
};

//premium Exam Action
export const premiumExamAction = (data) => {
  return {
    type: "PREMIUM_EXAM",
    payload: data,
  };
};

//start exam action
export const startExam = (data) => {
  return {
    type: "START_EXAM",
    payload: data,
  };
};

//submit exam action
export const examSubmit = (data) => {
  return {
    type: "EXAM_SUBMIT",
    payload: data,
  };
};

//finish exam action
export const examFinish = (data) => {
  return {
    type: "EXAM_FINISH",
    payload: data,
  };
};

//exam package action
export const packageExam = (data) => {
  return {
    type: "PACKAGE_EXAM",
    payload: data,
  };
};

//payment gateway action

export const paymentGateway = (data) => {
  return {
    type: "PAYMENT_GATEWAY",
    payload: data,
  };
};

export const removeQuestionPaper = () => {
  return {
    type: "REMOVE_QUESTION_PAPER",
  };
};

// login api call
export const fetchLogin = (loginData, navigate) => {
  return (dispatch) => {
    axios
      .post("http://test.e-prathibha.com/apis/login", loginData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          dispatch(loginUser(response.data));
          sessionStorage.setItem("Token", response.data.data.Token);
          sessionStorage.setItem("Id", response.data.data.Id);
          console.log(response.data.data.Message);
          alert(response.data.data.Message);
          navigate("/Home");
        } else {
          alert(response.data.data);
          console.log(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  };
};

//signup api call
export const fetchSignup = (registerData, navigate) => {
  return (dispatch) =>
    axios
      .post("http://test.e-prathibha.com/apis/register", registerData)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          dispatch(signUpAction(response.data));
          console.log(response.data);
          alert(response.data.data);
          navigate("/signUp/verifyEmail");
        } else {
          console.log(response.data.data);
          alert(response.data.data);
        }
      })
      .catch((error) => console.log(error));
};

//verify api call
export const fetchVerificationCode = (verifyCode, navigate) => {
  return (dispatch) => {
    axios
      .post("http://test.e-prathibha.com/apis/verifyEmail", verifyCode)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          dispatch(verifyEmail(response.data));
          console.log(response.data.data.message);
          alert(response.data.data.message);
          navigate("/login");
        } else {
          console.log(response.data.data);
          alert(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  };
};

//exam api
export const fetchExam = (examid) => {
  return (dispatch) => {
    if (examid) {
      const headers = {
        tokenu: sessionStorage.getItem("Token"),
        id: sessionStorage.getItem("Id"),
        server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      };
      axios
        .post(
          `http://test.e-prathibha.com/apis/start_exam?examId=${examid}`,
          {},
          { headers: headers }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(startExam(res.data.data));
        })
        .catch((error) => console.log(error));
    } else {
      console.log("erroe");
    }
  };
};

//exam submit api

export const fetchExamSubmit = (examid, examresultid) => {
  return (dispatch) => {
    const headers = {
      tokenu: sessionStorage.getItem("Token"),
      id: sessionStorage.getItem("Id"),
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
    };
    axios
      .post(
        "http://test.e-prathibha.com/apis/submit",
        {},
        { headers: headers },
        { examId: examid, examresultId: examresultid }
      )
      .then((response) => {
        console.log("submit exam", response.data);
        dispatch(examSubmit(response.data));
      })
      .catch((error) => console.log(error));
  };
};

// exam finish
export const fetchFinishExam = (examid, ques_no, examResultsId, navigate) => {
  return (dispatch) => {
    const headers = {
      tokenu: sessionStorage.getItem("Token"),
      id: sessionStorage.getItem("Id"),
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
    };
    axios
      .post(
        "http://test.e-prathibha.com/apis/finishExam",
        { examId: examid, qno: ques_no },
        { headers: headers }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          dispatch(examFinish(response.data));
          alert(response.data.data)
          navigate(`/examResults/${examResultsId}`);
        } else {
          alert("Error occurred in exam submission");
        }
      })
      .catch((error) => console.log(error));
  };
};

// package api

export const examPackage = () => {
  return (dispatch) => {
    const headers = {
      tokenu: sessionStorage.getItem("Token"),
      id: sessionStorage.getItem("Id"),
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
    };
    axios
      .post("http://test.e-prathibha.com/apis/packageDetails", {}, { headers })
      .then((response) => {
        if (response.data.status === 200) {
          dispatch(packageExam(response.data));
        }
      })
      .catch((error) => console.log(error));
  };
};

//payment api

export const fetchPayment = (navigate) => {
  return (dispatch) => {
    const headers = {
      tokenu: sessionStorage.getItem("Token"),
      id: sessionStorage.getItem("Id"),
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
    };
    axios
      .post(
        "http://test.e-prathibha.com/apis/test_paymentGateway",
        { packagearr: { 8: "1" }, packagetype: "RAZORPAY", year: "" },
        { headers }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          dispatch(paymentGateway(response.data));
          navigate("/payment")
        }
      })
      .catch((error) => console.log(error));
  };
};

//exam results api

export const fetchExamResults = (examResultId) => {
  return (dispatch) => {
    const headers = {
    tokenu: sessionStorage.getItem("Token"),
    id: sessionStorage.getItem("Id"),
    server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
  };
  axios
    .post("http://test.e-prathibha.com/apis/exam_result", {}, { headers }, {id:examResultId})
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error));
};
}

