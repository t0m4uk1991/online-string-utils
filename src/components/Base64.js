import React, {useState} from 'react'
import base64 from 'react-native-base64';

function Base64() {
    const [encodedText, setEncodedText] = useState('');
    const handleChange = event => setEncodedText(base64.encode(event.target.value));

    return (
        <div className='base64'>
            <label htmlFor="rawText">Raw text: </label>
            <div>
                <textarea 
                cols="100" 
                rows="10" 
                id="text2encode"
                placeholder="Enter text to encode..." 
                onChange={handleChange}/>
            </div>
            <label htmlFor="enodedText">Base64 encoded text: </label>
            <div>
                <textarea 
                cols="100" 
                rows="10" 
                readOnly
                value={ encodedText }/>
            </div>
        </div>
    )
}

export default Base64
