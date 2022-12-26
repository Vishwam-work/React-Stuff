import React from "react";

class Addcontact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("Please enter the details")
            return
        }
        this.props.addUserhandler(this.state);
        this.setState({name:"",email:""})
        console.log(this.state)
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="Name" value={this.state.name} onChange={(e) => {
                            this.setState({ name: e.target.value })
                        }} />
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="email" name="Email" value={this.state.email} onChange={(e) => {
                            this.setState({ email: e.target.value}) 
                        }}/>
                    </div>
                    <button type="submit" className="ui button blue">Add </button>
                </form>
            </div>
        )
    }
}
export default Addcontact