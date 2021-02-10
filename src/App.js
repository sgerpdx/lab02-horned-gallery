import React from 'react';
import './App.css';
import images from './data.js';
import HornedHeader from './HornedHeader.js';
import ImageList from './ImageList.js';



export default class HornGallery extends React.Component {
  render() {
    console.log(images);
    return (
      <div>
        <HornedHeader />
        <ImageList images={images} />
      </div>
    );
  }
}


// const imageItems = images.map(image =>
//   <img src={image.url} />)


























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
