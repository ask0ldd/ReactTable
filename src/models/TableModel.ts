import { IColumnDefElement } from "../interfaces/IColumnDefElement"
import { Column } from "./ColumnModel"

export class TableModel{
    #columns : Array<IColumnDefElement>
    #id : string
  
    constructor(props : {id : string}){
      this.#id = props.id
      this.#columns = []
    }

    addColumn(column : Column | undefined){
      if(column == null || column.toObject() == null) return
      this.#columns.push(column.toObject() as IColumnDefElement)
      return this
    }
  
    getColumns() : Array<IColumnDefElement> {
      return [...this.#columns]
    }
  
    getColumnsNamesList() : Array<string>{
        return this.#columns.reduce((accu : Array<string>, column) => {accu.push(column.th); return accu}, [])
    }
  
    getAccessorsList() : Array<string>{
      return this.#columns.reduce((accu : Array<string>, column) => {accu.push(column.accessor); return accu}, [])
    }

    getDatatypeForAccessor(accessor : string) : string{
      return (this.#columns.find(column => column.accessor === accessor))?.datatype || 'string'
    }

    getTableId(){
      return this.#id
    }
  }