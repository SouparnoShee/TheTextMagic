// We made a textarea to understand state in javascript
// In import useState has been imported
import React, { useState } from 'react'

export default function TextForm(props) {
    const HandleUpClick = () => {
        // console.log("Upper case is clicked")
        let newtext = Text.toUpperCase();
        setText(newtext)
        props.Show("Converted to Uppercase","success")
    }
    const HandleBelowClick = () => {
        let newtext = Text.toLowerCase();
        setText(newtext)
        props.Show("Converted to LowerCase","success")
    }
    const HandleClearClick = () => {
        let newtext = "";
        setText(newtext)
        props.Show("Text has been cleared","success")
    }
    const HandleCopy =()=>{
        navigator.clipboard.writeText(Text);
        props.Show("Text has been copied","success")
    }
    const HandleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    // State has been set as textvariable which is default as given in useState and we can modify or update the state anywhere by using setText, we cannot update it by Text variable.
    const [Text, setText] = useState('Enter Text here');
    return (
        <>
            {/* for the style written below in different places-- we first make the style which is javascript inside that we give another bracket which is object, there we give background or color the same ternary operator that says if the mode (the prop for dark or light we set earlier) is light make the fonts white and background black and vice versa */}
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    {/* Handle on change is given so that we could handle the value which is a state, and could type */}
                    <textarea className="form-control" value={Text} onChange={HandleOnChange} id="mybox" rows="12" style={{background:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className='btn btn-primary mx-3 my-2' disabled={Text.length===0} onClick={HandleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-3 my-2' disabled={Text.length===0} onClick={HandleBelowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-3 my-2' disabled={Text.length===0} onClick={HandleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-3 my-2' disabled={Text.length===0} onClick={HandleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Get your text summary here</h1>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {Text.length} Characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes Takes to Read Your text for an average person </p>
                <p>{Text.split(/\n/).length} Number of Para</p>
                <h1 className="my-3">Preview</h1>
                <p>{Text.length>0?Text:'Enter some text in above box to preview it here'}</p>
            </div>
        </>
    )
}



// on the onclick function we use the setText to update the state on click
