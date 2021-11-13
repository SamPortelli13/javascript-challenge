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
    var inputElement_date = d3.select("#datetime");
    var inputElement_city = d3.select("#city");
    var inputElement_state = d3.select("#state");
    var inputElement_country = d3.select("#country");
    var inputElement_shape = d3.select("#shape");
    // Get the value property of each of the input elements
    var inputValue_date = inputElement_date.property("value");
    var inputValue_city = inputElement_city.property("value");
    var inputValue_state = inputElement_state.property("value");
    var inputValue_country = inputElement_country.property("value");
    var inputValue_shape = inputElement_shape.property("value");

    // Display the value property of each of the input elements
    console.log(inputValue_date);
    console.log(inputValue_city);
    console.log(inputValue_state);
    console.log(inputValue_country);
    console.log(inputValue_shape);

    var filteredData = tableData.filter((sightings) => {

        // By default set the match to false
        var matchesDate = false;
        var matchesCity = false;
        var matchesState = false;
        var matchesCountry = false;
        var matchesShape = false;

        // If user has entered a value to the date field, check if it is included in the data
        if (inputValue_date != '' && sightings.datetime === inputValue_date) {
            matchesDate = true;
        }
        // If the user didn't enter anything in the date field, set match to true by default
        if (inputValue_date == '') {
            matchesDate = true;
        }
        // If user has entered a value to the city field, check if it is included in the data
        if (inputValue_city != '' && sightings.city === inputValue_city.toLowerCase()) {
            matchesCity = true;
        }
        // If the user didn't enter anything in the city field, set match to true by default
        if (inputValue_city == '') {
            matchesCity = true;
        }
        // If user has entered a value to the state field, check if it is included in the data
        if (inputValue_state != '' && sightings.state === inputValue_state.toLowerCase()) {
            matchesState = true;
        }
        // If the user didn't enter anything in the state field, set match to true by default
        if (inputValue_state == '') {
            matchesState = true;
        }
        // If user has entered a value to the country field, check if it is included in the data
        if (inputValue_country != '' && sightings.country === inputValue_country.toLowerCase()) {
            matchesCountry = true;
        }
        // If the user didn't enter anything in the country field, set match to true by default
        if (inputValue_country == '') {
            matchesCountry = true;
        }
        // If user has entered a value to the shape field, check if it is included in the data
        if (inputValue_shape != '' && sightings.shape === inputValue_shape.toLowerCase()) {
            matchesShape = true;
        }
        // If the user didn't enter anything in the shape field, set match to true by default
        if (inputValue_shape == '') {
            matchesShape = true;
        }

        // Will return true if all fields match
        return matchesDate && matchesState && matchesCountry && matchesCity && matchesShape;

    });

    //  Refresh the HTML table with the filtered data
    var tbody =d3.select("tbody")
    filteredData.forEach(function(newsightings) {
       // console.log(sightings);
        var row = tbody.append("tr");
    
        Object.entries(newsightings).forEach(function([key,value]){
           // console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});