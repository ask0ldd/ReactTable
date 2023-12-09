import { IColumnDefElement } from "../interfaces/IColumnDefElement"

export class Column {
    #th : string | null
    #accessor : string | null
    #sortable : boolean
    #datatype : 'string' | 'number' | 'date' | null
  
    constructor(th : string, accessor: string, sortable : boolean, datatype : 'string' | 'number' | 'date'){
      this.#th = th
      this.#accessor = accessor
      this.#sortable = sortable
      this.#datatype = datatype
    }
    
    toObject() : IColumnDefElement | undefined {
      if(this.#th == null || this.#accessor == null || this.#datatype == null ) return undefined // { th: '', datakey: '', sortable: true, datatype: '' }
      return({th : this.#th, accessor : this.#accessor, sortable : this.#sortable, datatype : this.#datatype})
    }
  }