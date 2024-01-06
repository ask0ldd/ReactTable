/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
import './style/NDisplayedSelect.css'
import { useContext } from "react"

/**
 * Component : A container hosting a select.
 * @Component
 * @return ( <NDisplayedSelect/> )
 */
function NDisplayedSelect() 
{
    const NDisplayedOptions = ['10', '25', '50', '100']
    const {dispatch} = useContext(DatasTableContext)

     /* should update select active option if 100 */
    if(!dispatch) return(<></>)

    return (
        <div id="entriesContainer">
        Show
        <select onChange={e => updateNumberEntriesPerPage(e)}>
            {
                // Populate the select : 10, 25, 50, 100 entries per page.
                NDisplayedOptions.map((opt, index) => 
                    (<option value={parseInt(opt)} key={'opt'+index}>{opt}</option>))
            }
        </select>
        entries
    </div>
    )

    /**
     * Update the number of entries per page.
     * @param {React.ChangeEvent<HTMLSelectElement>} e - The event object.
     */
    function updateNumberEntriesPerPage(e : React.ChangeEvent<HTMLSelectElement>){
        const currentPage = 1
        const nEntriesPerPage = e.target.value != null ? parseInt(e.target.value) : 50
        dispatch && dispatch({type : "pagination", payload : {currentPage, nEntriesPerPage}})
    }


}

export default NDisplayedSelect