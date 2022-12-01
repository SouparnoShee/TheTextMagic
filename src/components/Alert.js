import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div style={{height:"50px"}}>
       { props.Alertmsg&&<div>
            {/* Below is given props of Alertmsg type and msg which are being used in different components by using that function-showmsgalert and according to different value it returns it type and message thats it */}
            <div className={`alert alert-${props.Alertmsg.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.Alertmsg.type)}</strong>{props.Alertmsg.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>}
        </div>
    )
}

export default Alert
