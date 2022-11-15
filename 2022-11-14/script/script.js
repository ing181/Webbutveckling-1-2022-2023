
function klickat()
{
  var bollen = document.getElementById("boll");
  bollen.style.border = "thick solid #0000FF";
/*document.getElementById("boll").style.border = "thick solid #0000FF";*/
}
function addera(varnr1,varnr2)
{
                                       /* "nr1" */
    var text1 = document.getElementById(varnr1).value;
    var text2 = document.getElementById(varnr2).value;
    var summa = Number(text1) + Number(text2);
    alert(summa);
}

