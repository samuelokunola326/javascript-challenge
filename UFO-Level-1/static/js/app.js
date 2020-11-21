// from data.js
var tableData = data;

// YOUR CODE HERE!

// refernce table body 
var tbody = d3.select("tbody");

// console.log the ufo data 
console.log(tableData);

// loop through data and console.log ufoData
tableData.forEach(function(ufoData){
    console.log(ufoData);
});


// using d3 to append tr element for each object in ufoData
tableData.forEach(function(ufoData){
    console.log(ufoData);
    var row = tbody.append("tr")
});

