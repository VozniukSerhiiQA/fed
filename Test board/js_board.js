var id=0;

function black() {

    //get reference to the table
    var tbl = document.getElementById('tbl');

    //loop for the rows
    for (var r = 0; r <5; r++) {

        //creating table rows
        var row = document.createElement("tr");

        //loop handles the columns
        for (var c=0; c<5; c++) {

            //create table cells
            var cell = document.createElement("td");
            //set cells index
            cell.id = id++;

                if(cell.id % 2==0) {
                    cell.style.background = "black";
                }
            //append cells to the rows
            row.appendChild(cell);
            //set index
            cell.innerHTML =id;
        }

        //append these row to the table
        tbl.appendChild(row);
    }
}