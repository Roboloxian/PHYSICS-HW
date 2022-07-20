var d, dis, t, unit1, unit2, unit3;
dis = Number.parseFloat(window.prompt("Enter the displacement "));
unit1 = window.prompt("Tell the unit m or km ").toString();

if (unit1 === "km") {
  document.write("Displacement in metres is ", dis * 1000, "m <br>");
} else {
  document.write("As it is already in metres so we proceed <br>");
}

d = Number.parseFloat(window.prompt("Enter the distance travelled "));
unit2 = window.prompt("Tell the unit m or km ").toString();

if (unit1 === "km") {
  document.write("Distance in metres is ", d * 1000, "m <br>");
} else {
  document.write("As it is already in metres so we proceed <br>");
}

t = Number.parseFloat(window.prompt("Enter the time taken to travel the distance "));
unit3 = window.prompt("Tell the unit s or hr ").toString();

if (unit3 === "hr") {
  document.write("Time in seconds is ", t * 3600, "s <br>");
}

document.write("<br>Avg speed<br>");
document.write("= total distance/total time taken <br>");
document.write("=", d / t, "m/s<br>");
document.write("Therefore average speed=", d / t, "<br>");
document.write("<br>Avg velocity <br>");
document.write("= total distance/total time taken <br>");
document.write("=", dis / t, "m/s <br>");
document.write("Therefore average velocity=", dis / t, "<br>");
