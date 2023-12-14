React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model

The Table Model will be needed to define all the relationships between your displayed table and your datas object.

Let's now build this model. Let's do it into the page component that will host your react table.

A - Instanciate the TableModel and give it a name :

<img src="/public/1-createmodel.png"/>

This model will be key in order to define the following properties :

- Which datas should be extracted from your datas object.
- Which types are those datas. Mandatory to auto-define a sorting algorithm.
- Which name should be given to your columns (your th tag content).
- Are some of your columns sortable ?

B - Using the ColumnBuilder, you should now add some columns to your model :

<img src="/public/2-addcolumns.png"/>

As expected, with :

- setColumnName() : I give a name to my column.
- setDatatypeAsString() : I define the type of datas that should populate my column. Here it should be populated with strings.
- setAccessor() : I tell my model which key in my datas object is associated with the value needed to fill my column.
- SetSortability() : I indicates to my model if this column should be sortable.

Here are the different methods to define your datatypes :

- setDatatypeAsString()
- setDatatypeAsNumber()
- setDatatypeAsDate()

As an example, building my model that way would make sense this if I had this kind of datas object :

<img src="/public/3-userdatas.png"/>

I would end up with the following three sortable columns table :

**_ img needed _**

## Step 2 - Using your component & passing the right props

Now that your tableModel is defined

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
