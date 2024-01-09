/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
import { ITableState } from './interfaces/ITableState'
import './style/Pagination.css'
import { useContext } from "react"

/**
 * Component : Datatable pagination.
 * @Component
 * @return ( <Pagination/> )
 */
function Pagination() {

    const {tableState, dispatch} = useContext(DatasTableContext)
    if(!dispatch || !tableState) return(<></>)

    const currentPage = tableState.pagination.currentPage
    const nEntriesPerPage = tableState.pagination.nEntriesPerPage
    const totalEntries = tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length
    
    const enoughEntriesLeftForNextPage =  currentPage * nEntriesPerPage < totalEntries

    /*
     * Previous Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function prevPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : currentPage > 1 ? currentPage-1 : currentPage
        }})
    }

    /*
     * Next Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function nextPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : enoughEntriesLeftForNextPage ? currentPage+1 : currentPage
        }})
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && <span tabIndex={0} style={{marginRight:'0.5rem'}} onClick={() => prevPage(tableState)}>Previous</span>}
          {currentPage > 1 && <div tabIndex={0} className="paginationInactivePage" onClick={() => prevPage(tableState)}>{currentPage-1}</div>}
          <div tabIndex={0} className="paginationActivePage">{currentPage}</div>
          {enoughEntriesLeftForNextPage && <div tabIndex={0} className="paginationInactivePage" onClick={() => nextPage(tableState)}>{currentPage+1}</div>}
          {enoughEntriesLeftForNextPage && <span tabIndex={0} style={{marginLeft:'0.5rem'}} onClick={() => nextPage(tableState)}>Next</span>}
        </div>
    )
}

export default Pagination
