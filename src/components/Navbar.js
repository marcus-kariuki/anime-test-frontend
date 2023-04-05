import React from 'react';
import { Navbar, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      searchText: '',
      searchResults: [], // This will hold the search results
      allAnimes: [ /* Add all available animes here */ ]
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSearch() {
    const { allAnimes, searchText } = this.state;
    const filteredAnimes = allAnimes.filter(anime =>
      anime.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ searchResults: filteredAnimes });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn, searchText, searchResults } = this.state;

    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="./">Anime King</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <div className="d-flex align-items-center">
              <Nav className="mr-auto">
                {/* Add any additional links you want to display here */}
              </Nav>
            </div>
            <div className=''>
            <Nav>
              {isLoggedIn ? (
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
