// from data.js
var tableData = data;
var tbody =d3.select("tbody")
//console.log(tableData);

tableData.forEach(function(sightings) {
   //console.log(sightings);
   var row = tbody.append("tr");

   Object.entries(sightings).forEach(function([key,value]){
      // console.log(key,value);
       var cell = tbody.append("td");
       cell.text(value);
  });
})
var button = d3.select("#filter-btn");

button.on("click",function() {
    //console.log("button clicked")
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the table
    var table1 = document.getElementById("ufo-table-body"); 
    table1.innerHTML =''  

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    if(inputValue === "") {
        filteredData = tableData;
    }  else {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    }
    //  Refresh the HTML table with the filtered data
    var tbody =d3.select("tbody")
    filteredData.forEach(function(sightings) {
       // console.log(sightings);
        var row = tbody.append("tr");
    
        Object.entries(sightings).forEach(function([key,value]){
           // console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});