$(document).ready(function() {

    //change the background color based on the data-bg attribute

    $('#background-image').change(function() {
        changeBg($('option:selected', this).data('bg'));
    });

    function changeBg(bg) {
        $(".header-image").css('background-image', 'url("' + bg + '")');
    }

    $("#opacity-range").change(function() {
        $("#opacity-value").html(this.value);
        $(".background-tint").css("opacity", this.value);
    });
    $("#gradient-range").change(function() {
        $("#gradient-value").html(this.value);
        $(".background-gradient").css("opacity", this.value);
    });

    $("#box-opacity-range").change(function() {
        $("#box-opacity-value").html(this.value);
        var alpha = this.value;
        var f = $('.header-copy');
        $(f).css('background-color', 'rgba(255,255,255,' + alpha + ')');
    });

    $("#inverted-color").change(function() {
        $(".header-copy").toggleClass("inverted", this.unchecked);
    });

    $("#switch-anchor").change(function() {
        $(".tab").toggleClass("hide", this.unchecked);
        $(".header-container").toggleClass("article", this.unchecked);
    });

    // Toggle for grid

    $("#grid-toggle").change(function() {
        $(".grid-overlay").toggleClass("hidden", this.unchecked);
    });


});
