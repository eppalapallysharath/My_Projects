import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchExam,
  fetchExamSubmit,
  fetchFinishExam,
} from "../Redux/Actions/actions";

const Exam = () => {
  const [questionOption, setQuestionOption] = useState([])
  const [optionsData, setOptionsData] = useState()
  const [count, setCount] = useState(0);
  const { examid } = useParams();
  const examState = useSelector((state) => state.examR.examQuestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchExam(examid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forward = () => {
    setCount(count + 2);
    setQuestionOption([...questionOption, optionsData])
  };
  console.log(questionOption);

  const back = () => {
    setCount(count - 2);
  };

  const index = count;

  const submitExam = (examresultid) => {
    dispatch(fetchExamSubmit(examresultid, examid));
    handleShow();
  };

  const handleExamOptions = (e) => {
    setOptionsData(e.target.value)
   
  };
  

  const handleFinishExam = (ques_no,examResultsId) => {
    dispatch(fetchFinishExam(examid, ques_no, examResultsId, navigate));
  };

  return (
    <>
      {examState?.exam?.length > 0 ? (
        <div className="mainExamContainer">
          <div>
            <div className="examQuestions">
              <div className="examContainer">
                <h4 style={{ color: "red" }}>
                  <center>{examState?.exam[index]?.Exam?.name}</center>
                </h4>
                <div className="examQuestionDetails">
                  <p>Question No {examState.exam[index].ExamStat.ques_no}</p>{" "}
                  <p> Marks: {examState?.exam[index]?.ExamStat?.marks}</p>{" "}
                  <p>
                    Negative Marks:{" "}
                    {examState?.exam[0]?.Question?.negative_marks}
                  </p>
                </div>
                {/* Question */}
                <div className="examQues">
                  <p dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.question?.above}} />
                  <hr />
                </div>
                {/* Question options starting */}
                <div className="examQuesOption" onChange={handleExamOptions}>
                  {examState?.exam[index]?.Question?.option1 ? (<div>
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="1"
                      />
                      <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option1}} />
                    </div>
                  ) : null}
                  {examState?.exam[index]?.Question?.option2 ? (<div>
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="2"
                      />
                    <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option2}} />
                    </div>
                  ) : null}
                  {examState?.exam[index]?.Question?.option3 ? (<div>
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="3"
                      />
                    <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option3}} />
                    </div>
                  ) : null}
                  {examState?.exam[index]?.Question?.option4 ? (<div>
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="4"
                      />
                    <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option4}} />
                    </div>
                  ) : null}
                  {examState?.exam[index]?.Question?.option5 ? (
                    <div>
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="5"
                      />
                      <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option5}} />
                    </div>
                  ) : null}
                  {examState?.exam[index]?.Question?.option6 ? (
                    <div >
                      <input
                        type="radio"
                        name={examState?.exam[index]?.Question.id}
                        id={examState?.exam[index]?.Question.id}
                        value="6"
                      />
                      <p className="d-inline-block" dangerouslySetInnerHTML={{__html:examState?.exam[index]?.Question?.option6}} />
                    </div>
                  ) : null}
                  {/* Question options ending */}
                </div>
              </div>
              <div className="examButtons">
                {examState?.exam[index]?.ExamStat.ques_no > 1 ? (
                  <Button size="sm" variant="secondary" onClick={() => back()}>
                    Pervious Question
                  </Button>
                ) : (
                  <Button size="sm" variant="secondary">
                    Pervious Question
                  </Button>
                )}
                {examState?.exam[index]?.ExamStat.ques_no < 100 ? (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => forward()}
                  >
                    {" "}
                    Next Question
                  </Button>
                ) : (
                  <Button size="sm" variant="secondary">
                    Pervious Question
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="totalQuestionPaper">
            {/* <Button variant="info" size="sm" onClick={() => setShow(true)}>
              Question Paper
            </Button> */}
            &nbsp;
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                submitExam(examState?.exam[index]?.ExamStat?.exam_result_id);
              }}
            >
              Submit Exam
            </Button>
          </div>
        </div>
      ) : (
        <h3>Loading....</h3>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finish Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you wish to submit and close the Exam ?Once you submit, you will
          not be able to review the Exam.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>{
              handleFinishExam(examState?.exam[index]?.ExamStat?.ques_no, examState?.exam[index]?.ExamStat?.exam_result_id)
            }
            }
          >
            Finish Exam
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {Object.keys(examState)?.length === 0 ? (
        <Modal>Loading...</Modal>
      ) : (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {examState?.exam[0]?.Exam?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {examState?.exam?.map((q, index) => (
                <div key={index} className="exam-card">
                  <div className="exam-card-ins">
                    <p>Question No {index + 1}</p>
                    <p> Marks: {q?.ExamStat?.marks}</p>
                    <p>Negative Marks: {q?.Question?.negative_marks}</p>
                    <hr />
                  </div>
                  <div>
                    <div>
                      <h6>Question: {q.Question?.question?.above}</h6>
                    </div>
                    <div className="exam-option">
                      {q?.Question?.option1 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option1}
                        </p>
                      ) : null}
                      {q?.Question?.option2 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option2}
                        </p>
                      ) : null}
                      {q?.Question?.option3 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option3}
                        </p>
                      ) : null}
                      {q?.Question?.option4 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option4}
                        </p>
                      ) : null}
                      {q?.Question?.option5 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option5}
                        </p>
                      ) : null}
                      {q?.Question?.option6 ? (
                        <p>
                          <input
                            type="radio"
                            name={q.Question.id}
                            id={q.Question.id}
                          />{" "}
                          {q?.Question?.option6}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      )} */}
    </>
  );
};

export default Exam;
