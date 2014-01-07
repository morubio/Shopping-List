$(document).ready(function(){
    //when the add button is clicked  
    //check to see if the input field is empty
    //if so alert 
    //if input field has text then append an li with class="buy_item" and the text to the ol with class="buy"
    //then empty the input field
    $('button').click(function(){
        var new_item = $("input[name=addItem]").val();
        if(new_item === ""){
            alert("You must enter a new item");
        }
        else {
            $('.buy').append('<li class="buy_item">' + new_item +'</li>');
            $("input[name=addItem]").val("");
        }
    });
    
    //when the enter key is pressed in the input field
    //check to see if the input field is empty
    //if so alert 
    //if input field has text then append an li with class="buy_item" and the text to the ol with class="buy"
    //then empty the input field
    //NOT WORKING
    $('input').keypress(function(e) {
        if(e.which == 13) {
            if('input'=== ""){
                alert("You must enter a new item");
            }
            else {
                $('.buy').append('<li class="buy_item">' + new_item +'</li>');
                $("input[name=addItem]").val("");
            }
        } 
    });
    
    //make the list items of the ol sortable using jqueryUI
    //NOT WORKING
    $(function(){
        $('ol').sortable();
    });
    
    //when hovering on a list item in the ol make the list item ´s font the color black
    //NOT WORKING
    $('.buy').on('hover', '.buy_item', function( event ) {
            $(this).addClass('black');
        });
    
    //when clicking on a list item in the ol with class=".buy_item" move the list item from the ol to the ul as a list item with class="bought_item"
    //NOT WORKING    
    var bought_item = $('.buy li option:selected');
    
    $('.buy').on('click', '.buy_item', function (event) {
        $('<li class="bought_item">'+ bought_item +'</li>').appendTo('.bought');
        $(this).remove();
    });
    
    //$(document).on('click','.buy_item',function(){
    //    $('.bought').append('<li class="bought_item">'+ bought_item +'</li>');
    //    $(this).remove();
      //  bought_item.appendTo('.bought');
    //});
    
    //$('.buy_item').click(function(){
    //    return !$('.buy option:selected').appendTo('<li class="bought_item">'+ bought_item +'</li>');
    //});
    
    //when double clicking on a list item in the ul with with class="bought_item" remove it
    $(document).on('dblclick','.bought_item',function(){
        $(this).remove();
    });
    
});