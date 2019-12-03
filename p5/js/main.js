$(document).ready(function()
{
  console.log("This site, thou art has created has loaded good sir");


  $(".first").click(function()
  {
    $(".second").toggleClass("show")
  });

  $(".first").click(function()
  {
    $(".first").remove()
  });



});
