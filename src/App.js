import React, { Component } from 'react';
import TodoItems from './Component/Todoitem/Todoitem';
import AddItem from './Component/Additem/Additem';
class App extends Component {

  state = {
    items: [
      { id: 1, name: 'ounissi', age: 22 },
      { id: 1, name: 'takieddine', age: 22 },
      { id: 1, name: 'azzou', age: 22 },

    ]
  }
  render() {
    return (
      <div className="App">
        do list App
        <TodoItems items={this.State.items} />
        <AddItem />
      </div>
    );
  }
}

export default App;
