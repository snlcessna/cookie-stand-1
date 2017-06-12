debugger;
var imgTest = ["photos/counter.jpg", "photos/fishcookies2.png", "photos/muffins.jpg", "photos/deserts.jpg", "photos/rolls.jpg"];
var imgBoxTest = ['imagebox1', 'imageBox2', 'imageBox3', 'imageBox4', 'imageBox5'];
var img = new Image();

window.onload = function(){ //Pulls the dimensions of each photo in the array imgTest to push to css for styling the images
  for(var i = 0; i < imgTest.length ;i++){
    var importImage = imgTest[i];
    img.src = importImage;
    height = img.height;
    width = img.width;
    document.documentElement.style.setProperty('--height', height + 'px');
    document.documentElement.style.setProperty('--width', width + 'px');
    }
  }
