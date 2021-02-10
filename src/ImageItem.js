import React from 'react';
import style from './ImageItem.css';


export default class ImageItem extends React.Component {
    render() {

        return (
            <li className="creature" key={this.props.image.title} >
                <img src={this.props.image.url} height="100" />
                <p>{this.props.image.title}</p>
                <p>{this.props.image.horns}</p>
                <p className="descriptive-block">{this.props.image.description}</p>
            </li>
        )
    }
}
