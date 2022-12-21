import React from "react";
import ewinlogo from "../Media files/ewin.png";
import { Card } from "react-bootstrap";
import "./index.css"

export const Home = () => {
  return (

      <div>
        <div className="home-container">
          {/* <div> */}
            {/* <div> */}
              <img src={ewinlogo} alt="logo" />
            {/* </div> */}
            {/* <div> */}
              <p>
                Welcome to <b>MyWin</b>
              </p>
              <p>
                Here you can access a variety of features and functionalities,
                as well as a wealth of industry information and insights to
                impact your business outcomes.
              </p>
            {/* </div> */}
          {/* </div> */}
        </div>
        <div className="p-3">
          <Card className="text-center w-50 m-3">
            <Card.Body>
              <Card.Title>myProjects</Card.Title>
              <Card.Text>
                Keep your customers engaged and informed on all projects
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center w-50 m-3">
            <Card.Body>
              <Card.Title>myInstallations</Card.Title>
              <Card.Text>
                Delight your customers with an excellent digital experience
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};
