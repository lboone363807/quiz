
$(".answer").on("click", function (e) {
    // e.target.classList.add("selected");
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $("#enter").removeAttr("disabled");
})
$("#enter").on("click", function ()
{
    if ($("#3").hasClass("selected")) {
        $("#correct").show();
    } else {
        $("#incorrect").show();
    }
    $(".answer").off();
    $("#enter").off();
})