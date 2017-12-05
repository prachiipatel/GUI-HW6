/*
Name: Prachi Patel
E-mail: Prachi_Patel@student.uml.edu
Comp.4610, GUI Programming I
Homework 6: jQuery Slider and Tabs
File: 
Created: 11/29/2017
Last updated by PP: 12/3/2017
*/

function priceFields() {
    // Number of inputs to create
    var number = document.getElementById("priceNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("priceContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    // Append a line break 
    container.appendChild(document.createElement("br"));
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Price " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.id = "Price-Num-" + i;
        input.name = "priceNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
    
    // creates slider for every price input
    slider_for_price();
}

function mpgFields() {
    // Number of inputs to create
    var number = document.getElementById("mpgNum").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("mpgContainer");
    // Clear previous contents of the container
    var i;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    // Append a line break 
    container.appendChild(document.createElement("br"));
    for (i = 0; i < number; i++) {
        // Append a node with a random text
        container.appendChild(document.createTextNode("Mpg " + (i + 1) + ":  "));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.id = "Mpg-Num-" + i;
        input.name = "mpgNum" + i;
        input.setAttribute("value", "0");
        input.setAttribute("type", "number");
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
    
    //creates slider for every Mpg input field
    slider_for_mpg();
}

// returns Final cost including rebate, down payment, and interest
function total_cost(price, rebate, down_payment_rate, interest) {
    var cost = price - rebate;
    var actual_cost = cost - (cost * down_payment_rate / 100);
    var cost_with_interest = actual_cost + (actual_cost * interest / 100);
    
    return cost_with_interest;
}

// returns values of each cell
function table_cell(price, mpg) {
    
    // read variables
    var rebate = document.getElementById("rebate").value;
    var down_payment = document.getElementById("downPay").value;
    var interest = document.getElementById("interest").value;
    var months = document.getElementById("months").value;
    var mile_per_year = document.getElementById("milesPerYear").value;
    var gallon_price = document.getElementById("priceGallon").value;
    
    
    var final_cost = total_cost(price, rebate, down_payment, interest);
    var price_per_mile = gallon_price / mpg;
    var cost_per_mile = price_per_mile + (final_cost / mile_per_year);
    var cost_per_month = price_per_mile + (final_cost / months);
    
    var cell_value = "$/Mile: " + Number((cost_per_mile).toFixed(2)) + " " + "$/Month: " + Number((cost_per_month).toFixed(2));
    
    return cell_value;
    
}

function addTable() {
    var columNum = document.getElementById("priceNum").value;
    var rowNum = document.getElementById("mpgNum").value;
    var i, j;
    
    var heading = new Array();
    // get each price values and stored in to Array
    heading[0] = "Price/Fuel consumption";
    for (i = 1; i <= columNum; i++) {
        var pID = "Price-Num-" + (i-1);
        var price_value = document.getElementById(pID).value;
        heading[heading.length] = price_value;
    }

    var stock = new Array();
    for (i = 0; i < rowNum; i++) {
        stock[i] = new Array();
    }
    // get each mile per gallon value and stored in to each array of first element
    for (i = 0; i < columNum; i++) {
        //input.id = "Price-Num-" + i;
        var mID = "Mpg-Num-" + (i);
        var mpg_value = document.getElementById(mID).value;
        //var pNum = "priceNum" + i;
        stock[i][0] = mpg_value;
        //document.getElementsByName("pNum").value;
    }
    
    // counts value of cells
    for (i = 1; i <= columNum; i++) {
        for (j = 0; j < rowNum; j++) {
            stock[j][i] = table_cell(heading[i], stock[j][0]);
        }
    }
    
    // create table
    var table = "<table>";
    
    table += "<tr>";
    for (i = 0; i <= columNum; i++) {
        table += "<th>" + heading[i] + "</td>";
    }
    table += "</tr>";
    
    for (i = 0; i < stock.length; i++) {
        table += "<tr>";
        for (j = 0; j < stock[i].length; j++) {
            table += "<td>" + stock[i][j] + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    
    document.getElementById("displayTable").innerHTML = table;
    return false;
}

