import React, { Component } from 'react'

export class Length extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textLength: 0
        };
    }

    handleChange = event => {this.setState({textLength : event.target.value.length})}

    render() {
        return (
            <div className='base64'>
                <h1> Products </h1>
                <label>text length : { this.state.textLength }</label>
                <div>
                    <textarea onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}

export default Length