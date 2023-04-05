import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { BsHouse } from "react-icons/bs";
import "./SingleAnime.css";

function SingleAnime() {
  const { title } = useParams();
  const [anime, setAnime] = useState(null);

  const handleLogin = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    // Check if user is authenticated on component mount

    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const animeData = data.anime.find((anime) => anime.title === title);
        setAnime(animeData);
      });
  }, [title]);

  if (!anime) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-3">
        <Button
          onClick={() => (window.location.href = "/")}
          className="my-button"
        >
          <BsHouse className="" size={18} />
        </Button>
      </div>
      <Card className="my-4 bg-dark text-white">
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img src={anime.image} alt={anime.title} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{anime.title}</Card.Title>

              <div className="d-flex justify-content-center mb-3">
                <a href={anime.link} className="btn btn-primary mb-2">
                  Watch Now
                </a>
              </div>
              <Card.Text>{anime.synopsis}</Card.Text>
              <ul className="list-inline">
                {anime.genre.map((genre) => (
                  <li key={genre} className="list-inline-item me-3">
                    {genre}
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-center my-3">
                <Button
                  variant="outline-secondary"
                  className="me-2"
                  onClick={handleLogin}
                >
                  Login to Add to Watch Later
                </Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SingleAnime;
