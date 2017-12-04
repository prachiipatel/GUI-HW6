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

// Down Payment
$("#downpay_slider").slider({
    min: 0,
    max: 50000,
    step: 100,
    value: 10000,
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

// Interest
$("#interest_slider").slider({
    min: 0.1,
    max: 20.0,
    step: 0.1,
    value: 3.4,
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

// Months
$("#months_slider").slider({
    min: 0,
    max: 48,
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

// Miles driven per year
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

// Current gallon price
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

//Input prices
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

//Input mpg
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

