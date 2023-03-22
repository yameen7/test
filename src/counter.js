import React from "react";

export default class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        // this.coun = 0;
        this.state={count:0};
    }
    incr()
    {
        this.setState({ count: this.state.count+1})
    }
    decr()
    {
        this.setState({ count: this.state.count-1})
    }
    reset()
    {
        this.setState({ count:0})
    }
    render() {

        return (
          <div>
            <h1>Counter:&nbsp;&nbsp;{this.state.count}</h1>
            <button onClick={this.incr.bind(this)}>Increment</button>
            <button onClick={this.reset.bind(this)}>Reset</button>
            <button onClick={this.decr.bind(this)}>Decrement</button><br />
          </div>
        )
      }
}