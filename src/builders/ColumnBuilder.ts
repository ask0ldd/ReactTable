import { Column } from "../models/ColumnModel"

export class ColumnBuilder {

    static #th : string | null = null
    static #accessor : string | null = null
    static #sortable = false
    static #datatype : "string" | "number" | "date" | null = null
  
    static startBuilder(){
      this.#th = null
      this.#accessor = null
      this.#sortable = false
      this.#datatype = null
      return this
    }
  
    // The text that will be displayed into the th tag of your future column
    static setColumnName(th : string){
      this.#th = th
      return this
    }
  
    // A key from your data object pointing to the value used to fill your future column
    static setAccessor(accessor : string){
      this.#accessor = accessor
      return this
    }
  
    // Should your column be sortable ?
    static setSortability(sortable : boolean){
      this.#sortable = sortable
      return this
    }
  
    // What type of data will fill your column ? 
    static setDatatype(datatype : "string" | "number" | "date"){
      this.#datatype = datatype
      return this
    }
  
    static setDatatypeAsString(){
      this.#datatype = "string"
      return this
    }
  
    static setDatatypeAsNumber(){
      this.#datatype = "number"
      return this
    }
  
    static setDatatypeAsDate(){
      this.#datatype = "date"
      return this
    }
  
    // build the final column
    static build(){
      try{
        if(this.#th == null || this.#accessor == null || this.#datatype == null ) throw new Error("Can't be built : Column definition incomplete.")
        return new Column(this.#th, this.#accessor, this.#sortable, this.#datatype)
      }catch (e){
        console.error(e)
        return undefined
      }
    }
  
  }