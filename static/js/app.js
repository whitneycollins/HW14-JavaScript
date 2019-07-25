// from data.js
var filteredData = data;

// YOUR CODE HERE!

// 'Filter Table' button
var button = d3.select("#filter-btn");

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and  adds new rows of data for each UFO sighting.

// function to display UFO sightings
// function displayTable(sightings) {
//     var tbody = d3.select("tbody");
//     sightings.forEach((record) => {
//       var row = tbody.append("tr");
//       Object.entries(record).forEach(([key, value]) => {
//         var list = row.append("td");
//         list.html(value);
//       });
//     });
//   };

var tbody = d3.select("tbody");

data.forEach((sightings) => {
var row = tbody.append("tr");
Object.entries(sightings).forEach(([key,value]) =>{

    var cell = row.append("td");
    cell.text(value);
});

});

  // initial display of all UFO sightings
console.log(tableData);
//displayTable(tableData);

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the date/time column to find rows that match user input.

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value").trim();
  
    var filteredData = filteredData.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);
    //displayTable(tableData);
    filteredData.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        })
        
        })

});