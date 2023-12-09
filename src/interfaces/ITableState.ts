/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableDatasDao } from "../dao/TableDatasDao"
import { TableModel } from "../models/TableModel"
import { IPaginationRules } from "./IPaginationRules"
import { ISorting } from "./ISorting"

export interface ITableState {
    sorting : ISorting
    pagination : IPaginationRules
    search : string
    tableDatasDao : TableDatasDao
    processedDatas : Array<any>
    tableModel : TableModel
    getProcessingArgs : () => { search : string, datatype : string, sorting : ISorting }
}