//<![CDATA[ 
$(window).load(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 9000,
    values: [50, 6000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + "-" + ui.values[1] + " บาท ");
    }
  });
  $("#amount").val("" + $("#slider-range").slider("values", 0) + "-" + $("#slider-range").slider("values", 1) + " บาท ");

}); //]]>





