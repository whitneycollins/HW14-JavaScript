// get table references
var tbody = d3.select("tbody");

// loop through each row of data from data.js
data.forEach((sightings) => {
    //  append a row and cells for each value in the row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.entries(sightings).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var filteredData = data;

  // Grab the datetime value from the filter
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value").trim();
  
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(data => data.datetime === inputValue);

    // clear out any existing data
    tbody.html("")

    //displayTable(tableData);
    filteredData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })

});