'use strict'

const Todo = use('App/Models/Todo');

class FindTodo {
    async handle ({ request, params, session, response }, next) {    
    // Find the todo, where the todo does not exist.
    const todo = await Todo.find(params.id);
    if (!todo) {
      session.flash({ notification: 'Todo was not found.' });
      return response.redirect('/');
    }
    request.todo = todo;
    // call next to advance the request
    await next()
  }
}

module.exports = FindTodo

