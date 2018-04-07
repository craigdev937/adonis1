'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');
const Todo = use('App/Models/Todo');

Route.get('/', 'TodoController.index');
Route.post('/', 'TodoController.store');
Route.get('/todos/delete/:id', 'TodoController.destroy');
Route.get('/todos/edit/:id', 'TodoController.edit');
Route.post('/todos/update/:id', 'TodoController.update');

