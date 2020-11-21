// from data.js
var tableData = data;

// YOUR CODE HERE!

// refernce table body 
var tbody = d3.select("tbody");

// console.log the ufo data 
console.log(tableData);

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

// selecting the filter button and date time filter form
var ft = d3.select("#filter-btn");
var form = d3.select("form");


// create an event handler for clicking the filter table button or presing enter key
ft.on("click", runEnter);
Form.on("click", runEnter);

// completing the eventhandler function 
function runEnter() {

    // prevent default page from loading
    d3.event.preventDefault();

    // select the input element and get the HTML 
    var inputElement = d3.select("#datetime");

    // geting the value of input element 
    var inputValue = inputElement.property("value");

    // filter data by datetime based on user input 
    var filteredData = tableData.filter(uDate => uDate.datetime === inputValue)


}




