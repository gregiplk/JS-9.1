//jscripts 9.1

function getTriangleArea(a, h) {
  if ((a >0) && (h > 0)) {
    return a*h/2;
    //console.log(a*h/2)
  }
  if ((a <=0) && (h <= 0)) {
  return("nieprawidłowe dane");
  }
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(5, 5);
var triangle2Area = getTriangleArea(7, 15);
var triangle3Area = getTriangleArea(9, 10);

console.log(triangle1Area, triangle2Area, triangle3Area);