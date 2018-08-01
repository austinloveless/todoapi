var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(
  "mongodb://test:whatever123@ds263791.mlab.com:63791/todolistudemy"
);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
