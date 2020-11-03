import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  state = {images: null};
  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 
          'Client-ID YOzCyFanRQh5q8jT3uBmVzp8ssyvlR7tCGVonXkwdEo'
      }
    });
    console.log(this);
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar 
        onSearchSubmit={this.onSearchSubmit}
        guesswhtIam="Im the propsobject"
        />
        Found: {this.state.images.length} images
      </div>
      );
  }
}

export default App;