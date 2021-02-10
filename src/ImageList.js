import React from 'react';
import ImageItem from './ImageItem.js';
import style from './ImageList.css';


export default class ImageList extends React.Component {
    render() {

        const imageListItem = this.props.images.map(image => <ImageItem image={image} />)

        return (
            <ul className="list-area">
                {imageListItem}
            </ul>

        )
    }
}
