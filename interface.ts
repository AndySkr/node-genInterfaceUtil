import { httpPost } from 'ict-fetch';

class Temp {
    /**
     * 导入物流记录
     */
    // {"url":"/Logistics/Record/Import","code":["Temp:RecordImport"],"pcode":[""],"desc": "导入物流记录"}
    @httpPost('/Logistics/Record/Import')
    _RecordImport_: IctResponse;

    /**
     * 导出物流记录
     */
    // {"url":"/Logistics/Record/Export","code":["Temp:RecordExport"],"pcode":[""],"desc": "导出物流记录"}
    @httpPost('/Logistics/Record/Export')
    _RecordExport_: IctResponse;

    /**
     * 新建物流记录
     */
    // {"url":"/Logistics/Record/Add","code":["Temp:RecordAdd"],"pcode":[""],"desc": "新建物流记录"}
    @httpPost('/Logistics/Record/Add')
    _RecordAdd_: IctResponse;

    /**
     * 查询物流导入记录
     */
    // {"url":"/Logistics/Record/Import/History","code":["Temp:ImportHistory"],"pcode":[""],"desc": "查询物流导入记录"}
    @httpPost('/Logistics/Record/Import/History')
    _ImportHistory_: IctResponse;

    /**
     * 查询物流记录列表
     */
    // {"url":"/Logistics/Record/List","code":["Temp:RecordList"],"pcode":[""],"desc": "查询物流记录列表"}
    @httpPost('/Logistics/Record/List')
    _RecordList_: IctResponse;

    /**
     * 物流下载导入模板
     */
    // {"url":"/Logistics/Download/Template","code":["Temp:DownloadTemplate"],"pcode":[""],"desc": "物流下载导入模板"}
    @httpPost('/Logistics/Download/Template')
    _DownloadTemplate_: IctResponse;

    /**
     * 物流信息信息查询
     */
    // {"url":"/Logistics/Info","code":["Temp:LogisticsInfo"],"pcode":[""],"desc": "物流信息信息查询"}
    @httpPost('/Logistics/Info')
    _LogisticsInfo_: IctResponse;

    /**
     * 编辑物流记录
     */
    // {"url":"/Logistics/Record/Edit","code":["Temp:RecordEdit"],"pcode":[""],"desc": "编辑物流记录"}
    @httpPost('/Logistics/Record/Edit')
    _RecordEdit_: IctResponse;
}
const TempAPi = new Temp();
export default TempAPi;
