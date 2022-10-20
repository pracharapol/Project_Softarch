import React, { Component } from 'react'; 

type ClockState = {
  time: Date
}



export class Clock extends Component<{}, ClockState> {


  tick() {
    this.setState({
      time: new Date()
    });
  }

 
  componentWillMount() {
    this.tick();
  }


  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }


  render() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const d = new Date();
    return <p>{this.state.time.getDate()} {monthNames[d.getMonth()]} </p>
  }
}