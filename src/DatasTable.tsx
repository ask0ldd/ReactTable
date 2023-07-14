/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Table from './Table'
import NDisplayedSelect from './NDisplayedSelect'
import SearchModule from './SearchModule'
import Pagination from './Pagination'
import NEntries from './NEntries'
import { useState, useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*import { IUsersDatas } from '../../datas/usersDatasTen'
import { IColumnDefElement } from '../../pages/CurrentEmployees'*/
import {createContext} from 'react'
import * as React from "react"
import './style/DatasTable.css'

/*th : string
datakey : string
sortable : boolean
datatype : string*/

/**
 * Component : Grouping all the constitutive elements of a datatable.
 * @Component
 * @param {Object[]} props - Props.
 * @param {Object[]} props.columnsDefinition
 * @param {string} props.columnsDefinition[].datakey - Column accessor.
 * @param {string} props.columnsDefinition[].th - String to be inserted into the th tag of the column - Header.
 * @param {boolean} props.columnsDefinition[].sortable - Sortability of the column.
 * @param {string} props.columnsDefinition[].datatype - Type of the datas populating the column.
 * @param {Object[]} props.tableDatas - Datas used to populate the table.
 * @return ( <DatasTable columnsDefinition={columnsDefinition} tableDatas={tableDatas}/> )
 */
export function DatasTable({columnsDefinition, tableDatas} : IProps){

    const frCollator = new Intl.Collator('en')

    const tableColumnsNames : Array<string> = columnsDefinition.reduce((accu : Array<string>, column) => {accu.push(column.th); return accu}, [])
    const tableDatasKeys : Array<string> = columnsDefinition.reduce((accu : Array<string>, column) => {accu.push(column.datakey); return accu}, [])
  
    // currentPage / nEntriesPerPage / searchString / sortingDirection / sortingTargetColumn
    const [tableDatasState, setTableDatas] = useState<Array<any>>([...tableDatas]);
    const [ordering, setOrdering] = useState<IOrdering>({column : '', direction : 'asc'})
    const [paginationRules, setPaginationRules] = useState<IPaginationRules>({currentPage : 1, nEntriesPerPage : 10})
    const [searchString, setSearchString] = useState<string>('')
  
    // react to any ordering state update
    useEffect(() => {
        // [...usersDatas] to avoid any mutation
        let filteredTable
        if(searchString !== '') 
        {
            filteredTable = [...tableDatas].filter(row => {
                // check if one of the properties of a row contain the searchString
                for (const property in row) if(row[property].toString().toLowerCase().includes(searchString.toLowerCase())) return true
                return false
            })}else{
            filteredTable = [...tableDatas]
        }
        if(ordering.column === '') return setTableDatas(filteredTable)
        const sortedColumnDef = [...columnsDefinition].filter(column => column.datakey === ordering.column)[0]
        if(ordering.direction === 'asc' && sortedColumnDef.datatype === 'date') 
            return setTableDatas(filteredTable.sort((a,b) => dateToTime(b[ordering.column]) - dateToTime(a[ordering.column])))
        if(ordering.direction === 'desc' && sortedColumnDef.datatype === 'date') 
            return setTableDatas(filteredTable.sort((a,b) => dateToTime(a[ordering.column]) - dateToTime(b[ordering.column])))
        if(ordering.direction === 'asc') 
            return setTableDatas(filteredTable.sort((a,b) => frCollator.compare(a[ordering.column], b[ordering.column])))
        if(ordering.direction === 'desc') 
            return setTableDatas(filteredTable.sort((a,b) => frCollator.compare(b[ordering.column], a[ordering.column])))
    }, [ordering.column, ordering.direction, paginationRules.currentPage, searchString])

    // when typing into the searchbar, the currentpage is set back to 1
    useEffect(()=>{
        setPaginationRules({...paginationRules, currentPage : 1})
    }, [searchString])

    return(
        <>  
            <DatasTableContext.Provider value={{paginationRules, tableDatasState, ordering, searchString, tableColumnsNames, tableDatasKeys, setPaginationRules, setOrdering, setSearchString}}>
                <div id="entriesNSearchContainer">
                    <NDisplayedSelect/>
                    <SearchModule/>
                </div>
                <Table/>
                <div id="infosNPaginationContainer">
                    <NEntries/>
                    <Pagination totalEntries={tableDatasState.length} currentPage={paginationRules.currentPage} nEntriesPerPage={paginationRules.nEntriesPerPage} setPaginationRules={setPaginationRules}/>
                </div>
            </DatasTableContext.Provider>
        </>
    )
}

// !!! jsdoc
function dateToTime(date : string){
    const [day, month, year] = date.split('/')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}

interface IDatasTableContext{
    paginationRules? : IPaginationRules
    tableDatasState : Array<any>
    ordering? : IOrdering
    searchString? : string
    tableColumnsNames : Array<string>
    tableDatasKeys : Array<string>
    setPaginationRules?({currentPage, nEntriesPerPage} : IPaginationRules) : void
    setOrdering?({column, direction} : IOrdering) : void
    setSearchString?(string : string) : void
}

export const DatasTableContext = createContext<IDatasTableContext>({tableDatasState : [],tableColumnsNames : [], tableDatasKeys: []})

interface IProps {
    columnsDefinition : Array<IColumnDefElement>
    tableDatas : Array<any>
}

interface IPaginationRules{
    currentPage : number
    nEntriesPerPage : number
}

interface IOrdering{
    column : string
    direction : 'asc' | 'desc'
}

export interface IColumnDefElement 
{
  th : string
  datakey : string
  sortable : boolean
  datatype : string
}