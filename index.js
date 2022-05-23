$("h1").addClass("bigtitle margin-50");
// $("button").text("Don't click me");
 $("button").html("<em>Don't Click </em>")
// $("a").attr("href","https://www.yahoo.com");

/* $("button").click(function(){
   $("h1").css("color","purple");
}); */

 $("input").keypress(function(event){
  $("h1").text(event.key);
}); 

/* $("h1").on("mouseover",function(){
  $("h1").css("color","purple");
}); */

$("button").on("click",function(){
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").Toggle();
    // $("h1").hide();
    // $("h1").show();
    // $("h1").slideUp();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin: "20%"});
    $("h1").slideUp().slideDown().animate({opacity: 0.6}).animate({margin: "0% 4%"}).animate({margin: "0% 20%"}).animate({margin: "0% 4%"}).animate({margin: "4% 4%"}).animate({opacity: 1});
});