/* eslint-disable @typescript-eslint/no-explicit-any */
import './style/NDisplayedSelect.css'
import { DatasTableContext } from "./DatasTable"
import { useContext } from "react"
import * as React from "react"

/**
 * Component : A container hosting a select.
 * @Component
 * @return ( <NDisplayedSelect/> )
 */
function NDisplayedSelect() 
{
    // const selectElement = useRef<HTMLSelectElement>(null)

    const NDisplayedOptions = ['10', '25', '50', '100']
    // const defaultOptionIndex = 0;

    const {setDisplayRules} = useContext(DatasTableContext)

     /* should update select active option if 100 */

    return (
    <div id="entriesContainer">
        Show
        <select onChange={(e) => 
            {
                const currentPage = 1
                const nEntriesPerPage = e.target.value != null ? parseInt(e.target.value) : 50
                setDisplayRules && setDisplayRules({currentPage, nEntriesPerPage})
            }}
        >
            {NDisplayedOptions.map((opt, index) => (<option value={parseInt(opt)} key={'opt'+index}>{opt}</option>))}
        </select>
        entries
    </div>
    )
}

export default NDisplayedSelect