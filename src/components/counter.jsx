import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log('Prev_Props =>', prevProps);
        console.log('Prev_State =>', prevState); 
       // can make an ajax call based on results of the prevPops/prevState     
    }
    
    componentWillUnmount(){
        console.log('COMPONENT WILL UNMOUNT');
    }
    // state = {
    //     count: this.props.counter.value,
    //     //tags: ["tag1","tag2","tag3"]
    // }; // This is a controlled component with no state. 
    // It handles raising of events for the parent component.
    
    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // };
    
    // constructor(){
    //     super();
    //     //console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this); // Binding event handlers
    // }
    
    // handleIncrement = () => {
    //    // console.log("Increment Clicked.....", this);
    //    this.setState({count: this.state.count + 1});
    //    //console.log(prod);
    // } This should be done in the parent component.
    
    // doHandleIncrement = ()=> {
    //     this.handleIncrement({id:1});
    // }
    
    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul> { this.state.tags.map(tag => <li key={tag}> {tag} </li>) } </ul>
    // }
    
    render() {
        //console.log('props: ', this.props);
        console.log('COUNTER-RENDERED');
        return( 
        <div>
            {/* { this.props.children} */}
            <span className = { this.getBadgeClasses() } > { this.formatCount() } </span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm"> Increment </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            {/* { this.state.tags.length === 0 && 'Please create a new tag....'}
            { this.renderTags()} */}
        </div> );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;