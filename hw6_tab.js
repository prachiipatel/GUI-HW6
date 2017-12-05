/*
Name: Prachi Patel
E-mail: Prachi_Patel@student.uml.edu
Comp.4610, GUI Programming I
Homework 6: jQuery Slider and Tabs
File: 
Created: 11/29/2017
Last updated by PP: 12/3/2017
*/

// Creates new function
// *********** New Tag Creation Function *************
    function Creating_New_Tag(){
        // hide checkbox for deleting process
        $('#tabs ul li input').css("display","none");
        $('#all-delete-confirm-tab').css("display","none");
        deleting_all_tab_active = false;

        var num_tabs = 0;
        $('div#tabs ul li').each(function() {
           num_tabs = ($(this).attr('id'));
        });

        if (num_tabs != undefined){
          num_tabs = num_tabs.replace("tab-","");
          num_tabs = num_tabs.replace("-li","");
        } else {
          num_tabs = 0;
        }
        num_tabs = parseInt(num_tabs) + 1;

        // Tag title & parameters
        var Comp_Title_Name = ($("#comparison_name").val()).trim();
            
        var incentives = ($("#rebate").val()).trim();
        var down_payment = ($("#downPay").val()).trim();
        var interest = ($("#interest").val()).trim();
        var months = ($("#months").val()).trim();
        var miles_driven = ($("#milesPerYear").val()).trim();
        var gallon_price = ($("#priceGallon").val()).trim();

        $("div#tabs ul").append(
            "<li id='tab-" + num_tabs + "-li'><a href='#tab-" + num_tabs +
                 "'>" + Comp_Title_Name +
                 "<button id='tab-" + num_tabs + "-btn' class='delete-tab-btn'>X</button>" +
            "</a>" +
            "<input id='tab-" + num_tabs + "-cb'  class='delete-tab-cb' type='checkbox'>" +
            "</li>"
        );

        $("div#tabs").append(
            "<div id='tab-" + num_tabs + "'><br>" +
               "<label id='tab-" + num_tabs + "-label'>Set Parameters:-</label><br><br>" +
               "<div class='tag-parameters'>" +
                 "<label id='tab-" + num_tabs + "-label'>Miles Driven/Year :"+ miles_driven + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Months :"+ months + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Down Payment :"+ down_payment + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Interest :"+ interest + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Incentives :"+ incentives + "</label><br><br>" +
                 "<label id='tab-" + num_tabs + "-label'>Gallon Price :"+ gallon_price + "</label><br><br>" +

               "</div><br><br>" +
               "<div class='table' id='tab-" + num_tabs + "-table'></div>" +
            "</div>"

        );
        $("div#tabs").tabs("refresh");

       return num_tabs;

    }

$(document).ready(function(){

  $(
     function() {
           $( "#tabs" ).tabs();
     }
  );

  // creating tabs
  $(document).on('click','#tabs ul li a', function () {
            $('#tabs ul li a').removeClass('active');
            $(this).addClass('active');
    if (deleting_all_tab_active == false ) {
            $('#tabs ul li a button').css("display","none");
            var v_href = $(this).attr('href');
            console.log(v_href);
            var btn_id = v_href.replace("#","");
            btn_id = btn_id.concat("-btn");
            document.getElementById(btn_id).style.display ="inline-block";
    }
  });

  // Select and delete tabs
  $(document).on('click','#tabs ul li a button', function () {
            var sel_btn_id = $(this).attr('id');

            // converting btn-id to li-id
            var v_li_id = sel_btn_id.replace("btn","li");
            v_li_tag_id = "#" + v_li_id;
            $d(v_li_tag_id).remove();

            // converting li-id for content-id
            v_li_id = v_li_id.replace("-li","");
            v_li_div_id = "#" + v_li_id;
            $d(v_li_div_id).remove();
  });

  var deleting_all_tab_active = false;
  $("button#all-delete-tab").click(function() {
       $('#tabs ul li input').prop("checked", false);
       $('#tabs ul li a button').css("display","none");
       if (deleting_all_tab_active == false){
            $('#tabs ul li input').css("display","inline-block");
            deleting_all_tab_active = true;
            $('#all-delete-confirm-tab').css("display","block");
       } else {
            $('#tabs ul li input').css("display","none");
            $('#all-delete-confirm-tab').css("display","none");
            deleting_all_tab_active = false;
       }
  });

  $("button#all-delete-confirm-tab").click(function() {
            var selected = [];
            $('#tabs ul li input:checked').each(function() {
               selected.push($(this).attr('id'));
            });
            console.log(selected);

         $('#tabs ul li input:checked').each(function() {
            sel_cb_id = ($(this).attr('id'))

            // converting cb-id to li-id
            var v_li_id = sel_cb_id.replace("cb","li");
            v_li_tag_id = "#" + v_li_id;
            $d(v_li_tag_id).remove();

            // converting li-id for content-id
            v_li_id = v_li_id.replace("-li","");
            v_li_div_id = "#" + v_li_id;
            $d(v_li_div_id).remove();
         });
  });




});
