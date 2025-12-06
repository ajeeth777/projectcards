import React from "react";
import { useParams, Link } from "react-router-dom";

function Details({ cards }) {
  const { id } = useParams();
  const card = cards.find((c) => c.id === Number(id));

  if (!card) return <h2>Card Not Found</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>{card.title}</h1>
      <img
        src={card.image}
        alt={card.title}
        style={{ width: "400px", borderRadius: "12px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{card.description}</p>

      <Link to="/">
        <button
          style={{
            padding: "10px 16px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}

export default Details;
