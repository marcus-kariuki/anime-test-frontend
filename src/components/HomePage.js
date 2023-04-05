import React from "react";
import AnimeHomePage from "./AnimeHomePage";
import video from "../assets/home-video.mp4"; // import your video file

function Homepage() {
    function handleLogout() {
        fetch('http://localhost:4000/logout', {
          method: 'POST',
          credentials: 'include'
        })
        .then(response => {
          if (response.ok) {
            // If the logout was successful, redirect the user to the login page
            window.location.href = '/';
          } else {
            // If there was an error logging out, display an error message to the user
            console.error('Failed to log out:', response.statusText);
          }
        })
        .catch(error => {
          console.error('An error occurred while logging out:', error);
        });
      }
      
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Anime-King</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <button className="btn btn-outline-primary" type="button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Header with video background */}
      <header>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </header>

      {/* Rest of the page content */}
      <div>
        <AnimeHomePage/>
      </div>
    </div>
  );
}

export default Homepage;
