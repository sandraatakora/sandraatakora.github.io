

    var pointer = $(".pointer");

    $(window).mousemove(function(e) {
        pointer.css({
            top: e.clientY - pointer.height() / 2,
            left: e.clientX - pointer.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            pointer.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            pointer.css({
                opacity: "1"
            });
        });

    $('a')
        .mouseenter(function() {
            pointer.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            pointer.css({
                transform: "scale(1)"
            });
        });

        $(".toggleword")
        .mouseenter(function() {
            pointer.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            pointer.css({
                transform: "scale(1)"
            });
        });

    $(".black")
        .mouseenter(function() {
            pointer.css("mix-blend-mode", "color-dodge");
        })
        .mouseleave(function() {
            pointer.css("mix-blend-mode", "difference");
        });

    $('a')
        .mousedown(function() {
            pointer.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            pointer.css({
                transform: "scale(1)"
            });
        });

        // $('body')
        // .mousedown(function() {
        //     pointer.css({
        //         transform: "scale(.2)"
        //     });
        // })
        // .mouseup(function() {
        //     pointer.css({
        //         transform: "scale(1)"
        //     });
        // });


        $(".toggleword")
        .mousedown(function() {
            pointer.css({
                transform: "scale(3.2)"
            });
            this.style.color = randomColors();
            function randomColors() {
                return '#' + Math.floor(Math.random() * 16777215).toString(16);
              }
        })
        .mouseup(function() {
            pointer.css({
                transform: "scale(3.2)"
            });
        });



 // EMOJI

var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
});

// cache the selector
var follower = $("#emoji");
var xp = 0;

var loop = setInterval(function(){
    var width = $(window).width();
    mouseX = Math.max(mouseX, 230);
    mouseX = Math.min(mouseX, width-100);
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    follower.css({left:xp});
    
}, 30);


// REPLACE WORD

// Leverage event-delegation via bubbling
document.addEventListener( "click", function toggleWords ( event ) {
    // A few variables to help us track important values/references
    var target = event.target, values = [], placed;
    // If the clicked element has multiple values
    if ( target.hasAttribute( "data-values" ) ) {
        // Split those values out into an array
        values = target.getAttribute( "data-values" ).split( "," );
        // Find the location of its current value in the array
        placed = values.indexOf( target.textContent );
        // Set its text to be the next value in the array
        target.textContent = values[ ++placed % values.length ];   
    }
});

// Change word color







