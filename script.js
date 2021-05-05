$(".em").click(function() {
    $(".emText").text("You chose Emma!");
    $(".julian").hide();
    $(".lottie").hide();
    $(".jace").hide();
    $(".angel").hide();
    $(".reset").show();
    $(".firstEmma").show();
    $(".emText").show();
});
$(".julian").click(function() {
    $(".julianText").text("You chose Julian!");
    $(".lottie").hide();
    $(".jace").hide();
    $(".angel").hide();
    $(".em").hide();
    $(".emma").hide();
    $(".reset").show();
    $("julianText").show();
    $(".secondJulian").show();

});

$(".lottie").click(function() {
    $(".lottieText").text("You chose Charlotte!");
    $(".julian").hide();
    $(".jace").hide();
    $(".angel").hide();
    $(".em").hide();
    $(".emma").hide();
    $(".reset").show();
    $(".lottieText").show();
    $(".thirdLottie").show();
});

$(".angel").click(function() {
    $(".jaceText").text("You chose Jace!");
    $(".julian").hide();
    $(".lottie").hide();
    $(".em").hide();
    $(".emma").hide();
    $(".reset").show();
    $(".jaceText").show();
    $(".fourthJace").show();
});
$(".reset").click(function() {
    $(".julian").show();
    $(".lottie").show();
    $(".jace").show();
    $(".angel").show();
    $(".emma").show();
    $(".em").show();
    $(".firstEmma").hide();
    $(".emText").hide();
    $("julianText").hide();
    $(".secondJulian").hide();
    $(".lottieText").hide();
    $(".thirdLottie").hide();
    $(".jaceText").hide();
    $(".fourthJace").hide();
});
