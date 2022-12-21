import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { freeExamAction } from "../Redux/Actions/actions";

export const FreeExams = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const freeExamState = useSelector((state) => state.examR.freeExam);
  console.log(freeExamState);
  useEffect(()=>{  try {
    const headers = {
      tokenu: sessionStorage.getItem("Token"),
      id: sessionStorage.getItem("Id"),
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
    }

    axios.post("http://test.e-prathibha.com/apis/test_free_exam", {}, {
      headers: headers,
    }
    )
    .then(response=> {console.log(response);
      if(response.data.status === 200) {
      dispatch(freeExamAction(response.data.data))
      }
      else{
        console.error(response.data)
      }
    })
  } catch(error) {
    console.log(error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }},[])
  return (
    <>
      {freeExamState?.exams?.length > 0 ? (
        <div className="exam-main-container">
          <h2>PRATHIBHA UPSC Civils Pre-APP</h2>
          <h3>{freeExamState?.exams?.length} Years Previous Papers</h3>
          <p>
            <b>
              ({freeExamState?.exams?.length} Years Old Question Paper Civil
              services (Prelims))
            </b>
          </p>
          <div>
            {freeExamState?.exams.map((exam, index) => (
              <div key={index} >
                <h3>{Object.keys(exam)[0]}</h3>
                <p>
                  {exam?.attempted}/{exam?.total} Attempted
                </p>
                <div className="mainCard" >
                  {Object.values(exam)[0].map((eachExamPaper, index) => (
                    <div key={index} className="examCard" onClick={()=>{
                      let examId = eachExamPaper.Exam.id
                     navigate(`/exam/examId/${examId}`)}} >
                      <h4>{eachExamPaper?.Exam?.name}</h4>
                      <h4>Upsc prelims paper 1</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};
