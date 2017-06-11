var img = new Image();
img.onload = function photoDimTest() {
//  alert(this.width + 'x' + this.height);
  height = img.height;
  width = img.width;
  console.log(height);
}
img.src = "salmoncookie.jpg";
/*img.src = 'photos/salmoncookie.jpg';
imgDimTest();
function imgDimTest() {
  var img = new Image();
  height = img.height;
  console.log(height + " Test 2 for height")
}*/
