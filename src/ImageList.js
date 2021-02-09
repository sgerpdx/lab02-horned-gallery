import React, { Component } from 'react';
import GreenFlask from './dotpict_20210204_003409.png';

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                <img src={GreenFlask} alt="green flask" height="100" />
            </div>
        )
    }
}
