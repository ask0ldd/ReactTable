/* eslint-disable @typescript-eslint/no-explicit-any */
import './style/Pagination.css'
import * as React from "react"

interface IProps{
  currentPage: number
  setDisplayRules: any
  nEntriesPerPage: number
  totalEntries: number
}

/**
 * Component : Datatable pagination.
 * @Component
 * @param {Object[]} props - Props.
 * @param {number} props.currentPage - Current datatable page.
 * @param {function} props.setDisplayRules - Used to navigate to the different datatable pages.
 * @param {number} props.nEntriesPerPage - Entries / results per page.
 * @param {number} props.totalEntries - Total number of entries.
 * @return ( <Pagination currentPage={currentPage} setDisplayRules={setDisplayRules} nEntriesPerPage={nEntriesPerPage} totalEntries={totalEntries}/> )
 */
function Pagination({currentPage, setDisplayRules, nEntriesPerPage, totalEntries} : IProps) {

    function prevPage(){
      setDisplayRules({currentPage: currentPage > 1 ? currentPage-1 : currentPage, nEntriesPerPage: nEntriesPerPage})
    }

    function nextPage(){
      setDisplayRules({currentPage: currentPage * nEntriesPerPage < totalEntries ? currentPage+1 : currentPage, nEntriesPerPage: nEntriesPerPage})
    }

    function enoughEntriesLeftForNextPage(){
      return currentPage * nEntriesPerPage < totalEntries
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && <span style={{marginRight:'0.5rem'}} onClick={() => prevPage()}>Previous</span>}
          {currentPage > 1 && <div className="paginationInactivePage" onClick={() => prevPage()}>{currentPage-1}</div>}
          <div className="paginationActivePage">{currentPage}</div>
          {enoughEntriesLeftForNextPage() && <div className="paginationInactivePage" onClick={() => nextPage()}>{currentPage+1}</div>}
          {enoughEntriesLeftForNextPage() && <span style={{marginLeft:'0.5rem'}} onClick={() => nextPage()}>Next</span>}
        </div>
    )
}

export default Pagination