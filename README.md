React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model

The Table Model will be needed to define all the relationships between your displayed table and your datas object.

Let's now build this model into the page component that will host your react table.

**A - Instanciate the TableModel and give it a name :**

<img src="/public/1-createmodel-2.png"/>

This model will be key in order to define the following properties :

- Which specific datas should be extracted from your datas object.
- Of which types those datas are. Mandatory since it will auto-define a sorting algorithm (sortability being activated or not).
- Which name should be given to your columns (your th tag content).
- Are some of your columns sortable ?

**B - Using the ColumnBuilder, you should now add some columns to your model :**

<img src="/public/2-addcolumns-2.png"/>

As expected, with :

- setColumnName() : I give a name to my column.
- setDatatypeAsString() : I define the type of datas that should populate my column. Here it should be populated with strings.
- setAccessor() : I tell my model which key in my datas object is associated with the value needed to fill my column.
- SetSortability() : I indicates to my model if this column should be sortable.

Here are the different methods to define your datatypes :

- setDatatypeAsString()
- setDatatypeAsNumber()
- setDatatypeAsDate()

As an example, building my model this way apply for such a datas object :

<img src="/public/3-userdatas-2.png"/>

I would end up with the following three sortable columns table :

<img src="/public/5-tableexample.png"/>

## Step 2 - Using your component

Now that your tableModel is defined, you can simply use our DatasTable component; passing it your tableModel and your datas Object as props :

<img src="/public/4-component-2.png"/>

## Subcomponents

All those components are integrated by default to the Table component.

<img src="/public/6-subcomponents.png">
