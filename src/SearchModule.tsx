/* eslint-disable @typescript-eslint/no-explicit-any */
import './style/SearchModule.css'
import { DatasTableContext } from './DatasTableContext'
import { useContext } from "react"

/**
 * Component : Module adding a search function to the datatable.
 * @Component
 * @return ( <SearchModule/> )
 */
function SearchModule() {

    const { dispatch } = useContext(DatasTableContext)
    if(!dispatch) return(<></>)

    return (
        <div id="searchContainer">
        <label htmlFor='search'>Search:</label>
        <input contentEditable id='search' type="text" onInput={(e)=> dispatch({type : "search", payload : e.currentTarget.value })}/>
        </div>
    )
    
}

export default SearchModule