import React from "react";
import { Link } from "react-router-dom";

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
    <div className="card">
      <img src={newsPreviewImage} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{newsTitle}</h5>
        <Link to={`/news/${_id}`}>
          <button className="btn btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
};
export default DataPerItem;
