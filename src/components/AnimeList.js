import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

function AnimeList() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setAnimeData(data.anime));
  }, []);

  return (
    <div className="container">
    <Row noGutters>
      {animeData.map((anime) => (
        <Col key={anime.title} className="mb-3" md={4}>
          <Card className="h-100 bg-dark text-white">
            <Link to={`/${anime.title}`}>
              <Card.Img variant="top" src={anime.image} alt={anime.title} />
            </Link>
            <Card.Body>
              <Card.Title className="text-white">{anime.title}</Card.Title>
              <ul className="list-inline">
                {anime.genre.map((genre) => (
                  <li key={genre} className="list-inline-item">
                    {genre}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  )}

export default AnimeList;