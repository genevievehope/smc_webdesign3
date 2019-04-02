<script>
$(document).ready(function(){
    $(".changeButton").click(function(){
        var red = Math.random()*125 + 180
        var green = Math.random()*125 + 180
        var blue = Math.random()*125 + 180
        var number = Math.random()*50 + 50
        $(this).siblings("h1").css("color", "rgb(" + red + ", " + green + ", " + blue + ")");
        $(this).siblings("h1").css("font-size", number + "px");
    });
</script>