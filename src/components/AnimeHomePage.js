import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function AnimeHomePage() {
  const [animeList, setAnimeList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [likedAnimeList, setLikedAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/animes")
      .then((response) => {
        if (response.data) {
          setAnimeList(response.data.slice(0, 10));
          console.log(response.data); // Take top 10 results
        } else {
          console.log("Invalid response format: missing top property.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToLikedAnimeList = (anime) => {
    setLikedAnimeList((prevList) => [...prevList, anime]);
  };

  const addToWatchList = (anime) => {
    setWatchList((prevList) => [...prevList, anime]);
    setIsAdded(true);
  };

  const addToWatchLaterList = (anime) => {
    setWatchLaterList((prevList) => [...prevList, anime]);
    setIsAdded(true);
  };
  return (
    <div className="container">
      {animeList.map((anime) => (
        <Card key={anime.mal_id} className="my-4 bg-dark text-white">
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                src={anime.image}
                alt={anime.title}
                className="card-img"
              />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="card-title">{anime.title}</Card.Title>

                <div className="d-flex justify-content-center mb-3">
                  <a href={anime.link} className="btn btn-primary mb-2">
                    Watch Now
                  </a>
                </div>
                <Card.Text className="card-text">{anime.synopsis}</Card.Text>
                <ul className="list-inline">
                  {anime.genres?.map((genre) => (
                    <li key={genre.mal_id} className="list-inline-item me-3">
                      {genre.name}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-center my-3">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      addToWatchLaterList(anime);
                    }}
                    disabled={isAdded}
                    className="btn btn-secondary mx-2"
                  >
                    {isAdded ? "ENJOY" : "Add to Watch Later"}
                  </Button>

                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      addToLikedAnimeList(anime);
                    }}
                    className="btn btn-danger mx-2"
                    disabled={likedAnimeList.some(
                      (likedAnime) => likedAnime.mal_id === anime.mal_id
                    )}
                  >
                    {likedAnimeList.some(
                      (likedAnime) => likedAnime.mal_id === anime.mal_id
                    )
                      ? "Liked"
                      : "Like"}
                  </Button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AnimeHomePage;
