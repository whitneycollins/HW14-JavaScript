var tbody = d3.select("tbody");

data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var filteredData = data;

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value").trim();
  
    filteredData = filteredData.filter(data => data.datetime === inputValue);

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