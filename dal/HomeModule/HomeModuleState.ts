import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import HomeModuleAPI from '@/interface/HomeModule/interface';

class HomeModuleState {
    /**
     * 导入物流记录
     */

    @action
    async RecordImport(params: {}) {
        let response = await HomeModuleAPI._fetchRecordImport_({
            body: params
        });
    }
    /**
     * 导出物流记录
     */

    @action
    async RecordExport(params: {}) {
        let response = await HomeModuleAPI._fetchRecordExport_({
            body: params
        });
    }
    /**
     * 新建物流记录
     */

    @action
    async RecordAdd(params: {}) {
        let response = await HomeModuleAPI._fetchRecordAdd_({
            body: params
        });
    }
    /**
     * 查询物流导入记录
     */

    @action
    async ImportHistory(params: {}) {
        let response = await HomeModuleAPI._fetchImportHistory_({
            body: params
        });
    }
    /**
     * 查询物流记录列表
     */

    @action
    async RecordList(params: {}) {
        let response = await HomeModuleAPI._fetchRecordList_({
            body: params
        });
    }
    /**
     * 物流下载导入模板
     */

    @action
    async DownloadTemplate(params: {}) {
        let response = await HomeModuleAPI._fetchDownloadTemplate_({
            body: params
        });
    }
    /**
     * 物流信息信息查询
     */

    @action
    async LogisticsInfo(params: {}) {
        let response = await HomeModuleAPI._fetchLogisticsInfo_({
            body: params
        });
    }
    /**
     * 编辑物流记录
     */

    @action
    async RecordEdit(params: {}) {
        let response = await HomeModuleAPI._fetchRecordEdit_({
            body: params
        });
    }
}
export default new HomeModule();
