import {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[
        {
          id: '1',
          name: 'Funky Monster'
        },
        {
          id:'2',
          name: 'Doodly Monster'
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
       {
        this.state.monsters.map((monsters)=> {
        return <div key={monsters.id}> <h1>{monsters.name}</h1></div>;
        })
        }
      </div>
    );
  }
}

export default App;
