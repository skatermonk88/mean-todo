var config = require('./config'),
     mongoose = require('mongoose');

module.exports = function(){
     var db = mongoose.connect(config.db);
     
     // need to include user model file
     require('../app/models/user.server.model');

     return db;
};





