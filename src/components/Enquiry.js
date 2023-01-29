import React, {useState} from 'react'

export default function Enquiry(props) {
    const handleComment = ()=>{
        console.log("Submit button is clicked");
        setText("Thank you for contact us");
    }
    const handleOnChange = (event)=>{
        console.log("onChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('Hi, I am Harish Khangar');
    return (
        <>
        <div className="container my-3" style={{backgroundColor : props.mode==='light'?'white':'#162b50'}}>
        <h2 style={{color : props.mode==='light'?'black':'white'}}>Contact Us</h2>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color : props.mode==='light'?'black':'white'}}>Email Address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color : props.mode==='light'?'black':'white'}}>Comments</label>
            <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={handleOnChange} rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleComment}>Submit</button>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h3>Your Enquiry</h3>
            {text}
        </div>
        </div>
        </>
    )
}
