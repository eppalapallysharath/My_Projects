import React, { useEffect } from "react";
import { Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import freepic from "../Media Files/free.png";
import permiunmpic from "../Media Files/primium.png";
import { examPackage, fetchPayment } from "../Redux/Actions/actions";

export const Packages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const packageState = useSelector((state) => state.examR.packageExam);
  useEffect(() => {
    dispatch(examPackage());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h4>Packages</h4>
        <hr />
        <div className="d-flex">
          <div >
            <img
              src={freepic}
              alt="freepic"
              style={{ width: "190px", height: "170px" }}
            />
            <h4>Free Package</h4>
            <p>
              <strong>Exams: </strong>
             <i> Old question papers UPSC Civils (Pre) 2018 | 2019 | 2020 | Limited UPSC other than Civils CAPF 2020 |CDS1 2020 | Geo Scientist 2020 | NDA 2020 | SO 2020 | Limited NCERT | </i>
            </p>
            <p>₹ 0</p>
            <Button size="sm" variant="dark" onClick={()=> navigate("/freeExam")} >Start Prepare Now</Button>
          </div>
          <div>
            <img
              src={permiunmpic}
              alt="permiunmpic"
              style={{ width: "190px", height: "170px" }}
            />
            <h4>Premium Package</h4>
            <p>
              <strong>Exams:</strong> <i>26 Years Old Upsc prelims paper from 1995 - 2017 |CAPF 2014 | CAPF 2015 | CAPF 2016 | CAPF 2017 |Engineering services 2015 | Engineering services 2016 | Engineering services 2017 |NDA 2015 | NDA 2016 | NDA 2017 1|  Comprehensive NCERT | many more ....</i>
            </p>
            <p>₹ <del>{packageState?.data?.amount_year}</del> {packageState?.data?.amount}</p>
            <Button size="sm" variant="dark" onClick={()=>dispatch(fetchPayment(navigate))} >Buy Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};
