const fs = require('fs');
const apiObj = require('./api.json');
const className = apiObj.desc || 'Temp';
createInterfaceTemplate();
function createInterfaceTemplate() {
    let fnItems = apiObj.list.map(api => {
        return createEveryFunc(api);
    });
    let res = createInterfaceTemp(fnItems, className);
    fs.writeFile('./interface.ts', res, err => {
        if (err) console.log(err);
        console.log('interface 生成完毕');
    });
}
// 生成接口模板文件
function createInterfaceTemp(fnItemList, className) {
    return `
    import {httpPost} from 'ict-fetch';

    class ${className} { ${fnItemList.join(' ')} }
    const  ${className}APi = new ${className}
    export default ${className}APi;
    `;
}

// 生成每个接口函数
function createEveryFunc(api) {
    const requestUrl = api.path;
    const fnName = createFuncName(api);
    return `
    /**
     * ${api.title}
     */
    // {"url":"${requestUrl}","code":["${className}:${fnName}"],"pcode":[""],"desc": "${api.title}"}
    @httpPost('${requestUrl}')
	_${fnName}_: IctResponse;
    
  `;
}

// 生成方法的名字
function createFuncName(api) {
    return api.path
        .split('/')
        .slice(-2)
        .join('');
}
