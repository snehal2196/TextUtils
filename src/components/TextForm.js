import React, { useState } from 'react'
// import Typewriter from 'typewriter-effect';

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
        props.showAlert('Converted to lowercase!', 'success');
    }
    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Cleared text!', 'success');
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
        props.showAlert('Reversed text!', 'success');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied text!', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert('Removed extra spaces!', 'success');
    }

    const handleOnChange = (event) => {
        // console.log('handleOnChange is clicked ' + text)
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 style={{height:'70px'}}> {props.Typewriter}</h1>
                  
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"
                        style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#13466e' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1  my-2" onClick={handleUpClick}> Convert To Uppercase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}> Convert To Lowercase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClrClick}> Clear Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCapClick}> Capitalize </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={reversed}> Reverse Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Space </button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.0032 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here.'}</p>
            </div>
        </>
    )
}
