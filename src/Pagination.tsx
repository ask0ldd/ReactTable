/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
import './style/Pagination.css'
import { useContext } from "react"

/**
 * Component : Datatable pagination.
 * @Component
 * @param {Object[]} props - Props.
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

    function prevPage(){
      // setPaginationRules({currentPage: currentPage > 1 ? currentPage-1 : currentPage, nEntriesPerPage: nEntriesPerPage})
      if(dispatch == null || tableState == null) return
      dispatch({type : "pagination", payload : {...tableState.pagination, currentPage : currentPage > 1 ? currentPage-1 : currentPage}})
    }

    function nextPage(){
      // setPaginationRules({currentPage: currentPage * nEntriesPerPage < totalEntries ? currentPage+1 : currentPage, nEntriesPerPage: nEntriesPerPage})
      if(dispatch == null || tableState == null) return
      dispatch({type : "pagination", payload : {...tableState.pagination, currentPage : enoughEntriesLeftForNextPageQM ? currentPage+1 : currentPage}})
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && <span style={{marginRight:'0.5rem'}} onClick={() => prevPage()}>Previous</span>}
          {currentPage > 1 && <div className="paginationInactivePage" onClick={() => prevPage()}>{currentPage-1}</div>}
          <div className="paginationActivePage">{currentPage}</div>
          {enoughEntriesLeftForNextPageQM && <div className="paginationInactivePage" onClick={() => nextPage()}>{currentPage+1}</div>}
          {enoughEntriesLeftForNextPageQM && <span style={{marginLeft:'0.5rem'}} onClick={() => nextPage()}>Next</span>}
        </div>
    )
}

export default Pagination

// !!!!!!!!!!!!!!!! 
/*interface IProps{
  tableState : any
  dispatch : any
}*/
