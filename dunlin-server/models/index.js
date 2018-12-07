const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost:27017/dunlin", {useNewUrlParser: true});
mongoose.Promise = Promise;

module.exports.User = require("./users");
module.exports.Message = require("./messages");