import React from 'react';
import './App.css';
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


    // const creatureNodes = filteredCreatures.map(image =>
    //   <ImageList key={images.keyword} images={images} />);


    return (
      <div>
        <HornedHeader />

        {/* <ul className="zoo">
          {creatureNodes}
        </ul> */}

        <form>
          Keyword
          <select
            value={this.state.keyword}
            onChange={this.handleKeywordChange}>
            {imageTitles}
          </select>
        </form>
        <ImageList images={filteredCreatures} />

        <div>
          Keyword: {this.state.keyword}
        </div>
      </div>
    );
  }
}



























// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
