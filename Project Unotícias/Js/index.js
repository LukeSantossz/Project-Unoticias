$(document).ready(function(){
    $("#logForm").on("click",function(){
        $(".formCad").css("display","none")
        $(".logForm").css("display","flex")
        $(".form-button").css("display", "none")

        $(".form-image").html("");
        var image = `<img src="../Pictures/undraw2.png" />`
        $(".form-image").html(image);
    })
    $("#continuebtn").on("click",function(e){
        e.preventDefault()
        e.stopPropagation()
        $(".formCad").css("display","none")
        $(".logForm").css("display","flex")
        $(".form-button").css("display", "none")

        $(".form-image").html("");
        var image = `<img src="../Pictures/undraw2.png" />`
        $(".form-image").html(image);
    })
})