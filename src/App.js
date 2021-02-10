import React from 'react';
import style from './App.css';
import images from './data.js';
import HornedHeader from './HornedHeader.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';


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

  handleHornsChange = (e) => {
    this.setState({
      horns: e.target.value
    });
  }


  render() {

    // const imageTitles = images.map(image =>
    //   <option value={image.keyword} key={image.title}>{image.keyword}
    //   </option>)

    // const hornCounts = images.map(image =>
    //   <option value={image.horns} key={image.title}>{image.horns}
    //   </option>)

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
          <Dropdown currentValue={this.state.keyword}
            handleChange={this.handleKeywordChange}
            options={['horse', 'cow']} />
          {/* <select
            value={this.state.keyword}
            //replace onChange with farmed-out handleChange:
            onChange={this.handleKeywordChange}>
            {imageTitles}
          </select> */}
        </form>

        <form className="nav-filter">
          Horn Count
          <Dropdown currentValue={this.state.keyword}
            handleChange={this.handleKeywordChange}
            options={[1, 2, 3, 100]} />

          {/* <select
            value={this.state.horns}
            onChange={this.handleHornsChange}>
            {hornCounts}
          </select> */}
        </form>

        <ImageList images={filteredCreatures} />

      </div>
    );
  }
}
