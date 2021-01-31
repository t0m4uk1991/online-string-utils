import React, {useState} from 'react'

function WordCounter() {
    const [textLength, setTextLength] = useState(0);
    const handleChange = event => {setTextLength(event.target.value.split(' ').filter(function(n){return n; }))}

    return (
        <div className='base64'>
            <label htmlFor="textInput">Words count: { textLength ? textLength.length : 0 }</label>
            <div>
                <textarea 
                id="textInput" 
                cols="100" 
                rows="10" 
                onChange={handleChange}/>
            </div>
        </div>
    )
}

export default WordCounter