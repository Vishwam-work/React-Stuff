import React from "react";
import Usercard from "./Usercard";

const Userlist = (props) =>{
    
    const renderList = props.user.map((user)=>{
        return (
         <Usercard user={user}/>
        )
    })
    return(
        <div className="ui celled list">
            Userlist
            {renderList}
        </div>
    )
};
export default Userlist