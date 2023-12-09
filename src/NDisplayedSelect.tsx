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
        <select onChange={(e) => 
            {
                const currentPage = 1
                const nEntriesPerPage = e.target.value != null ? parseInt(e.target.value) : 50
                dispatch({type : "pagination", payload : {currentPage, nEntriesPerPage}})
            }}
        >
            {NDisplayedOptions.map((opt, index) => (<option value={parseInt(opt)} key={'opt'+index}>{opt}</option>))}
        </select>
        entries
    </div>
    )
}

export default NDisplayedSelect