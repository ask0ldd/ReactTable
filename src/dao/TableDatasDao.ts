/* eslint-disable @typescript-eslint/no-explicit-any */
export class TableDatasDao{

    #datas : Array<any>
    
    constructor(datas : Array<any>){
        this.#datas = datas
    }

    getDatas(){
        return this.#datas
    }

    setDatas(datas : Array<any>){
        this.#datas = datas
    }

    addRow(row : object){
        this.#datas = [...this.#datas, row]
    }

    getFilteredDatas(searchString : string){
        if(searchString === "") return this.#datas

        return [...this.#datas].filter(row => {
            // check if one of the properties of a row contain the searchString
            for (const property in row) if(row[property].toString().toLowerCase().includes(searchString.toLowerCase())) return true
            return false
        })
    }

    getSortedDatas(searchString : string, sortingRules : {column : string, direction : "asc" | "desc"}, dataType : string){
        const datas = this.getFilteredDatas(searchString)
        const frCollator = new Intl.Collator('en')
        if(dataType === 'date'){
            switch(sortingRules.direction){
               case 'asc' : return datas.sort((a,b) => this.#dateToTime(b[sortingRules.column]) - this.#dateToTime(a[sortingRules.column]))
               case 'desc' : return datas.sort((a,b) => this.#dateToTime(a[sortingRules.column]) - this.#dateToTime(b[sortingRules.column]))
            }
        }
        switch(sortingRules.direction){
            case 'asc' : return datas.sort((a,b) => frCollator.compare(a[sortingRules.column], b[sortingRules.column]))
            case 'desc' : return datas.sort((a,b) => frCollator.compare(b[sortingRules.column], a[sortingRules.column]))
        }
    }

    getProcessedDatas(processingArgs : { search : string, sorting : {column : string, direction : "asc" | "desc"}, datatype : string }){
        return this.getSortedDatas(processingArgs.search, processingArgs.sorting, processingArgs.datatype)
    }

    #dateToTime(date : string){
        const [day, month, year] = date.split('/')
        return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
    }
}