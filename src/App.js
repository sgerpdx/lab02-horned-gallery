import React from 'react';
import style from './App.css';
import images from './data.js';
import HornedHeader from './HornedHeader.js';
import ImageList from './ImageList.js';


export default class HornGallery extends React.Component {

  state = {
    keyword: '',
    horns: '',
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }


  render() {

    const imageTitles = images.map(image =>
      <option value={image.keyword} key={image.title}>{image.keyword}
      </option>)


    const filteredCreatures = images.filter((image) => {
      if (!this.state.keyword) return true;
      if (image.keyword === this.state.keyword) return true;
      return false;
    });


    return (
      <div>
        <HornedHeader />
        <form className="nav-filter">
          Keyword
          <select
            value={this.state.keyword}
            onChange={this.handleKeywordChange}>
            {imageTitles}
          </select>
        </form>
        <ImageList images={filteredCreatures} />

      </div>
    );
  }
}
