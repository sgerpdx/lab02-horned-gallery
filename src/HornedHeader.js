import React from 'react';
import images from './data.js';

export default class HornedHeader extends React.Component {
    render() {

        const imageTitles = images.map(image =>
            <option value={image.keyword} key={image.title}>{image.keyword}
            </option>)

        return (
            <>
                <h2>Ye Gallerie of Horn'ed Creatures</h2>
                <form>
                    Keyword
                    <select>{imageTitles}</select>
                </form>
            </>
        );
    }
}