import React, { Component } from 'react'
import WordCounter from '../components/WordCounter';

export class WordCounterPage extends Component {
    render() {
        return (
            <div className="page">
                <WordCounter/>
            </div>
        )
    }
}

export default WordCounterPage