import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateIdea from './createIdea.js'
import { Card } from './cards.js'

class App extends Component {
  constructor() {
    super()
    this.state = { ideas: [] }
  }

  createIdea(state){
    this.state.ideas.push(Object.assign({},state, {id: Date.now()}) )
    this.setState({ ideas: this.state.ideas })
  }

  deleteIdea(id) {
    const newShit = this.state.ideas.filter((idea) => idea.id !== id)
    this.setState({ ideas: newShit})
  }

  render() {
    const cards = this.state.ideas.map((idea) => <Card key={idea.id} deleteIt={this.deleteIdea.bind(this)} id={idea.id} title={idea.title} body={idea.body}/>)

    return (
      <div className="App">
      <h1>TIM!!!!!</h1>
        <CreateIdea submitIdea={(state) => this.createIdea(state)}/>
      <div>
        {cards}
      </div>
      </div>
    );
  }
}

export default App;
