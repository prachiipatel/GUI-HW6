/*
Name: Prachi Patel
E-mail: Prachi_Patel@student.uml.edu
Comp.4610, GUI Programming I
Homework 6: jQuery Slider and Tabs
File: 
Created: 11/29/2017
Last updated by PP: 12/3/2017
*/

// jQuery Validation
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$("#clc_form").validate({
    rules: {
        rebate: "required",
        downPay: "required",
        interest: "required",
        months: {required: true, min:1},
        milesPerYear: {required: true, min: 1},
        priceGallon: {required: true, min: 0.5},
        priceNum: {required: true, min: 1},
        mpgNum: {required: true, min: 1}
    },
    message: {
        rebate: "Rebate is required!",
        downPay: "Down payment is required!",
        interest: "Interest is required!",
        months: {required: "Months is required!", min: "Months should at least be 1"},
        milesPerYear: {required: "Miles Driven per Year is required!", min: "Miles Driven per Year should at least be 100"},
        priceGallon: {required: "Price per Gallon is required!", min: "Price per Gallon should at least be 0.1"},
        priceNum: {required: "This field is required!", min: "Number should at least be 1"},
        mpgNum: {required: "This field is required!", min: "Number should at least be 1"}
    }
});