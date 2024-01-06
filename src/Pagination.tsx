/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
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
    const totalEntries = tableState.processedDatas.length
    // QM = question mark
    const enoughEntriesLeftForNextPageQM =  currentPage * nEntriesPerPage < totalEntries

    /*
     * Previous Table Page.
     * dispatch > context > useTableManager > useReducer
     */
    function prevPage(){
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
     * dispatch > context > useTableManager > useReducer
     */
    function nextPage(){
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : enoughEntriesLeftForNextPageQM ? currentPage+1 : currentPage
        }})
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && <span tabIndex={0} style={{marginRight:'0.5rem'}} onClick={() => prevPage()}>Previous</span>}
          {currentPage > 1 && <div tabIndex={0} className="paginationInactivePage" onClick={() => prevPage()}>{currentPage-1}</div>}
          <div tabIndex={0} className="paginationActivePage">{currentPage}</div>
          {enoughEntriesLeftForNextPageQM && <div tabIndex={0} className="paginationInactivePage" onClick={() => nextPage()}>{currentPage+1}</div>}
          {enoughEntriesLeftForNextPageQM && <span tabIndex={0} style={{marginLeft:'0.5rem'}} onClick={() => nextPage()}>Next</span>}
        </div>
    )
}

export default Pagination
