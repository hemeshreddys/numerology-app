import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputNum: '',
            inputVal: ''
          };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addNumbers = this.addNumbers.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleTest = this.handleTest.bind(this);
        
      }
      addItem() {
        if (this.state.inputVal !== "") {
            var newItem = {
                text: this.state.inputVal,
                key: Date.now(),
                number: this.state.inputNum
              };
       
              this.setState((prevState) => {
                return { 
                  items: prevState.items.concat(newItem),
                  inputVal: ''
                };
              });
         
        }
         
        console.log(this.state.items);
           
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

      addNumbers(element) {
        var sum = 0;
        for (var i = 0; i < element.length; i++)
            sum += Number(element[i]);
        var finalResult = sum.toString();
        return (finalResult.length > 1) ? this.addNumbers(finalResult) : finalResult;
    }
    handleTest(e) {
       
        var data = {};
        data.a = data.i = data.j = data.q = data.y = 1;
        data.b = data.k = data.r = 2;
        data.c = data.g = data.l = data.s = 3;
        data.d = data.m = data.t = 4;
        data.e = data.h = data.n = data.x = 5;
        data.u = data.v = data.w = 6;
        data.o = data.z = 7;
        data.f = data.p = 8;

        var name = e.target.value.toLowerCase();
          if (e.keyCode == 13 || e.charCode == 13) {
            this.addItem()
            name = name.replace(/\s/g, '');
            name = name.replace(/[^a-z]/gi, '');
            var total = 0;
            for (var i = 0; i < name.length; i++)
                total += data[name[i]];
    
            this.setState({
                inputVal: e.target.value,
                inputNum: this.addNumbers(total.toString())
            })
        }
      }
    onInputChange(e) {
        var data = {};
        data.a = data.i = data.j = data.q = data.y = 1;
        data.b = data.k = data.r = 2;
        data.c = data.g = data.l = data.s = 3;
        data.d = data.m = data.t = 4;
        data.e = data.h = data.n = data.x = 5;
        data.u = data.v = data.w = 6;
        data.o = data.z = 7;
        data.f = data.p = 8;

        var name = e.target.value.toLowerCase();
        name = name.replace(/\s/g, '');
        name = name.replace(/[^a-z]/gi, '');
        var total = 0;
        for (var i = 0; i < name.length; i++)
            total += data[name[i]];

        this.setState({
            inputVal: e.target.value,
            inputNum: this.addNumbers(total.toString())
        })
    }
      
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <div>{this.state.inputNum}</div>
        <input value={this.state.inputVal.toUpperCase()} onChange={(e) => {this.onInputChange(e)}}  onKeyPress={this.handleTest} 
        placeholder="enter name">
        </input>
         <button onClick={() => this.addItem()}>add</button>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;