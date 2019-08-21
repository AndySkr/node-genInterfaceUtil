const fs = require("fs")

/**
 * 同步读取文件
 * @param {读取的文件路径} src 
 */
function syncReadfile(src) {
	let result = null;
	try {
		result = fs.readFileSync(src, "utf8");
	} catch (error) {
		console.log("同步读取文件错误" + error.message)
	}
	console.log(result)

}
// syncReadfile('./text/hello.txt')
/**
 *
 * 异步读取文件
 * @param {读取路径} src
 */
function asyncReadFile(src) {
	fs.readFile(src, "utf8", (err, data) => {
		if (err) {
			console.log(`异步读取错误${err}`)
		}
		console.log(data);
	})
}
// asyncReadFile('./text/hello.txt')
/**
 *文件流读取文件
 *
 * @param {*} src
 */
function streamReadFile(src) {
	const readStream = fs.createReadStream(src, "utf8")
	readStream.on("data", (chunk) => {
		console.log(`读取数据:${chunk}`);
	})
	readStream.on("error", (error) => {
		console.log(`文件流读取方式错误${error}`);
	})
	readStream.on("end", () => {
		console.log("读取完毕")
	})
	readStream.on("close", () => {
		console.log("读取流关闭")
	})
}
// streamReadFile('./text/hello.txt')

/**
 * 同步写入文件
 * @param {写入路径} src 
 * @param {写入数据} data 
 */
function syncWrite(src, data) {
	try {
		fs.writeFileSync(src, data, "utf8")
		console.log('写入成功')
	} catch (error) {
		console.log(`同步写入文件错误${error.message}`)
	}
}
// syncWrite('./text/tempTxt.txt', "hello world , love me love my dog")

/**
 * 异步写入文件
 * @param {写入文件路径} src
 * @param {写入数据} data
 */
function asyncWriteFile(src, data) {
	fs.writeFile(src, data, "utf8", (error) => {
		if (error) {
			console.log(`异步写入错误${error}`)
		}
		console.log("写入成功")
	})
}
// asyncWriteFile('./text/tempTxt.txt', 'confidence')

/**
 *
 *文件流方式写入文件
 * @param {写入路径} src
 */
function streamWrite(src) {
	const writeSteam = fs.createWriteStream(src, "utf8");
	writeSteam.on("ready", () => {
		console.log(`文件写入准备好了`)
	})
	writeSteam.on("open", (chunk) => {
		console.log(`打开文件写入${chunk}`)
	})
	writeSteam.on("finish", () => {
		console.log(`写入完成`)
	})
	writeSteam.write("how are you andy");
	writeSteam.end();
	writeSteam.on("close", () => {
		console.log("写入关闭")
	})
}
// streamWrite('./text/hello.txt')

/**
 * 创建读写流以管道的方式拷贝文件
 * @param {文件源路径} sourceSrc 
 * @param {写入目标路径} targetSrc 
 */

function copyFile(sourceSrc, targetSrc) {
	const readStream = fs.createReadStream(sourceSrc, (r) => {
		console.log("读文件开始", r)
	});
	const writeSteam = fs.createWriteStream(targetSrc, (r) => {
		console.log("写入完成", r)
	})
	readStream.pipe(writeSteam)
}
// copyFile('./text/hello.json', './text/hello.txt');

