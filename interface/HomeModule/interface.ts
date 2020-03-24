import { httpPost } from 'ict-fetch';

class HomeModule {
    /**
     * 导入物流记录
     */
    // {"url":"/Logistics/Record/Import","code":["HomeModule:RecordImport"],"pcode":[""],"desc": "导入物流记录"}
    @httpPost('/Logistics/Record/Import')
    _fetchRecordImport_: IctResponse;

    /**
     * 导出物流记录
     */
    // {"url":"/Logistics/Record/Export","code":["HomeModule:RecordExport"],"pcode":[""],"desc": "导出物流记录"}
    @httpPost('/Logistics/Record/Export')
    _fetchRecordExport_: IctResponse;

    /**
     * 新建物流记录
     */
    // {"url":"/Logistics/Record/Add","code":["HomeModule:RecordAdd"],"pcode":[""],"desc": "新建物流记录"}
    @httpPost('/Logistics/Record/Add')
    _fetchRecordAdd_: IctResponse;

    /**
     * 查询物流导入记录
     */
    // {"url":"/Logistics/Record/Import/History","code":["HomeModule:ImportHistory"],"pcode":[""],"desc": "查询物流导入记录"}
    @httpPost('/Logistics/Record/Import/History')
    _fetchImportHistory_: IctResponse;

    /**
     * 查询物流记录列表
     */
    // {"url":"/Logistics/Record/List","code":["HomeModule:RecordList"],"pcode":[""],"desc": "查询物流记录列表"}
    @httpPost('/Logistics/Record/List')
    _fetchRecordList_: IctResponse;

    /**
     * 物流下载导入模板
     */
    // {"url":"/Logistics/Download/Template","code":["HomeModule:DownloadTemplate"],"pcode":[""],"desc": "物流下载导入模板"}
    @httpPost('/Logistics/Download/Template')
    _fetchDownloadTemplate_: IctResponse;

    /**
     * 物流信息信息查询
     */
    // {"url":"/Logistics/Info","code":["HomeModule:LogisticsInfo"],"pcode":[""],"desc": "物流信息信息查询"}
    @httpPost('/Logistics/Info')
    _fetchLogisticsInfo_: IctResponse;

    /**
     * 编辑物流记录
     */
    // {"url":"/Logistics/Record/Edit","code":["HomeModule:RecordEdit"],"pcode":[""],"desc": "编辑物流记录"}
    @httpPost('/Logistics/Record/Edit')
    _fetchRecordEdit_: IctResponse;
}
const HomeModuleAPi = new HomeModule();
export default HomeModuleAPi;
