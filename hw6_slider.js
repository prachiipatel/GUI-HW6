/*
Name: Prachi Patel
E-mail: Prachi_Patel@student.uml.edu
Comp.4610, GUI Programming I
Homework 6: jQuery Slider and Tabs
File: 
Created: 11/29/2017
Last updated by PP: 12/3/2017
*/

$(function() {
        // Rebate Slider
    $("#rebate_slider").slider({
        min: 100,
        max: 20000,
        step: 100,
        value: 100,
        slide: function (event, ui) {
            $("#rebate").val(ui.value);
        }
    });

    var init_val = $("#rebate_slider").slider("option", "value");
    $("#rebate").val(init_val);
    $('#rebate').on('keyup', function () {
        var new_val = $(this).val();
        $("#rebate_slider").slider("option", "value", new_val);
    });

    // Down Payment Slider
    $("#downpay_slider").slider({
        min: 0,
        max: 100,
        step: 10,
        value: 20,
        slide: function (event, ui) {
            $("#downPay").val(ui.value);
        }
    });

    var init_val = $("#downpay_slider").slider("option", "value");
    $("#downPay").val(init_val);
    $('#downPay').on('keyup', function () {
        var new_val = $(this).val();
        $("#downpay_slider").slider("option", "value", new_val);
    });

    // Interest Slider
    $("#interest_slider").slider({
        min: 0.1,
        max: 20.0,
        step: 0.1,
        value: 3,
        slide: function (event, ui) {
            $("#interest").val(ui.value);
        }
    });

    var init_val = $("#interest_slider").slider("option", "value");
    $("#interest").val(init_val);
    $('#interest').on('keyup', function () {
        var new_val = $(this).val();
        $("#interest_slider").slider("option", "value", new_val);
    });

    // Months Slider
    $("#months_slider").slider({
        min: 0,
        max: 72,
        step: 1,
        value: 12,
        slide: function (event, ui) {
            $("#months").val(ui.value);
        }
    });

    var init_val = $("#months_slider").slider("option", "value");
    $("#months").val(init_val);
    $('#months').on('keyup', function () {
        var new_val = $(this).val();
        $("#months_slider").slider("option", "value", new_val);
    });

    // Miles driven per year Slider
    $("#mpy_slider").slider({
        min: 100,
        max: 100000,
        step: 100,
        value: 5000,
        slide: function (event, ui) {
            $("#milesPerYear").val(ui.value);
        }
    });

    var init_val = $("#mpy_slider").slider("option", "value");
    $("#milesPerYear").val(init_val);
    $('#milesPerYear').on('keyup', function () {
        var new_val = $(this).val();
        $("#mpy_slider").slider("option", "value", new_val);
    });

    // Current gallon price Slider
    $("#priceGallon_slider").slider({
        min: 0.1,
        max: 10.0,
        step: 0.1,
        value: 3.0,
        slide: function (event, ui) {
            $("#priceGallon").val(ui.value);
        }
    });

    var init_val = $("#priceGallon_slider").slider("option", "value");
    $("#priceGallon").val(init_val);
    $('#priceGallon').on('keyup', function () {
        var new_val = $(this).val();
        $("#priceGallon_slider").slider("option", "value", new_val);
    });

    //Input prices Slider
    $("#price_slider").slider({
        min: 1,
        max: 20,
        step: 1,
        value: 2,
        slide: function (event, ui) {
            $("#priceNum").val(ui.value);
        }
    });

    var init_val = $("#price_slider").slider("option", "value");
    $("#priceNum").val(init_val);
    $('#priceNum').on('keyup', function () {
        var new_val = $(this).val();
        $("#price_slider").slider("option", "value", new_val);
    });

    //Input mpg Slider
    $("#mpg_slider").slider({
        min: 1,
        max: 20,
        step: 1,
        value: 2,
        slide: function (event, ui) {
            $("#mpgNum").val(ui.value);
        }
    });

    var init_val = $("#mpg_slider").slider("option", "value");
    $("#mpgNum").val(init_val);
    $('#mpgNum').on('keyup', function () {
        var new_val = $(this).val();
        $("#mpg_slider").slider("option", "value", new_val);
    });
});




//creates slider for every Price input field
//function slider_for_price() {
//    $('div#priceContainer div').each(function() {
//        var temp_price_id = $(this).attr('id');
//        var price_id = temp_price_id.replace("Price-Num-","");
//        price_id = "#" + price_id;
//        
//        $(this).slider({
//            min: 1000,
//            max: 200000,
//            step: 100,
//            value: 10000,
//            slide: function(event, ui) {
//                $(price_id).val(ui.value);
//            }
//        });
//    });
//    
//    $('div#priceContainer input').each(function() {
//        var temp_id = $(this).attr('id');
//        var slider_id = temp_id.concat("Price-Num-");
//        var price_id = "#" + temp_id;
//        slider_id = "#" + slider_id;
//        
//        var init_val = $(slider_id).slider("option", "value");
//        $(this).val(init_val);
//        $(this).on('keyup', function() {
//            var new_val = $(this).val();
//            $(slider_id).slider("option", "value", new_val);
//        });
//    });
//}













