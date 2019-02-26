$(document).ready(function(){

// Slide content of the About page
    $("#moreAbout1").hide();
    $("#moreAbout2").hide();
    
    $("#moreAbout").click(function(){
        $("#moreAbout1").slideDown(2000);
        $("#moreAbout2").slideDown(2000);
    });



// Fade in the images on the About, Contact and Payment pages
    $("#about").hide().fadeIn(3000);
    $("#contact").hide().fadeIn(3000);
    $("#payment").hide().fadeIn(3000);



// Drop down menu - for Total
    $("#menuTotal").hide();

    $("#cart").on({
        mouseenter: function(){
            $("#menuTotal").show();
        },
        mouseleave: function(){
            $("#menuTotal").hide();
        }
    });



// Drop down menu - for Catalogue
    $("#menuCatalogue").hide();

    $("#catalogue").on({
        mouseenter: function(){
            $("#menuCatalogue").show();
        },
        mouseleave: function(){
            $("#menuCatalogue").hide();
        }
    });



// Animate images on Home page
    $("#banner").hide().slideDown(1000);
    $("#imgApple").hide().fadeIn(1000).fadeOut(2000).fadeIn(3000);
    $("#imgOrange").hide().fadeIn(2000).fadeOut(3000).fadeIn(4000);
    $("#imgTomato").hide().fadeIn(3000).fadeOut(4000).fadeIn(5000);
    


// Animate cart button
    $("#addCart").click(function(){
        $("#addCart").animate({left:'250px'}, "slow");
        $("#addCart").animate({left:'0px'}, "slow");
        $("img").fadeOut(1000).fadeIn(1000);
        setTimeout(function(){$("body").css("background-color", "#80ff80")},1000);
        setTimeout(function(){$("body").css("background-color", "white")},2000)
    });



// Change the background when cancelling or confirming orders
    $("#confirm").click(function(){
        setTimeout(function(){$("body").css("background-color", "#80ff80")},1000);
        setTimeout(function(){$("body").css("background-color", "white")},2000)
    });

    $("#clearCart").click(function(){
        setTimeout(function(){$("body").css("background-color", "#ff4d4d")},1000);
        setTimeout(function(){$("body").css("background-color", "white")},2000)
    });



// Animate arrow
    $("#Arrow").hide();

    $(".cartButton").click(function(){
        $("#Arrow").show().animate({top:'+=1000px'}, 1000, function(){$("#Arrow").css({"top":"150px","right":"200px"}).hide()});
        setTimeout(function(){$("body").css("background-color", "#80ff80")},1000);
        setTimeout(function(){$("body").css("background-color", "white")},2000)
    });



// Change opacity when mouse-over images
    $(".img-thumbnail").on({
        mouseenter: function(){
            $(this).fadeTo("fast", 0.5);
        },
        mouseleave: function(){
            $(this).fadeTo("slow", 1);
        }
    });



// Animate info on Contacts page
    $("#address").hide().fadeIn(1000)
    setTimeout(function(){$("#address").css("color", "green")},1000);
    setTimeout(function(){$("#address").css("color", "black")},2000);
    $("#telephone").hide().fadeIn(2000);
    setTimeout(function(){$("#telephone").css("color", "green")},2000);
    setTimeout(function(){$("#telephone").css("color", "black")},3000);
    $("#email").hide().fadeIn(3000);
    setTimeout(function(){$("#email").css("color", "green")},3000);
    setTimeout(function(){$("#email").css("color", "black")},4000);



// Animate info on Payment page
    $("#bank").hide().fadeIn(1000)
    setTimeout(function(){$("#bank").css({"background-color":"green","color":"white"})},2000);
    setTimeout(function(){$("#bank").css({"background-color":"white","color":"black"})},3000);
    setTimeout(function(){$("#bank").css({"background-color":"green","color":"white"})},4000);
    setTimeout(function(){$("#bank").css({"background-color":"white","color":"black"})},5000);

});