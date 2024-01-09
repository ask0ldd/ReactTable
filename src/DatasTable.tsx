/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Table from './Table'
import NDisplayedSelect from './NDisplayedSelect'
import SearchModule from './SearchModule'
import Pagination from './Pagination'
import NEntries from './NEntries'
import { useMemo } from 'react'
import { TableModel } from './models/TableModel'
import useTableManager from './hooks/useTableManager'
import { DatasTableContext } from './DatasTableContext'

/**
 * Component : Grouping of all the constitutive elements of a datatable.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object} props.tableModel
 * @param {Object[]} props.tableModel.getColumns - Return an array defining the columns of the table.
 * @param {string} props.tableModel.getColumns[].accessor - Data accessor.
 * @param {string} props.tableModel.getColumns[].th - Table column header.
 * @param {boolean} props.tableModel.getColumns[].sortable - Sortability of the column.
 * @param {string} props.tableModel.getColumns[].datatype - Type of the datas populating the column.
 * @param {Object[]} props.tableDatas - Datas used to populate the table.
 * @return ( <DatasTable tableModel={tableModel} tableDatas={tableDatas}/> )
 */
export function DatasTable({tableModel, tableDatas} : IProps){

    // [perfs] tableModel & tableDatas props already triggering a re-render (being props), so no need of useState
    // check if accessors & table datas properties are matching / if not : no table displayed
    const isColumnsDefinitionMatchingDatas = useMemo(() => {
        let areAllMatching = true
        const tableDatasPropertiesList = Object.getOwnPropertyNames(tableDatas[0])
        tableModel.getAccessorsList().forEach(accessor => {
            if(tableDatasPropertiesList.includes(accessor) === false) areAllMatching = false
            if(!areAllMatching) throw new Error("Some Accessors don't exist into the provided Dataset.")
        })
        return areAllMatching
    }, [tableDatas, tableModel])

    const {tableState, dispatch} = useTableManager(tableModel, tableDatas)

    return(
        <>
            {isColumnsDefinitionMatchingDatas ? 
            // providing model, datas & dispatch fn to the children components
            <DatasTableContext.Provider value={{tableModel, dispatch, tableState}}>
                <div id="entriesNSearchContainer">
                    <NDisplayedSelect/>
                    <SearchModule/>
                </div>
                <Table/>
                <div id="infosNPaginationContainer">
                    <NEntries/>
                    <Pagination/>
                </div>
            </DatasTableContext.Provider> 
            : <div>Users datas are missing some mandatory dataKeys.</div>}
        </>
    )

}

export default DatasTable

interface IProps {
    tableModel : TableModel
    tableDatas : Array<any>
}