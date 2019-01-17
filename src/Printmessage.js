import React, {Component} from 'react';

class Printmessage extends Component {
    constructor(){
        super();
        this.state = {
            message : "Hemesh"
        }
        this.updateMsg = this.updateMsg.bind(this);
    }
    updateMsg(){
        this.setState({
            message : "updated!!"
        })
    }
    render(){
        return(
            <div>
            {this.state.message}
            <button onClick={this.updateMsg}>display</button>
            </div>
            
        )
    }
}
export default Printmessage;