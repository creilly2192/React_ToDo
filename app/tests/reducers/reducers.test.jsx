var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '23324',
          text: 'Something',
          completed: false,
          createdAt: 678994
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.todo);
    });

    it('should update toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

  });

});
