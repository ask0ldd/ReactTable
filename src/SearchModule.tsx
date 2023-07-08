/* eslint-disable @typescript-eslint/no-explicit-any */
import './style/SearchModule.css'
import { DatasTableContext } from "./DatasTable"
import { useContext } from "react"
import * as React from "react"

/*interface IProps{
    setSearchString: any
}*/

/**
 * Component : Module adding a search function to the datatable.
 * @Component
 * @return ( <SearchModule/> )
 */
function SearchModule() {

    const { setSearchString } = useContext(DatasTableContext)

    return (
        <div id="searchContainer">
        <label htmlFor='search'>Search:</label>
        <input contentEditable id='search' type="text" onInput={(e)=> setSearchString && setSearchString(e.currentTarget.value)}/>
        </div>
    )
    
}

export default SearchModule