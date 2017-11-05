var expect = require('expect');
var React = require('react');
var ReactDOM =  require('react-dom');
var $ = require('jquery');
var TestUtils =  require('react-addons-test-utils');
import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it ('should dispatch start toggle Todo action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    }

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
})
