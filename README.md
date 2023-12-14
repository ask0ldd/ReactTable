React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model

Let's build this model into the page component that will host your react table.

A - Instanciate the TableModel and give it a name :

<img src="/public/1-createmodel.png"/>

This model will be key in order to define the following properties :

- Which datas should be extracted from your datas object.
- Which types are those datas.
- Which name to give to your columns.
- Are some of your columns sortable ?

B - Using the ColumnBuilder, you should now add some columns to your model :

<img src="/public/2-addcolumns.png"/>

As an example, building my model that way would make sense this if I had this kind of datas object :

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
