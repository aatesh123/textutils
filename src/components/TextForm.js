import React ,{useState} from 'react'
// rfc is for component text
//props pass
//state component belong usestate is hook 
//hooks bina classs bnaye class ke feature m help krte h

export default function TextForm(props) {
    const handleUpClick =()=>{
       let ntext=text.toUpperCase();
       setText(ntext);
       props.showalert("converted to uppercase","success")
    };

    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        };
   
    //this fucntion help to change value of  text simaltanuosly
    const handleOnChange =(event)=>{
        setText(event.target.value);
    };

    const fun= (word)=>{
          let count=0;
          let size=word.length;
          let str="";
          for(let i=0;i<size;i++ )
          {
             if(word[i]===' ' && str!=="")
             {
                count++;
                str="";
             }
             else if (word[i]===' ' && str==="")
             {
                ;
             }
             else
             {
                 str+=word[i];
             }
          }
          if(str!=="")
          count++;
          return count
    }
    //yaad rakhna
    const [text, setText] = useState(' ');
   // use state is related to this 
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
             </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handletextExtract}>Remove all Symbol</button>
            {/* <button className="btn btn-primary" onClick={handle}>reverse the word</button> */}
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p>
                {fun(text)} words and {text.split(" ").join("").length} character.
            </p>
        </div>
        </>
    )
}
