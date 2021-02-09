import React, { Component } from 'react';

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                {this.props.src}
            </div>
        )
    }
}
