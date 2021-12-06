// import the data from data.js
const tableData = data;

//Reference the html toable using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear out any existing data
    tbody.html("");

    //next, loop through each object in the data
    //and append a row and cells for each value in the row
    //forEach function
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");
        
        //loop through each field in the datarow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filter data using that date
    if (date) {
        //apply filter to table data to only keep rows where datetime val matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filter data. If no date entered, filterdata will be original tabledata
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);