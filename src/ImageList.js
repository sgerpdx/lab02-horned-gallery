import React from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends React.Component {
    render() {

        const imageListItem = this.props.images.map(image => <ImageItem image={image} />)

        return (
            <ul>
                {imageListItem}
            </ul>

        )
    }
}
