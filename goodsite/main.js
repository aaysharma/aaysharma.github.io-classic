$(document).ready(function() {
    
    $('.header').height($(window).height());
    $('#header').particleground({
        density: 50000,
        parallaxMultiplier: 20,
    });

    // Set the section height to full height
    console.log(window.innerHeight);
    $('.section').height(window.innerHeight);
    $('.section').css('padding', 30);

    $('.nav_button').click(function() {
        var link = this.id.split("_")[0];
        window.location.href = link;
    });

    $('.project_box').click(function() {
        var link = this.id;
        window.location.href = link;
    });
});