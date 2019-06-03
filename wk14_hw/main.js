$(document).ready(function(){
    
    console.log("hiiiiiii");
    var cartItems = 0;

    
    $(".cartAddition").click(function(){
        cartItems ++;
        console.log("cart items: " + cartItems)

        updateCount();
    });

    function updateCount(){
        $( ".cartCount" ).empty();
        $( ".cartCount" ).append(cartItems + '    <i class="fa fa-shopping-cart"></i>');
    }
    
    updateCount();
    

    $(".sortBeaters").click(function(){
        toggleBeaters();
    });

    function toggleBeaters(){
        beater = document.getElementsByClassName("beater")
        console.log(beater)
        $("beater").hide();

        // if (beater.style.display == ""){
        //     beater.style.display == "none"
        // }
        // else if (beater.style.display == "block"){
        //     beater.style.display ==
        // }

        // if beater.style == "block"{
        //     beater.style == "none";
        // }
        // else{
        //     beater.style == "block";
        // }
    }


    $(".myFunction").click(function(){
        burgerMenu();
    });

    function burgerMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
    }

    $('.modal-popper').click(function(){
        $('.modal').modal( {backdrop: 'static'} );
    });
    
    










    // console.log("it got here");

    // $('.carousel').carousel({
    //     interval:   3000, 
    //     keyboard:   true
    // });

    // $('.carousel-pauser').click(function(){
    //     $('.carousel').carousel('pause');
    // });

    // $('.carousel').on('slid.bs.carousel', function(event){
    //     console.log(event);
    // });

    // $('.modal-popper').click(function(){
    //     $('.modal').modal( {backdrop: 'static'} );
    // });

    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //       x.className += " responsive";
    //     } else {
    //       x.className = "topnav";
    //     }
    // }

    //     /*
    // * FIXING A FIREFOX ONLY BROWSERBUG.
    // * Because of an still unfixed bug, Firefox only can handle xlinks to SVG fragments as URL encoded DataURIs.
    // * This script fixes this by finding and URLencoding all inline fragments within an SVG.
    // */

    // (function(){
    //     var ua = navigator.userAgent;

    //     if(!/firefox/gi.test(ua)){return;}
    //     // Browsersniffing. Yes, I'm lazy.

    //     var fragmentID;
    //     var feImgs = document.querySelectorAll("feImage");
    //     var cssList = document.styleSheets;
    //     var cssAnimations = {};

    //     for (var i = 0; i < cssList.length; i++){
    //         var css = cssList[i];

    //         for (var j = 0; j < css.cssRules.length; j++){
    //             var rule = css.cssRules[j];

    //             //is rule a keyframe animation?
    //             if (rule.type === 7){
    //                 cssAnimations[rule.name] = rule.cssText;
    //             }
    //         }
    //     }
                
    //     for (var i=0, j=feImgs.length; i<j; i++) {
    //         fragmentID = feImgs[i].getAttribute("xlink:href") || feImgs[i].getAttribute("xlink");

    //         if(/#/.test(fragmentID) && !/data\:image\/svg\+xml/.test(fragmentID)){
    //             fragmentAsURIintoFilter(fragmentID, feImgs[i]);
    //         };
    //     }

    //     function fragmentAsURIintoFilter(identifier, fePrimitive){
    //         var el = document.querySelector(identifier);
    //         var styledEl = inlineStyles(el);
    //         var nsAttr = "http://www.w3.org/2000/svg";
    //         if ( !styledEl.getAttribute("xmlns" )){
    //             styledEl.setAttribute("xmlns", nsAttr);
    //         }
    //         var text = encodeURIComponent(styledEl.outerHTML.replace(/100%/g, "256")).replace("\"", "\'");
    //         var target = fePrimitive;

    //         target.setAttribute("xlink:href", "data:image/svg+xml;charset=utf-8," + text);
    //     }

    // )();


});