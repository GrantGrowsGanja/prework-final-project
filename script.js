function changeImage() {
    var image = document.getElementById('sp1');
    if (image.src.match("sadpeepo1.png")) {
        image.src = "happypeepo1.png";
    } else {
        image.src = "sadpeepo1.png";
    }
}
function sp1Hint() {
    alert("Try clicking ;)");
}

function sp2b() {
    var image2 = document.getElementById('sp2');
    if (image2.src.match("sadpeepo2.png")) {
        image2.src = "happypeepo2.png";
    } else {
        image2.src = "sadpeepo2.png";
    }
}
function sp2Hint() {
    alert("Try hovering your mouse over peepo!");
}

//Array for last peepo task
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'sadpeepo3.png';

imgArray[1] = new Image();
imgArray[1].src = 'sadpeepo4.png';

imgArray[2] = new Image();
imgArray[2].src = 'sadpeepo1.png';

imgArray[3] = new Image();
imgArray[3].src = 'sadpeepo2.png';

imgArray[4] = new Image();
imgArray[4].src = 'happypeepo3.png';

function nextImage(){
    var img = document.getElementById("sp3");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("sp3").src = imgArray[0].src;
                break;
            }
            document.getElementById("sp3").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("sp3");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("sp3").src = imgArray[4].src;
                break;
            }
            document.getElementById("sp3").src = imgArray[i-1].src;
            break;
        }
    }
}
function check() {
    if (document.getElementById("sp1").src.match("happypeepo1.png") && document.getElementById("sp2").src.match("happypeepo2.png") && document.getElementById("sp3").src.match("happypeepo3.png")) {
        alert("You've done it!  All the Peepos are happy!")
    } else {
        alert("Some of the Peepos still seem to be sadge. Double check to make sure you made all the Peepos happy :)")
    }
}