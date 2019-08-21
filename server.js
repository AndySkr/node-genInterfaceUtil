const http = require("http");
const port = 5000;
/**
 * server
 */
http
	.createServer(function (req, res) {
		console.log(req.headers)
		res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
		res.end(`Hello World 哈哈哈是的 啊`, function () {
		});
	})
	.listen(port);
console.log(`server starting: ${port}`);

/**
 *  client
 */

http.get('http://127.0.0.1:8000', function (res) {
	console.log(res.statusCode)
})
