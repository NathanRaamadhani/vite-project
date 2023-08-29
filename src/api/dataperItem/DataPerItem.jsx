import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { render } from "react-dom";

const DataPerItem = ({ data }) => {
  


  const cardstyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 2rem",
    background: "#f8f3e8",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
    marginTop: "10px",
  };
   

  const {
    newsCategory,
    newsTitle,
    newsDescription,
    newsPreviewImage,
    newsLink,
    _id,
  } = data;

  return (
    <div style={{alignItems:"center"}}>
      <Card style={cardstyle}>
        <Card.Header color="blue" >
        <Card.Img variant="top" src={newsPreviewImage}/>
        </Card.Header>
        <Card.Body>
          <Card.Title>{newsTitle}</Card.Title>
          <Button style={{ marginTop: '10px' }} variant="primary" className="mt-3px">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DataPerItem;
