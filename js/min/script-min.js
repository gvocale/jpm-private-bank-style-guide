$(document).ready(function(){function e(e){$(".header-image").css("background-image",'url("'+e+'")')}$("#background-image").change(function(){e($("option:selected",this).data("bg"))}),$("#tint-range").change(function(){$("#tint-value").html(this.value),$(".background-tint").css("opacity",this.value)}),$("#gradient-range").change(function(){$("#gradient-value").html(this.value),$(".background-gradient").css("opacity",this.value)}),$("#box-opacity-range").change(function(){$("#box-opacity-value").html(this.value);var e=this.value,n=$(".header-copy");$(n).css("background-color","rgba(255,255,255,"+e+")")}),$("#inverted-color").change(function(){$(".header-copy").toggleClass("inverted",this.unchecked)}),$("#switch-anchor").change(function(){$(".anchor").toggleClass("hide",this.unchecked),$(".header-container").toggleClass("no-anchor",this.unchecked)}),$("#grid-toggle").change(function(){$(".grid-overlay").toggleClass("hidden",this.unchecked)})});