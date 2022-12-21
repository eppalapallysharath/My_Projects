import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ExamFeedback = () => {
  const examState = useSelector((state) => state.examR.examQuestions);
  console.log(examState.ExamStat.exam_result_id)
  const navigate = useNavigate();

  return (
    <>
      <Card className="d-block mx-auto mt-5 " style={{width:"500px"}} >
        <Card.Header>Thank you for using the test</Card.Header>
        <Card.Body className="d-block">
          <Card.Text>
            <label>
              <small>1. The test instructions were</small>
            </label>{" "}
            <div className="d-inline m-4 ">
            <select id="ins">
              <option value="Large Clear">Large Clear</option>
              <option value="Medium Clear">Medium Clear</option>
              <option value="Not Clear">Not Clear</option>
            </select>
            </div>
          </Card.Text>

          <Card.Text>
            <label>
              <small>2. Language option was</small>
            </label>{" "}
            <div className="d-inline m-5">
            <select id="ins">
              <option value="Large Clear">Large Clear</option>
              <option value="Medium Clear">Medium Clear</option>
              <option value="Not Clear">Not Clear</option>
            </select>
            </div>
          </Card.Text>
          <Card.Text>
            <label>
              <small>3. Overall test experience</small>
            </label>{" "}
            <div className="d-inline m-5">
            <select id="ins">
              <option value="Large Clear">Good</option>
              <option value="Best">Best</option>
              <option value="Not Good">Not Good</option>
            </select>
            </div>
          </Card.Text>
          <button className="btn btn-secondary btn-sm m-1">Submit</button> 
          <button className="btn btn-secondary btn-sm m-1" onClick={()=>navigate("/examResults")} >Go to Results</button>
        </Card.Body>
      </Card>
    </>
  );
};
