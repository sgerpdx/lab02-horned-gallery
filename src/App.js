import React from 'react';
import './App.css';
// import images from './data.js';
import HornedHeader from './HornedHeader.js';
import ImageList from './ImageList.js';
import YoshiEgg from './598-5981895_yoshi-egg-yoshi-egg-pixel-art-hd-png.png';


export default class HornGallery extends React.Component {
  render() {
    return (
      <div>
        <HornedHeader />
        <ImageList src={YoshiEgg} height="100" />
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
