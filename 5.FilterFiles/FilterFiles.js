var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extention = process.argv[3];
fs.readdir(directory, function (err, list) {
    if (err) {
        console.log(err);
    } 
    list.forEach(function(filename){
        if(path.extname(filename) === '.' + extention){
            console.log(filename);
        }
    });
});