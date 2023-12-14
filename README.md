React Table Component Package (WIP)

DOCUMENTATION

## Step 1 - Build your Table Model into the page component hosting your table

A - Instanciate the TableModel and give it a name :

const tableModel = new TableModel({id : "current_employees"})
<img src="/public/1-createmodel.png"/>

B - Using the ColumnBuilder, add columns to this model so that it can extract the right datas out of your datas object :

const tableModel = new TableModel({id : "current_employees"})
.tableModel.addColumn(ColumnBuilder.startBuilder().setColumnName("First Name").setDatatypeAsString().setAccessor("firstName").setSortability(true).build())
.tableModel.addColumn(ColumnBuilder.startBuilder().setColumnName("Last Name").setDatatypeAsString().setAccessor("lastName").setSortability(true).build())
tableModel.addColumn(ColumnBuilder.startBuilder().setColumnName("Department").setDatatypeAsString().setAccessor("department").setSortability(true).build())

Building my model that way would make this if I had, for example, this kind of datas object :

const usersDatasTen = [{"firstName":"Dawn","lastName":"Greenshiels","street":"3 Center Pass","city":"Houston","zipCode":"77255","state":"TX","birthDate":"01/07/2022","startingDate":"20/05/2023","department":"Human Ressources"},
{"firstName":"Artemas","lastName":"FitzAlan","street":"9334 Forest Road","city":"Greensboro","zipCode":"27415","state":"NC","birthDate":"07/12/2022","startingDate":"26/09/2022","department":"Human Ressources"}]

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
