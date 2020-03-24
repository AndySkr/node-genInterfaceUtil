const fs = require('fs');
const readline = require('readline');
const apiObj = require('./api.json');
const fileName = {
    name: apiObj.desc || 'Temp'
};

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('请输入interface文件夹名?', value => {
    fileName.name = value.replace(/\s/g, '');
    createInterfaceTemplate();
});
function createInterfaceTemplate() {
    let fnArr = apiObj.list.map(api => {
        return createEveryFunc(api);
    });
    let resTemp = createInterfaceTemp(fnArr);
    if (!fs.existsSync(`./interface/${fileName.name}`)) {
        fs.mkdirSync(`./interface/${fileName.name}`);
    }
    fs.writeFile(`./interface/${fileName.name}/interface.ts`, resTemp, err => {
        if (err) {
            console.log('创建出错', err);
        } else {
            console.log('interface 生成完毕');
        }
        rl.close();
    });
}
// 生成接口模板文件
function createInterfaceTemp(fnItemList) {
    return `
    import {httpPost} from 'ict-fetch';

    class ${fileName.name} { ${fnItemList.join(' ')} }
    const  ${fileName.name}APi = new ${fileName.name}
    export default ${fileName.name}APi;
    `;
}

// 生成每个接口函数
function createEveryFunc(api) {
    const requestUrl = api.path;
    const fnName = createFuncName(api.path);
    return `
    /**
     * ${api.title}
     */
    // {"url":"${requestUrl}","code":["${fileName.name}:${fnName}"],"pcode":[""],"desc": "${api.title}"}
    @httpPost('${requestUrl}')
	_fetch${fnName}_: IctResponse;
    
  `;
}

// 生成方法的名字
function createFuncName(itemApiPath) {
    return itemApiPath
        .split('/')
        .slice(-2)
        .join('');
}
