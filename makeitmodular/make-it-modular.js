
const mymodule = require('./mymodule.js')



mymodule(process.argv[2],process.argv[3], function(err, data){
	if(err){
		console.error(err)
	}
	data.forEach(list=> console.log(list));

});

