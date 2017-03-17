import React, { Component } from 'react';

class CreateIdea extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  handleClick() {
    this.props.submitIdea(this.state)
    this.setState({ title: '', body: ''});
  }

  render() {
    return (
      <div className="CreateIdea">
        Title
        <input value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} /> <br/>

        Body
        <input value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />

        <br/>

        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    );
  }
}

export default CreateIdea;
