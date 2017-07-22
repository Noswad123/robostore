$(document).ready(function(){
  var robot="";
  var mega="mega";
  var ret="ret";
  var butler="butler";
  function hideAll()
  {
    $("#mega").hide();
    $("#ret").hide();
    $("#butler").hide();
  }


  $("#searchButton").click(function(){

    var i=0;
    robot="#"+$(".searchbox").val();
    i=robot.length;
    hideAll();
        if(robot.substring(1,i)==mega.substring(0,i-1))
        {

          console.log(robot.substring(1,i));
          console.log(mega.substring(0,i-1));
        $("#"+mega).show();
        }

       if(robot.substring(1,i)==ret.substring(0,i-1))
        {

          console.log(robot.substring(1,i));
          console.log(ret.substring(0,i-1));
          $("#"+ret).show();
        }
      if (robot.substring(1,i)==butler.substring(0,i-1))
        {

          console.log(robot.substring(1,i));
          console.log(butler.substring(0,i-1));
          $("#"+butler).show();
        }


    });


});
function highlight(myId,myColor)
{
document.getElementById(myId).style.backgroundColor =myColor;

}
