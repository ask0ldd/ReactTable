React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model into the page component hosting your table

A - Instanciate the TableModel and give it a name :

<img src="/public/1-createmodel.png"/>

B - Using the ColumnBuilder, add columns to this model so that it can extract the right datas out of your datas object :

<img src="/public/2-addcolumns.png"/>

Building my model that way would make this if I had, for example, this kind of datas object :

<img src="/public/3-userdatas.png"/>

My goal would then be :

To display only to create a table with three columns extracting the datas : firstName, lastName & department.

The tableDatas object is an array containing all the datas you aim at displaying.

Here is an example of

In depth :

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
