import React from 'react';
import style from './Dropdown.css';
//import images from './data.js';



export default class Dropdown extends React.Component {
    render() {

        return (
            <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}>
                {
                    this.props.options.map(
                        creatureItem =>
                            <option value={creatureItem}> {creatureItem}
                            </option>
                    )
                }

            </select>

        )
    }
}
