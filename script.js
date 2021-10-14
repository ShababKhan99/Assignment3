let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    var grid = document.getElementById("grid");
    var row = grid.insertRow(-1);
    for (var i=0; i < numCols; i++) {
        var newCell = row.insertCell(i);

	}
    numRows++;
    alert("Clicked Add Row")
}

//Add a column
function addC() {
    var grid = document.getElementById("grid");
	for (var i=0; i < grid.rows.length; i++) {
		var newCell = grid.rows[i].insertCell(-1);
	}
    numCols++;
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(-1);
    numRows--;
    alert("Clicked Remove Row")
}

//Remove a column
function removeC() {
    var allRows = document.getElementById('grid').rows;
    for (var i=0; i< numRows; i++) {
        allRows[i].deleteCell(-1); 
    }
    numCols--;
    alert("Clicked Remove Col")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    var table = document.getElementById("grid");
    var cells = document.getElementsByTagName("td");
    for(var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
    alert("Clicked Fill All")
}

function clearAll(){
    var table = document.getElementById("grid");
    var cells = document.getElementsByTagName("td");
    for(var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
    alert("Clicked Clear All")
}

function fillU(){
    var table = document.getElementById("grid");
    var cells = document.getElementsByTagName("td");
    for(var i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor == "white"){
            cells[i].style.backgroundColor = colorSelected;
        }
    }
    alert("Clicked Fill All Uncolored")
}