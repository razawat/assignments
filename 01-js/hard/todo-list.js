/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todo = [];
  add(todo) {
    this.todo.push(todo);
  }
  remove(index) {
    if(this.todo.length>index) {
      this.todo.splice(index, 1);
    }
    // else {
    //   throw new Error('');
    // }
  }
  update(index, val) {
    if(this.todo.length>index) {
      this.todo[index] = val;
    }
    // else {
    //   throw new Error('');
    // }
  }
  getAll() {
    return this.todo;
  }
  get(index) {
    if(this.todo.length>index) {
      return this.todo[index];
    }
    else {
      return null;
    }
    // else {
    //   throw new Error('');
    // }
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
