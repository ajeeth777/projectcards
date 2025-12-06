import React from "react";
import "./Card.css";
import Interior from "./interior";
import { useNavigate } from "react-router-dom";

function Card({ title, description, image, interior, index, id }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <Interior text={interior} index={index} />

        <h3 className="card-title">{title}</h3>

        <p className="card-description">{description}</p>
        <button
          className="read-more-btn"
          onClick={() => navigate(`/details/${id}`)}
        >
          Read More →
        </button>
      </div>
    </>
  );
}

export default Card;
