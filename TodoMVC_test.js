Feature('TodoMVC');

Scenario('create todo item', (I) => {
  I.amOnPage('/examples/vue/')
  I.fillField('.new-todo', 'Write a test')
  I.pressKey('Enter');
  I.see('1 item left', '.todo-count');
});

Scenario('Create multiple todo items', (I) => {
  I.amOnPage('/examples/vue/')
  // here we use action from steps_file.js
  I.createTodo('Add item 1');
  I.createTodo('Add item 2');
  I.createTodo('Add item 3');
  I.see('3 items left', '.todo-count');
});

