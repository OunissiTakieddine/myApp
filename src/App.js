import React, { Component } from 'react';
import TodoItems from './Component/Todoitem/Todoitem';
import AddItem from './Component/Additem/Additem';
class App extends Component {

  state = {
    items: [
      { id: 1, name: 'ounissi', age: 22 },
      { id: 2, name: 'takieddine', age: 22 },
      { id: 3, name: 'azzou', age: 22 },

    ]
  }

  deleteItem = (id) => {
    //other function how delete item
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })
    console.log(items)
    // funtion how delete items is react js
    /* let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({ items }) */
  }
  render() {
    return (
      <div className="App">
        do list App
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem />
      </div>
    );
  }
}

export default App;
//video 5
