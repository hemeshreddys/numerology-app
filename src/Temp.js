import React, {Component} from 'react';

class Temp extends Component {
    constructor(){
        super();
        this.state = {
            message : "Cool Temp Const"

        }
        this.updateTemp = this.updateTemp.bind(this)
    }
    updateTemp(){
        this.setState({
            message :  "I'm out"
        })
    }
    render() {
        
        return(
            <div>
            <button onClick={this.updateTemp}>Click</button>
            {this.state.message}
            </div>

        )
    }
}
export default Temp;