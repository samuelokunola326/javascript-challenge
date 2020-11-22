// from data.js
var tableData = data;

// YOUR CODE HERE!

// refernce table body 
var tbody = d3.select("tbody");

// console.log the ufo data 
console.log(tableData);

// creating a function to loop through the table data
function tableLoop(x){
    
    x.forEach((x) => {
        // using d3 to append a tr element for each Object in the Array of objects 
        var row = tbody.append("tr");
        
        // then using the objects.entries to console log the objects 
        Object.entries(x).forEach(([key, value]) => {
            console.log(key, value);
            
            //append the values to each row and input into cells
            var cell = row.append("td");
            cell.text(value); 
        });
    });

}

// Creating table for initial view of ufo data 
tableLoop(tableData);

// selecting the filter button and date time filter form to be used as event handlers
var ft = d3.selectAll("#filter-btn");
var form = d3.selectAll("form");


 // creating a function that will filter data by datetime based on user input 
//  function filterfunc(x) {
//     var filteredData = tableData.filter(uDate => uDate.datetime === x);
//     console.log(filteredData);
// }

// completing the eventhandler function 
function runEnter() {

    // prevent default page from loading
    d3.event.preventDefault();

    // refernce table body
    tbody.html("")

    // select the input element and get the HTML 
    var inputElement = d3.select("#datetime");

    // geting the value of input element 
    var inputValue = inputElement.property("value");
    
    // displaying value entered for date form
    console.log(inputValue);

    // using if function to check the date input value and filtering by that date if a value exist if not displaying all data 
    if (inputValue) {
        var t = tableData.filter(uDate => uDate.datetime === inputValue);
        console.log(t)
        tableLoop(t)
    } else {tableLoop(tableData)}


     
}

// create an event handler for clicking the filter table button or presing enter key
ft.on("click", runEnter);
form.on("submit",runEnter);







