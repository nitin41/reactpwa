import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
var TodoItems = React.createClass({

  render: function() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key} >{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        complete:false,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  },
  render: function() {
      return (
        <div className="container">
          <div className="row">
              <form onSubmit={this.addItem}>
                <div className="col-xs-4">
                  <input ref={(a) => this._inputElement = a}
                   placeholder="enter task" className="form-control"></input>
                </div>
                <div className="col-xs-4">
                  <Button bsStyle="primary" type="submit">Add</Button>
                </div>
              </form>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <TodoItems entries={this.state.items}/>
            </div>
          </div>
        </div>

      );
    }
});
export default class Todolist extends React.Component {
    render() {
        return (
            <TodoList />
        );
    }
}
