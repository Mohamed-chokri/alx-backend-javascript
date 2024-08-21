var http = require('http');
const port = 1234;
const host = 'localhost';
const app = http.creatServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Holberton School!\n');
}
app.listen(port,host,()=>{
	console.log('Server running at http://${HOST}:${port}/`);
});
