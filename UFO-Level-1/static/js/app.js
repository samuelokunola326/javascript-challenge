// from data.js
var tableData = data;

// YOUR CODE HERE!

// refernce table body 
var tbody = d3.select("tbody");

// console.log the ufo data 
console.log(tableData);

// // loop through data and console.log ufoData
// tableData.forEach(function(ufoData){
//     console.log(ufoData);
// });


// // using d3 to append tr element for each object in ufoData
// tableData.forEach(function(ufoData){
//     console.log(ufoData);
//     var row = tbody.append("tr");
// });


// looping through the table data
tableData.forEach((ufoData) => {
    // using d3 to append a tr element for each Object in the Array of objects 
    var row = tbody.append("tr");
    
    // then using the objects.entries to console log the objects 
    Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);
        
        //append the values to each row and input into cells
        var cell = row.append("td");
        cell.text(value);
    });
});
