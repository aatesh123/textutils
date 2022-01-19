import React from 'react'
//rfce  this is used to create structure  of components
function Alert(props) {
    const capt =(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (

    //    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    //     {props.alert.type} : {props.alert.msg}
    //     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //     </div>

 props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
{props.alert.type} : {props.alert.msg}
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            
    )
}

export default Alert
