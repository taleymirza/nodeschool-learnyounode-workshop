const fs= require('fs')
const path = require('path')
module.exports = function(fol, ext, callback){
	
fs.readdir(fol, function (err,data){
	if(err){
		return callback(err);
	}
	else{
		
		
		return callback(null,data.filter(function(list){
		 return path.extname(list)==="."+ext;
		}));

	}
		
	
})
}