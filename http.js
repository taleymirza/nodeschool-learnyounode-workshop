var http = require('http');

var url =process.argv[2];

http.get(url, (res)=>{
	res.setEncoding('utf8');
	let rawdata ='';
	res.on('data', (chunk)=>{
	 	console.log(chunk);
	})
	// res.on('end', () => {
	//     try {
	//       const parsedData = JSON.parse(rawData);
	//       console.log(parsedData);
	//     } catch (e) {
	//       console.error(e.message);
	//     }
 //    })
}).on('error',(e) => {
  console.error(`Got error: ${e.message}`);
});