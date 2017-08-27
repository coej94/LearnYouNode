var mim = require('./MakeItModular');
var directory = process.argv[2];
var extention = process.argv[3]; 

mim(directory, extention, function(err, files) {
    if (err) {
        console.log('------------------------------------');
        console.log("something went wrong!");
        console.log('------------------------------------');
    } 
    files.forEach(function(file) {
        console.log(file);
    });
});