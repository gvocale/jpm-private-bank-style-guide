$(document).ready(function() {

    $("#grid-toggle").change(function() {
        $(".grid-overlay").toggleClass("hidden", this.unchecked);
    });

});
