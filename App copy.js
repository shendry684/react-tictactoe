import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        bands: [
          {name :"AC-DC", add: 0 },
          {name :"Black Sabbath", add: 0},
          {name :"Soundgarden", add: 0},
          {name :"Deftones", add: 0},
          {name :"Alice in Chains", add: 0}
        ]
      };
      
    }
    

    add(i){
      console.log("Your ticket has been purchased", i);
      let c = [...this.state.bands];
      c[i].add++;
      this.setState({bands: c});
    }

    
    reset(i){
      console.log("Your ticket has been purchased", i);
      let c = [...this.state.bands];
      c[i].add--;
      this.setState({bands: c});
    
      }

    submit = (e) => {
      e.preventDefault();
    }


    render(){
      return (
      <div>
        <h1>TixCity: The premiere portal for purchasing tickets </h1>
        {
          this.state.bands.map( (c, i) =>
            <div key={i} className="bands">
              <h4>{c.name}</h4>
              <button onClick={this.add.bind(this, i)}>Buy Another Ticket: {c.add}</button>
              <button  onClick={this.reset.bind(this, i)}>Cancel Purchase: {c.reset}</button> 
              <button  onClick={this.submit}>Confirm Purchase</button> 
              

            </div>  
          
          )
        
      }
      </div>

      );

    }

}

export default App;
