import React from "react";
import user from "../images/user.png"
const Usercard = (props) =>{
    const {name,email} = props.user
    return(
        <div className="item">
            <img src={user} alt="user" className="ui avatar image" />
        <div className="content">
            <div className="header">
                {name}
            </div>
                <div>{email}</div>
        <i style={{color:"red"}} className="trash alternate outline icon"></i>
        </div>
    </div>
    )
}
export default Usercard