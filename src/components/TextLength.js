import React, {useState} from 'react'

function SymbolsCounter() {
    const [textLength, setTextLength] = useState(0);
    const handleChange = event => {setTextLength(event.target.value.length)}

    return (
        <div className='base64'>
            <label htmlFor="textInput">Text length : { textLength }</label>
            <div>
                <textarea  
                cols="100" 
                rows="10" 
                id="textInput"
                onChange={handleChange}/>
            </div>
        </div>
    )
}

export default SymbolsCounter