const fs= require('fs');
const path = require('path');
const ext= '.'+process.argv[3];

fs.readdir(process.argv[2], (err,data) =>{
	if(err){
		return console.log("Error: "+err);
	}
	else{
		data.forEach(function(list){
			if(path.extname(list)==ext){
				console.log(list)
			}
		})
	}
})