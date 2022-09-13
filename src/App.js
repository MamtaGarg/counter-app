import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // constructor(props) {
  //   super(props);
  //   //this.state = props; 
  //   console.log("This is : ", props);
  // }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // cloning the exisitng array.
    const index = counters.indexOf(counter); // get the index of passed counter
    counters[index] = { ...counter }; // copy the latest value of passed counter
    counters[index].value++; // increment the value in original counters' array
    this.setState({ counters }); // set the state
    //console.log(this.state.counters[0]);
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
      <NavBar totalCount={this.state.counters.filter((counter) => counter.value > 0).length}/>
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
