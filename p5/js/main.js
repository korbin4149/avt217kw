$(document).ready(function()
{
  console.log("This site, thou art has created has loaded good sir");




  $(".seven").click(function()
  {
    $(".third").toggleClass("ColorChange")
  });

  $(".first").click(function()
  {
    $(".first").remove()
  });



});
