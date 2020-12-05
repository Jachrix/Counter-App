import React, { Component } from 'react';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id:1, value:4 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:0 }
        ]
    };
    
    constructor(props){
      super(props);
      console.log('APP-CONSTRUCTOR', this.props);
    }
    
    componentDidMount(){
      console.log('APP-MOUNTED');
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleIncrement = counter => {
        //console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //console.log(counters[index]);
        counters[index] = {...counter};
        counters[index].value++;
        // console.log(this.state.counters[index]);
        this.setState({ counters });
    }
    
    handleDecrement = counter => {
      //console.log('Decreases the value....');
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({ counters });
    }

    handleDelete = counterId => {
        console.log('Delete Event handled....', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    render(){
      console.log('APP-RENDRED');
      return (
        <React.Fragment>
          <NavBar 
            totalCounters={ this.state.counters.filter(c => c.value > 0).length }
          />
          <main className="container">
            <Counters
              counters={ this.state.counters } 
              onIncrement={ this.handleIncrement} 
              onDecrement={ this.handleDecrement} 
              onDelete={ this.handleDelete } 
              onReset={ this.handleReset } 
            />
          </main>
        </React.Fragment>
      );
    }
}

export default App;