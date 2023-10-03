
//configure the paths of the images, plus corresponding target links
slideshowimages("image/img/img1.jpg","image/img/img2.jpg","image/img/img3.jpg","image/img/img4.jpg","image/img/img5.jpg")

//configure the speed of the slideshow, in miliseconds
var slideshowspeed=2000

var whichlink=0
var whichimage=0
function slideit(){
if (!document.images)
return
document.images.slide.src=slideimages[whichimage].src
whichlink=whichimage
if (whichimage<slideimages.length-1)
whichimage++
else
whichimage=0
setTimeout("slideit()",slideshowspeed)
}
slideit()

