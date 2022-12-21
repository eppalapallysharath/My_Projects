import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./index.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <div className="home-card-main">
          <Card>
            <Card.Body>
              <div>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/free-black-icon.svg"
                  className="home-exam-img"
                  alt="freePic"
                />
              </div>
              <div className="home-card-text">
                <Card.Title>EXPLORE FOR FREE </Card.Title>
                <Card.Text>
                  A. 3 Years Old Question Paper Civil services (Prelims)
                </Card.Text>
                <Card.Text>
                  B. Limited UPSC Old Question Papers ( CDS, Geo
                  Scientists(Pre), CISF, CAPF, NDA, Engineering Services (Pre)
                  and SO)
                </Card.Text>
                <Card.Text>
                  C. Limited questions from Basics of School NCERT ( 6th to 10th
                  Class)
                </Card.Text>
              </div>
            </Card.Body>
            <div className="home-card-button">
              <Button
                variant="info"
                size="sm"
                onClick={() => navigate("/freeExam")}
              >
                START NOW
              </Button>
            </div>
          </Card>
          <Card>
            <Card.Body>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7437/7437178.png"
                  className="home-exam-img"
                  alt="freePic"
                />
              </div>
              <div>
                <Card.Title>PREMIUM PACKAGE </Card.Title>
                <Card.Text>
                  A. 26 Years Old Question Paper Civil services (Prelims)
                </Card.Text>
                <Card.Text>
                  B. 2014-2020 Other UPSC Old Question Papers ( CDS, Geo
                  Scientists(Pre), CISF, CAPF, NDA, Engineering Services (Pre)
                  and SO)
                </Card.Text>
                <Card.Text>
                  C. Comprehensive Basics of School NCERT ( 6th to 10th Class){" "}
                </Card.Text>
              </div>
            </Card.Body>
            {/* <Card.Subtitle className="mb-2 text-muted">Expiry: {premiumState.expiry}</Card.Subtitle> */}
            <div className="home-card-button">
              <Button
                variant="info"
                size="sm"
                onClick={() => navigate("/premiumExam")}
              >
                START NOW
              </Button>
            </div>
          </Card>
        </div>
      </>
      {/* ) : ( */}
      {/* <h1>No Data Found</h1> */}
      {/* )} */}
    </>
  );
};
