$(document).ready(function(){
//  $('.btn.dropdown-toggle.nav-item').text('Libraries'); // change text for dropdown menu in header from More to Libraries
    $('#ethical-ad-placement').css({  //weanken the display effect of ads div
        // "transform":"scale(0.3)",   // make it smaller
        // "position":"absolute",      // modify its position
        // "top":"-75px",
        // "left":"-110px",
        // "opacity":"0.7"             // modify its opacity
        "display":"none"
    });
    // $('#ethical-ad-placement').parent().css({
    //     "position":"relative",      // modify ads position
    //     "height":"60px"             // give it a default height to prevent wrong display
    // })

    // manually add the ads to the end of content
    $(".bd-footer-article").append(
        "myads\
        <div\
        id='ethical-ad-placement'\
        class='flat'\
        data-ea-publisher='readthedocs'\
        data-ea-type='readthedocs-sidebar'\
        data-ea-manual='true'\
      ></div>"
    )
})