$(document).ready(function() {

    //change the background color based on the data-bg attribute

    $('#background-image').change(function() {
        changeBg($('option:selected', this).data('bg'));
    });

    // change background image
    function changeBg(bg) {
        $(".header-image").css('background-image', 'url("' + bg + '")');
    }

    // change tint
    $("#tint-range").change(function() {
        $("#tint-value").html(this.value);
        $(".background-tint").css("opacity", this.value);
    });

    // change bottom gradient
    $("#gradient-range").change(function() {
        $("#gradient-value").html(this.value);
        $(".background-gradient").css("opacity", this.value);
    });

    // change box opacity
    $("#box-opacity-range").change(function() {
        $("#box-opacity-value").html(this.value);
        var alpha = this.value;
        var f = $('.header-copy');
        $(f).css('background-color', 'rgba(255,255,255,' + alpha + ')');
    });

    // inverts color of copy in box
    $("#inverted-color").change(function() {
        $(".header-copy").toggleClass("inverted", this.unchecked);
    });

    // toggle anchor
    $("#switch-anchor").change(function() {
        $(".anchor").toggleClass("hide", this.unchecked);
        $(".header-container").toggleClass("no-anchor", this.unchecked);
    });

    // Toggle for grid
    $("#grid-toggle").change(function() {
        $(".grid-overlay").toggleClass("hidden", this.unchecked);
    });

    // Toggle headline-top in Promos
    $("#checkbox-headline-top").change(function() {
        $(".promo-1-column").toggleClass("headline-top", this.unchecked);
        $(".promo-2-column").toggleClass("headline-top", this.unchecked);
        $(".promo-3-column").toggleClass("headline-top", this.unchecked);
    });

    // Toggle gutter in Promos
    $("#checkbox-gutter").change(function() {
        $(".promo-1-column").toggleClass("no-gutter", this.unchecked);
        $(".promo-2-column").toggleClass("no-gutter", this.unchecked);
        $(".promo-3-column").toggleClass("no-gutter", this.unchecked);
    });

    // Toggle full screen navigation
    $("#nav-primary-hamburger").change(function() {
        $(".overlay").toggleClass("open", this.unchecked);
        $("nav").toggleClass("open", this.unchecked);
    });


    // Making navigation stick
    $(window).scroll(function() {
        if ($(window).scrollTop() > 90) {
            $('nav').addClass('stick');
        } else {
            $('nav').removeClass('stick');
        }

    });
});
