import React, { Component } from "react";
import Search from "./components/Search"; // Search Component
import YTSearch from "youtube-api-search"; // package for searching YouTube , Find more on youtube-api-search npm.
import ListItem from "./components/List"; // List Component
import Details from "./components/Details"; // Video Details component
import Header from './components/Header'; //Bootstrap navbar
// =================YOUTUBE API KEY======================
const API_KEY = "AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";
// ======================================================
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Selena Gomez - Wolves"); // Sets the inital search and video value.
  }

  videoSearch(searchTerm) {
    // Searching functionality.
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      //Takes the provided API key and sets the term sent by the searchbar to the data.

      this.setState({
        videos: data, // Puts the data coming from the call in the videos state array.
        selectedVideo: data[0] //Selects the first coming video from the call.
      });
    });
  }
  render() {
    return (
      <div>
        <Header/>
        {/* Search component , takes the Term and sets it as the VideoSearch in the state */}
        <Search
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        {/* Details component, takes the first coming video from the API */}
        <Details video={this.state.selectedVideo} />
        {/* List of videos component, sets the new selected video as the "selectedVideo" in the state */}
        <ListItem
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
