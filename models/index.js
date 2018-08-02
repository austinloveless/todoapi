var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://eldon:whatbet1@ds263791.mlab.com:63791/todo_app");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
