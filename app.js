//function photoDim() {

//}
var img = new Image();
var imgTest = ["photos/counter.jpg", "photos/deserts.jpg", "photos/fishcookies2.png", "photos/muffins.jpg", "photos/rolls.jpg"];
debugger;
  img.onload = function(){
    for(var i = 0; i < imgTest.length ;i++){
      var importImage = imgtest[i];
      img.src = importImage;
      height = img.height;
      width = img.width;
      console.log(height + " " + i);
      console.log(width + " " + i);
  }
}
