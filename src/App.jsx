import React from "react";
import Card from "./card";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./details";

function App() {
  const cards = [
    {
      id: 1,
      title: "Mid-century-Mordern",
      description:
        "Midcentury Modern. Though it has recently become a catchall term for anything 20th-century,",
      image: "/images/mid-century-modern.jpg",
      interior: "mordern",
    },
    {
      id: 2,
      title: "Minimalism",
      description:
        "minimalism is an art movement that had emerged in the post-World War. ",
      image: "/images/minimal.jpg",
      interior: "minimum",
    },
    {
      id: 3,
      title: "Scandinavian",
      description:
        "Scandinavian style is known for its simplicity, functionality, and connection to nature. ",
      image: "/images/scandi.avif",
      interior: "simple",
    },
    {
      id: 4,
      title: "eclectic ",
      description:
        "The eclectic interior design style, incorporates elements from various styles.",
      image: "/images/eceltric.jpg",
      interior: "style",
    },
    {
      id: 5,
      title: "Farmhouse",
      description:
        "Farmhouse style interior design pairs well with Industrial, Shabby Chic, Coastal, and Rustic decor.",
      image: "/images/farmhouse.webp",
      interior: "traditional",
    },
    {
      id: 6,
      title: "Mediterranean",
      description:
        "Mediterranean interior design invokes the warm, sun-drenched colors of the region.",
      image: "/images/medi.webp",
      interior: "warm",
    },
    {
      id: 7,
      title: "Coastal",
      description:
        "Coastal. Inspired by the beach and characterized by light colors, natural materials, and nautical accents.",
      image: "/images/coastal.webp",
      interior: "colors",
    },
    {
      id: 8,
      title: "ArtDeco",
      description:
        "The Art Deco style is inspired by French art from the 1920's. This style explores symmetry and curved lines.",
      image: "/images/art.jpg",
      interior: "art",
    },
    {
      id: 9,
      title: "Maximalism",
      description:
        "Maximalist style interior design is the antithesis to minimalist style interior design,wide range of colors and patterns.",
      image: "/images/maxi.webp",
      interior: "maximum",
    },
    {
      id: 10,
      title: "Industrial Design",
      description:
        "Industrial Interior Design. In the world of interior design styles, Industrial is another design style that deserves a spotlight.",
      image: "/images/indus.jpg",
      interior: "industrail",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page with all cards */}
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              {cards.map((item, index) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  interior={item.interior}
                  index={index}
                />
              ))}
            </div>
          }
        />

        {/* Details page */}
        <Route path="/details/:id" element={<Details cards={cards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
