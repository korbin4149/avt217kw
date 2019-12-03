$(document).ready(function()
{
  console.log("This site, thou art has created has loaded good sir");


  $(".play").click(function()
  {
    $(".second").toggleClass("show")
  });

  $(".play").click(function()
  {
    $(".first").remove()
  });
  $(".play").click(function()
  {
    $(".play").remove()
  });



});
