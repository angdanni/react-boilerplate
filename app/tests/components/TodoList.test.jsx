var expect = require('expect');
var React = require('react');
var ReactDOM =  require('react-dom');
var $ = require('jquery');
var TestUtils =  require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it ('should render one Todo component foreach Todo item',() => {
    var todos = [{
      id:1,
      text: 'Do something'
    }, {
      id:2,
      text: 'Check mail'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });
})
