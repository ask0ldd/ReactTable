React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model into the page component hosting your table

A - Instanciate the TableModel and give it a name :

const tableModel = new TableModel({id : "current_employees"})

B - Add columns to this model so that i can extract the right datas out of your own tableDatas :

The tableDatas object is an array containing all the datas you aim at displaying.

The Table Model is defining with those class and types :

class TableModel{
#columns : Array<IColumnDefElement>
#id : string
}

export interface IColumnDefElement
{
th : string
accessor : string
sortable : boolean
datatype : string
}
