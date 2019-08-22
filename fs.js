const fs = require("fs")
const zlib = require("zlib")
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
// syncWrite('./txt/new.js', "hello world , love me love my dog")

/**
 * 异步写入文件
 * @param {写入文件路径} src
 * @param {写入数据} data
 * 如果文件不存在就创建该文件并写入
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
	writeSteam.write("how are you andy", "utf8");
	writeSteam.end();
	writeSteam.on("close", () => {
		console.log("写入关闭")
	})
}
// streamWrite('./text/hello.txt')

/**
 * 创建读写流以管道的方式实现拷贝文件
 * @param {文件源路径} sourceSrc 
 * @param {写入目标路径} targetSrc 
 */

function copyFile(sourceSrc, targetSrc) {
	const readStream = fs.createReadStream(sourceSrc);
	const writeSteam = fs.createWriteStream(targetSrc);
	readStream.on("data", () => {
		console.log("拷贝开始")
	})
	writeSteam.on("close", () => {
		console.log("拷贝完成")
	})
	readStream.pipe(writeSteam)
}
// copyFile('./text/hello.json', './text/hello.txt');

/**
 *判断文件是否存在
 *
 * @param {文件路径} src
 */
function checkisHasFile(src) {
	fs.access(src, (err) => {
		if (err) throw err
		console.log("文件存在")
	})
}
// checkisHasFile('./text/hello.txt')


/**
 *
 * 获取文件信息
 * @param {*} src
 */
function getFileInfo(src) {
	fs.stat(src, (err, fileInfo) => {
		console.log(fileInfo) //  有 .isFile() , .isDirectory() 等方法
	})
}

// getFileInfo("./text/hello.txt")

/**
 * 创建目录
 *
 */
function makeDir(src) {
	const dirName = src.slice(src.lastIndexOf("/") + 1)
	// fs.mkdir(src, (error) => {   // 必须要有父级目录
	// 	if (error) console.log(error);
	// 	console.log(`创建${dirName}目录成功`)
	// })
	fs.mkdir(src, { recursive: true }, (err) => {  // recursive: true , 不管父级目录是否存在 , 直接创建
		if (err) console.log(err);
		console.log(`创建${dirName}目录成功`)
	})
}

// makeDir('.txt/newDir/b'); // text目录必须存在


/**
 * 异步读取目录
* @param {读取路径} src
 */
function readDir(src) {
	fs.readdir(src, (err, files) => {
		if (err) { console.log(err); return; }
		console.log(...files)
	})
}
readDir("./txt")


















// 链式流 : 通过连接输出流到另一个流并创造多个流操作链的机制. 一般用于管道操作

/**
 * 压缩文件
 */
function zipFile() {
	fs.createReadStream("./text/hello.txt", "utf8")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("./text/newZip.gz"))
}
// zipFile()
/**
 * 解压文件
 */
function unzipFile() {
	fs.createReadStream("./text/newZip.gz", "utf8")
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream("./text/newZip.txt"))
}
// unzipFile()