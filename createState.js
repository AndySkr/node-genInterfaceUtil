const fs = require('fs');
const readline = require('readline');
const appObj = require('./api.json');
let fileName = { name: appObj.desc || 'Temp' };
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('请输入state文件夹名?', value => {
    fileName.name = value.replace(/\s/g, '');
    createStateFile();
});

function createStateFile() {
    let fnArr = createfnArr();
    let resTemp = createStateTemp(fnArr);

    if (!fs.existsSync(`./dal/${fileName.name}`)) {
        fs.mkdirSync(`./dal/${fileName.name}`);
    }
    fs.writeFile(`./dal/${fileName.name}/${fileName.name}State.ts`, resTemp, err => {
        if (err) {
            console.log('生成文件出错', err);
        } else {
            console.log('创建State完成');
        }
        rl.close();
    });
}

function createStateTemp(fnArr) {
    return `
    import {observable, action} from 'mobx';
    import {autobind} from 'core-decorators';
    import ${fileName.name}API from '@/interface/${fileName.name}/interface';

    class ${fileName.name}State {
     ${fnArr.join('')} 
    } 
    export default  new ${fileName.name}();
    `;
}
function createfnArr() {
    return appObj.list.map(item => {
        return createEveryFn(item);
    });
}
function createEveryFn(itemApi) {
    const Comment = itemApi.title;
    const fnName = createFuncName(itemApi.path);
    return `
    /**
     * ${Comment}
     */ 
    @action
    async ${fnName}(params: {} ) {
    let response = await ${fileName.name}API._fetch${fnName}_({
        body: params
    });
  }`;
}

// 生成方法的名字
function createFuncName(itemApiPath) {
    return itemApiPath
        .split('/')
        .slice(-2)
        .join('');
}
