import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase is clicked: '+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted into lowercase!', 'success');
    }
    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared!', 'success');
    }
    const handleCapClick = () => {
        let newText = text.toLowerCase().split(' ');
        for (let i = 0; i < newText.length; i++) {

            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);

        }
        setText(newText.join(' '));
        props.showAlert('Capitalized first letters!', 'success');
    }
    const reversed = () => {
        let splitWord = text.split("");

        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords

        setText(newText);
        props.showAlert('Converted to reverse order!', 'success');
    };

    // const handleCopy = () => {
    //     var text = document.getElementById('myBox');
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert('Text copied!', 'success');
    // }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Extra spaces removed!', 'success');
    }

    const handleOnChange = (event) => {
        // console.log('handleOnChange is clicked ' + text)
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"
                        style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1  my-2" onClick={handleUpClick}> Convert To Uppercase </button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}> Convert To Lowercase </button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleClrClick}> Clear Text </button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleCapClick}> Capitalize </button>
                <button className="btn btn-primary mx-1 my-2" onClick={reversed}> Reverse Text </button>
                {/* <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button> */}
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Space </button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.0032 * text.split(' ').length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here.'}</p>
            </div>
        </>
    )
}
